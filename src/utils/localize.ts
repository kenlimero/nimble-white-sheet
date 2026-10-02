export default function localize(key: string): string {
	return game.i18n?.localize(key) ?? key;
}

export function format(key: string, data: Record<string, string | number>): string {
	const stringData = Object.fromEntries(
		Object.entries(data).map(([k, v]) => [k, String(v)]),
	);
	return game.i18n?.format(key, stringData) ?? key;
}
