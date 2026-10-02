/** Id of the released module; the dev build is installed as nimble-white-sheet-dev. */
export const RELEASE_ID = 'nimble-white-sheet';

// Foundry serves this file from /modules/<module id>/, so the dev build and the released module
// each get their own id (sheet registration, flag scope) when both are active.
export const MODULE_ID =
	new URL(import.meta.url).pathname.match(/\/modules\/([^/]+)\//)?.[1] ?? RELEASE_ID;
