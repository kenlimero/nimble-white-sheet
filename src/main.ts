import WhiteCharacterSheet from './sheets/WhiteCharacterSheet.svelte.js';
import './scss/main.scss';

Hooks.once('init', () => {
	type ActorSheetConstructor = Parameters<
		typeof foundry.documents.collections.Actors.registerSheet
	>[1];

	foundry.documents.collections.Actors.registerSheet(
		'nimble-white-sheet',
		WhiteCharacterSheet as unknown as ActorSheetConstructor,
		{
			types: ['character'],
			makeDefault: false,
			label: 'Nimble White Sheet',
		},
	);
});
