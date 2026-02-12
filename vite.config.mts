import path from 'node:path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';
import { defineConfig } from 'vite';

export default defineConfig({
	root: 'src/',
	base: '/modules/nimble-white-sheet/',
	publicDir: path.resolve(__dirname, 'public'),
	server: {
		port: 30002,
		proxy: {
			'^(?!/modules/nimble-white-sheet)': 'http://localhost:30000',
			'/socket.io': { target: 'ws://localhost:30000', ws: true },
		},
	},
	build: {
		outDir: path.resolve(__dirname, 'dist'),
		emptyOutDir: true,
		sourcemap: true,
		lib: {
			name: 'NimbleWhiteSheet',
			entry: path.resolve(__dirname, 'src/main.ts'),
			formats: ['es'],
			fileName: 'nimble-white-sheet',
		},
	},
	esbuild: {
		keepNames: true,
	},
	plugins: [
		svelte({
			configFile: path.resolve(__dirname, 'svelte.config.js'),
			preprocess: sveltePreprocess({
				typescript: { tsconfigFile: './tsconfig.json' },
			}),
			onwarn: (warning, handler) => {
				// Suppress a11y warnings (Foundry doesn't follow accessibility rules)
				if (warning.code?.startsWith('a11y')) return;
				if (warning.code === 'state_referenced_locally') return;
				handler?.(warning);
			},
		}),
	],
	resolve: {
		conditions: ['browser'],
	},
});
