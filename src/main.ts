import OfficialCharacterSheet from './sheets/OfficialCharacterSheet.svelte.js';
import './scss/main.scss';

Hooks.once('init', () => {
	type ActorSheetConstructor = Parameters<
		typeof foundry.documents.collections.Actors.registerSheet
	>[1];

	foundry.documents.collections.Actors.registerSheet(
		'nimble-official-sheet',
		OfficialCharacterSheet as unknown as ActorSheetConstructor,
		{
			types: ['character'],
			makeDefault: false,
			label: 'Official Nimble Sheet',
		},
	);
});
