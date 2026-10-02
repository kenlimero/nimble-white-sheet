import {
	SvelteApplicationMixin,
	type SvelteApplicationRenderContext,
} from '../lib/SvelteApplicationMixin.svelte.js';
import type { NimbleActor, NimbleConfig, SubclassItemSystem, TokenDocument } from '../types.js';
import localize, { format } from '../utils/localize.js';
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

	// Foundry may call setPosition() without arguments: default to an empty object.
	override setPosition(position: Parameters<foundry.applications.api.ApplicationV2['setPosition']>[0] = {}) {
		if (typeof position.width === 'number' && position.width < WhiteCharacterSheet.MIN_WIDTH) {
			position.width = WhiteCharacterSheet.MIN_WIDTH;
		}
		if (typeof position.height === 'number' && position.height < WhiteCharacterSheet.MIN_HEIGHT) {
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

	// Foundry v14 resolves the drop into an Item and fires the dropActorSheetData hook in _onDrop
	// before calling this. Same flow as the core implementation (owner check, reorder within the
	// actor, create with keepId), plus the Nimble rules for subclasses.
	protected override async _onDropItem(
		event: DragEvent,
		item: Item.Implementation,
	): Promise<Item.Implementation | null> {
		if (!this.document.isOwner) return null;

		// An item dropped from this actor onto its own sheet is a reorder.
		if (item.parent?.uuid === this._actor.uuid) {
			const sorted = await this._onSortItem(event, item);
			return sorted?.length ? item : null;
		}

		const keepId = !this._actor.items.has(item.id ?? '');
		const itemData = item.toObject() as unknown as Record<string, unknown>;
		if ((item.type as string) === 'subclass' && !(await this._confirmSubclassDrop(itemData))) {
			return null;
		}

		try {
			const [created] = await this._actor.createEmbeddedDocuments('Item', [itemData], { keepId });
			return (created as Item.Implementation | undefined) ?? null;
		} catch (err) {
			console.error('nimble-white-sheet | Failed to create item:', err);
			ui.notifications?.error(localize('NWS.ItemAddFailed'));
			return null;
		}
	}

	/**
	 * Check a dropped subclass against the Nimble rules (level 3+, matching class, one subclass per
	 * class) and, when the actor already has another one, replace it after confirmation.
	 * Resolves to whether the dropped subclass should be created.
	 */
	async _confirmSubclassDrop(itemData: Record<string, unknown>): Promise<boolean> {
		const nimbleConfig = (CONFIG as { NIMBLE?: NimbleConfig }).NIMBLE;
		const subclass = itemData as { name?: string; system?: SubclassItemSystem };
		const parentClass = subclass.system?.parentClass;

		const characterLevel = this._actor.levels?.character ?? 0;
		if (characterLevel < 3) {
			ui.notifications?.warn(format('NWS.SubclassLevelRequired', { level: characterLevel }));
			return false;
		}

		const hasMatchingClass = Object.values(this._actor.classes ?? {}).some(
			(cls) => cls.identifier === parentClass,
		);
		if (!hasMatchingClass) {
			const className = nimbleConfig?.classes?.[parentClass ?? ''] ?? parentClass;
			ui.notifications?.warn(
				format('NWS.SubclassClassRequired', { name: subclass.name ?? '', className: className ?? '' }),
			);
			return false;
		}

		const existingSubclass = this._actor.items.find(
			(i) => i.type === 'subclass' && (i.system as SubclassItemSystem)?.parentClass === parentClass,
		);
		if (!existingSubclass) return true;

		const existingSystem = existingSubclass.system as SubclassItemSystem;
		const newIdentifier = subclass.system?.identifier;
		if (existingSystem?.identifier && newIdentifier && existingSystem.identifier === newIdentifier) {
			ui.notifications?.warn(format('NWS.SubclassAlreadyOwned', { name: existingSubclass.name }));
			return false;
		}

		const confirmed = await foundry.applications.api.DialogV2.confirm({
			content: `<p>${format('NWS.SubclassReplace', {
				current: foundry.utils.escapeHTML(existingSubclass.name),
				name: foundry.utils.escapeHTML(subclass.name ?? ''),
			})}</p>`,
			rejectClose: false,
			modal: true,
		});
		if (!confirmed) return false;

		try {
			await this._actor.deleteEmbeddedDocuments('Item', [existingSubclass.id]);
			return true;
		} catch (err) {
			console.error('nimble-white-sheet | Failed to remove existing subclass:', err);
			ui.notifications?.error(localize('NWS.SubclassRemoveFailed'));
			return false;
		}
	}
}
