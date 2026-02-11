/**
 * Format a numeric modifier as "+X" or "\u2212X" (with proper minus sign).
 */
export default function formatModifier(value: number): string {
	if (value >= 0) return `+${value}`;
	return `\u2212${Math.abs(value)}`;
}
