import {
	SvelteApplicationMixin,
	type SvelteApplicationRenderContext,
} from '../lib/SvelteApplicationMixin.svelte.js';
import type { NimbleActor, NimbleConfig, SubclassItemSystem, TokenDocument } from '../types.js';
import WhiteSheetComponent from '../view/WhiteSheet.svelte';

export default class WhiteCharacterSheet extends SvelteApplicationMixin(
	foundry.applications.sheets.ActorSheetV2,
) {
	protected _actor: NimbleActor;
	protected root;

	constructor(
		actor: { document: Actor },
		options = {} as SvelteApplicationRenderContext,
	) {
		super(
			foundry.utils.mergeObject(options, {
				document: actor.document,
			}) as ConstructorParameters<typeof foundry.applications.sheets.ActorSheetV2>[0],
		);

		this.root = WhiteSheetComponent;

		const doc = actor.document as unknown as TokenDocument;
		const resolvedActor = doc.isToken ? doc.parent?.actor : actor.document;
		this._actor = (resolvedActor ?? actor.document) as unknown as NimbleActor;
	}

	override get actor(): Actor {
		return this._actor as unknown as Actor;
	}

	static MIN_WIDTH = 670;
	static MIN_HEIGHT = 400;

	static override DEFAULT_OPTIONS = {
		classes: ['nimble-white-sheet'],
		form: {
			submitOnChange: false,
		},
		window: {
			icon: 'fa-solid fa-scroll',
			resizable: true,
		},
		position: {
			width: 650,
			height: 750,
		},
	};

	override setPosition(position?: { width?: number; height?: number; [key: string]: unknown }) {
		if (!position) return super.setPosition(position);
		if (position.width !== undefined && position.width < WhiteCharacterSheet.MIN_WIDTH) {
			position.width = WhiteCharacterSheet.MIN_WIDTH;
		}
		if (position.height !== undefined && position.height < WhiteCharacterSheet.MIN_HEIGHT) {
			position.height = WhiteCharacterSheet.MIN_HEIGHT;
		}
		return super.setPosition(position);
	}

	protected override async _prepareContext(
		options: Parameters<foundry.applications.sheets.ActorSheetV2['_prepareContext']>[0],
	): ReturnType<foundry.applications.sheets.ActorSheetV2['_prepareContext']> {
		const context = await super._prepareContext(options);
		return {
			...context,
			actor: this._actor,
			sheet: this,
		} as object as Awaited<
			ReturnType<foundry.applications.sheets.ActorSheetV2['_prepareContext']>
		>;
	}

	async _onDropItem(event: DragEvent, data: Record<string, unknown>): Promise<false | Item[] | undefined> {
		event.preventDefault();
		event.stopPropagation();

		const allowed = Hooks.call(
			'dropActorSheetData',
			this.document,
			this as unknown as foundry.applications.sheets.ActorSheetV2.Any,
			data as foundry.appv1.sheets.ActorSheet.DropData,
		);
		if (allowed === false) return false;
		if (!this.document.isOwner) return false;

		let item: Item.Implementation | null;
		try {
			item = await Item.implementation.fromDropData(data);
		} catch (err) {
			console.error('nimble-white-sheet | Failed to resolve dropped item:', err);
			ui.notifications?.error('Failed to resolve the dropped item.');
			return false;
		}

		if (!item) return false;

		const itemData = item.toObject() as ReturnType<Item.Implementation['toObject']> & {
			uuid?: string;
			id?: typeof item.id;
		};
		itemData.id = item.id;
		if (item.uuid && !itemData.uuid) {
			itemData.uuid = item.uuid;
		}

		const keepId = !this._actor.items.has(item.id ?? '');
		if (!keepId) {
			return (this as object as { _onSortItem(e: DragEvent, d: object): void })._onSortItem(
				event,
				itemData,
			) as undefined;
		}

		const items = Array.isArray(itemData) ? itemData : [itemData];
		const hasSubclass = items.some(
			(i: { type?: string }) => i.type === 'subclass',
		);

		try {
			if (hasSubclass) {
				return await this._onDropSubclassCreate(items);
			}
			return await this._actor.createEmbeddedDocuments('Item', items);
		} catch (err) {
			console.error('nimble-white-sheet | Failed to create item(s):', err);
			ui.notifications?.error('Failed to add the item to this character.');
			return [];
		}
	}

	async _onDropSubclassCreate(
		itemData: Record<string, unknown> | Record<string, unknown>[],
	): Promise<Item[]> {
		const items = Array.isArray(itemData) ? itemData : [itemData];
		const nimbleConfig = (CONFIG as { NIMBLE?: NimbleConfig }).NIMBLE;

		const validatedItems: Record<string, unknown>[] = [];

		for (const item of items) {
			if (item.type !== 'subclass') {
				validatedItems.push(item);
				continue;
			}

			const subclass = item as { name?: string; system?: SubclassItemSystem };
			const parentClass = subclass.system?.parentClass;

			// Level check
			const characterLevel = this._actor.levels?.character ?? 0;
			if (characterLevel < 3) {
				ui.notifications?.warn(
					`You must be at least level 3 to select a subclass. You are currently level ${characterLevel}.`,
				);
				continue;
			}

			// Class requirement check
			const hasMatchingClass = Object.values(this._actor.classes ?? {}).some(
				(cls) => cls.identifier === parentClass,
			);

			if (!hasMatchingClass) {
				const className = nimbleConfig?.classes?.[parentClass ?? ''] ?? parentClass;
				ui.notifications?.warn(
					`The subclass "${subclass.name}" requires the ${className} class.`,
				);
				continue;
			}

			// Duplicate subclass check
			const existingSubclass = this._actor.items.find(
				(i: { type: string; system: unknown }) =>
					i.type === 'subclass' &&
					(i.system as SubclassItemSystem)?.parentClass === parentClass,
			);

			if (existingSubclass) {
				const existingSystem = existingSubclass.system as unknown as SubclassItemSystem;
				const newIdentifier = subclass.system?.identifier;

				if (existingSystem?.identifier && newIdentifier && existingSystem.identifier === newIdentifier) {
					ui.notifications?.warn(`You already have the "${existingSubclass.name}" subclass.`);
					continue;
				}

				const confirmed = await foundry.applications.api.DialogV2.confirm({
					content: `<p>You already have the <strong>${existingSubclass.name}</strong> subclass.<br />Do you want to replace it with <strong>${subclass.name}</strong>?</p>`,
					rejectClose: false,
					modal: true,
				});

				if (!confirmed) continue;

				try {
					await this._actor.deleteEmbeddedDocuments('Item', [existingSubclass.id!]);
				} catch (err) {
					console.error('nimble-white-sheet | Failed to remove existing subclass:', err);
					ui.notifications?.error('Failed to remove the existing subclass.');
					continue;
				}
			}

			validatedItems.push(item);
		}

		if (validatedItems.length === 0) return [];

		try {
			return await this._actor.createEmbeddedDocuments('Item', validatedItems);
		} catch (err) {
			console.error('nimble-white-sheet | Failed to create subclass item(s):', err);
			ui.notifications?.error('Failed to add the subclass to this character.');
			return [];
		}
	}
}
