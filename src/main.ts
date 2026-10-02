import WhiteCharacterSheet from './sheets/WhiteCharacterSheet.svelte.js';
import './scss/main.scss';
import { MODULE_ID, RELEASE_ID } from './utils/moduleId.js';

Hooks.once('init', () => {

	type ActorSheetConstructor = Parameters<
		typeof foundry.documents.collections.Actors.registerSheet
	>[1];

	foundry.documents.collections.Actors.registerSheet(
		MODULE_ID,
		WhiteCharacterSheet as unknown as ActorSheetConstructor,
		{
			types: ['character'],
			makeDefault: false,
			label: MODULE_ID === RELEASE_ID ? 'Nimble White Sheet' : `Nimble White Sheet (${MODULE_ID})`,
		},
	);
});
