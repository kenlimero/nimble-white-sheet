import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	compilerOptions: {
		runes: true,
		// Foundry's own markup does not follow a11y rules; shared by Vite and svelte-check.
		warningFilter: (warning) =>
			!warning.code.startsWith('a11y') && warning.code !== 'state_referenced_locally',
	},
	preprocess: sveltePreprocess({
		scss: {
			prependData: '@use "src/scss/variables" as *;',
		},
		typescript: {
			tsconfigFile: './tsconfig.json',
		},
	}),
};

export default config;
