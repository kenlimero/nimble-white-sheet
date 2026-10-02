import type { NimbleActor } from '../types.js';
import localize, { format } from './localize.js';

/** Ask for confirmation, then delete the actor's embedded item. */
export default async function deleteItem(actor: NimbleActor, id: string): Promise<void> {
	const item = actor.items.get(id);
	if (!item) return;

	const confirmed = await foundry.applications.api.DialogV2.confirm({
		window: { title: format('NWS.DeleteItemTitle', { name: item.name }) },
		content: `<p>${format('NWS.DeleteItemContent', { name: foundry.utils.escapeHTML(item.name) })}</p>`,
		rejectClose: false,
		modal: true,
	});
	if (!confirmed) return;

	try {
		await actor.deleteEmbeddedDocuments('Item', [id]);
	} catch (err) {
		console.error('nimble-white-sheet | Failed to delete item:', err);
		ui.notifications?.error(localize('NWS.DeleteItemFailed'));
	}
}
