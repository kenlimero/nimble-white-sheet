import {
	SvelteApplicationMixin,
	type SvelteApplicationRenderContext,
} from '../lib/SvelteApplicationMixin.svelte.js';
import WhiteSheetComponent from '../view/WhiteSheet.svelte';

export default class WhiteCharacterSheet extends SvelteApplicationMixin(
	foundry.applications.sheets.ActorSheetV2,
) {
	protected _actor: Actor;
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
		const resolvedActor = (actor.document as any).isToken
			? (actor.document as any).parent?.actor
			: actor.document;
		this._actor = resolvedActor ?? actor.document;
	}

	override get actor(): Actor {
		return this._actor;
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

	override setPosition(position: { width?: number; height?: number; [key: string]: unknown }) {
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

	async _onDropItem(event: DragEvent, data: Record<string, unknown>) {
		event.preventDefault();
		event.stopPropagation();

		const actor = this.document as any;

		const allowed = Hooks.call(
			'dropActorSheetData',
			actor,
			this as unknown as foundry.applications.sheets.ActorSheetV2.Any,
			data as foundry.appv1.sheets.ActorSheet.DropData,
		);
		if (allowed === false) return false;

		if (!this.document.isOwner) return false;

		const item = await Item.implementation.fromDropData(data);
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
			);
		}

		const items = Array.isArray(itemData) ? itemData : [itemData];
		const hasSubclass = items.some((item: any) => item.type === 'subclass');

		if (hasSubclass) {
			return this._onDropSubclassCreate(items);
		} else {
			return this._actor.createEmbeddedDocuments('Item', items);
		}
	}

	async _onDropSubclassCreate(itemData: any) {
		const items = Array.isArray(itemData) ? itemData : [itemData];
		const actor = this.document as any;

		const validatedItems: any[] = [];

		for (const item of items) {
			if (item.type === 'subclass') {
				const subclass = item;
				const parentClass = subclass.system?.parentClass;

				const characterLevel = actor.levels?.character ?? 0;
				if (characterLevel < 3) {
					ui.notifications?.warn(
						`You must be at least level 3 to select a subclass. You are currently level ${characterLevel}.`,
					);
					continue;
				}

				const hasMatchingClass = Object.values(actor.classes ?? {}).some(
					(cls: any) => cls.identifier === parentClass,
				);

				if (!hasMatchingClass) {
					const className = (CONFIG as any).NIMBLE?.classes?.[parentClass] ?? parentClass;
					ui.notifications?.warn(
						`The subclass "${subclass.name}" requires the ${className} class.`,
					);
					continue;
				}

				type SubclassSystem = { parentClass?: string; identifier?: string };
				const existingSubclass = actor.items.find(
					(i: any) =>
						i.type === 'subclass' &&
						(i.system as unknown as SubclassSystem)?.parentClass === parentClass,
				);

				if (existingSubclass) {
					const existingIdentifier = (existingSubclass.system as unknown as SubclassSystem)
						?.identifier;
					const newIdentifier = subclass.system?.identifier;

					if (existingIdentifier && newIdentifier && existingIdentifier === newIdentifier) {
						ui.notifications?.warn(`You already have the "${existingSubclass.name}" subclass.`);
						continue;
					}

					const confirmed = await foundry.applications.api.DialogV2.confirm({
						content: `<p>You already have the <strong>${existingSubclass.name}</strong> subclass.<br />Do you want to replace it with <strong>${subclass.name}</strong>?</p>`,
						rejectClose: false,
						modal: true,
					});

					if (!confirmed) continue;

					await actor.deleteEmbeddedDocuments('Item', [existingSubclass.id!]);
				}
			}

			validatedItems.push(item);
		}

		if (validatedItems.length > 0) {
			return actor.createEmbeddedDocuments('Item', validatedItems);
		}

		return [];
	}
}
