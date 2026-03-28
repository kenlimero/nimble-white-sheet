// ──────────────────────────────────────────────
// Nimble White Sheet – shared type definitions
// ──────────────────────────────────────────────

/** Subset of FoundryVTT Actor used throughout this module. */
export interface NimbleActor extends Actor {
	readonly id: string;
	readonly items: foundry.abstract.EmbeddedCollection<Item.Implementation>;
	readonly system: NimbleActorSystem;
	readonly flags: { nimble?: NimbleFlags };
	readonly levels: { character: number };
	readonly classes: Record<string, { identifier: string }>;
	readonly reactive: NimbleActor;
	readonly img: string;
	readonly name: string;
	readonly uuid: string;

	// Nimble system methods
	activateItem(id: string): void;
	rollInitiative(options: { createCombatants: boolean }): Promise<void>;
	rollSavingThrowToChat(key: string): void;
	rollAbilityCheckToChat(key: string): void;
	rollSkillCheckToChat(key: string): void;
	configureHitPoints(): void;
	configureMana(): void;
	configureHitDice(): void;
	configureMovement(): void;
	configureSavingThrows(): void;
	configureAbilityScores(): void;
	configureSkills(): void;
	configureLanguageProficiencies(): void;
	configureArmorProficiencies(): void;
	configureWeaponProficiencies(): void;
	editMetadata(): void;
	triggerLevelUp(): void;
	triggerLevelDown(): void;
	triggerRest(options: { restType: string }): void;
	updateCurrentHitDice(value: number): Promise<void>;
	rollHitDice(): Promise<void>;
	editCurrentHitDice(): Promise<void>;
	setFlag(scope: string, key: string, value: unknown): Promise<void>;
	update(data: Record<string, unknown>): Promise<void>;
	createEmbeddedDocuments(type: string, data: object[]): Promise<Item[]>;
	deleteEmbeddedDocuments(type: string, ids: string[]): Promise<Item[]>;
}

export interface NimbleActorSystem {
	attributes: {
		hp: { value: number; max: number; temp: number };
		armor: { value: number };
		initiative: { mod: number };
		movement: { walk: number };
		wounds: { value: number; max: number };
		hitDice: Record<number, HitDieEntry>;
		bonusHitDice: BonusHitDieEntry[];
		hitDiceSizeBonus: number;
		sizeCategory: string;
	};
	abilities: Record<string, NimbleAbility>;
	savingThrows: Record<string, NimbleSave>;
	skills: Record<string, NimbleSkill>;
	resources: {
		mana: NimbleMana;
	};
	currency: Record<string, { value: number }>;
	details: NimbleDetails;
	proficiencies: {
		languages: string[];
		armor: string[];
		weapons: string[];
	};
	inventory: {
		usedSlots: number;
		totalSlots: number;
	};
	levelUpHistory: unknown[];
}

export interface HitDieEntry {
	current: number;
	bonus?: number;
}

export interface BonusHitDieEntry {
	size: number;
	value: number;
}

export interface NimbleAbility {
	mod: number;
	value: number;
}

export interface NimbleSave {
	mod: number;
	defaultRollMode: number;
}

export interface NimbleSkill {
	mod: number;
}

export interface NimbleMana {
	current: number;
	max: number;
	baseMax: number;
	color?: string;
}

export interface NimbleDetails {
	age: string;
	gender: string;
	height: string;
	weight: string;
	notes: string;
}

// ── Items ────────────────────────────────────

export type NimbleItemType =
	| 'class'
	| 'subclass'
	| 'ancestry'
	| 'background'
	| 'feature'
	| 'boon'
	| 'spell'
	| 'object';

export interface NimbleItem {
	readonly id: string;
	readonly uuid: string;
	readonly name: string;
	readonly img: string;
	readonly type: NimbleItemType;
	readonly sort: number;
	readonly system: Record<string, unknown>;
	readonly sheet?: { render(force: boolean): void };
}

export interface ClassItemSystem {
	classLevel: number;
	hitDieSize: number;
	mana?: { formula?: { length: number } };
}

export interface SubclassItemSystem {
	parentClass?: string;
	identifier?: string;
}

export interface SpellItemSystem {
	tier: number;
	isUtility: boolean;
	concentration: boolean;
	activationCost: string;
	description?: { baseEffect?: string };
}

export interface ObjectItemSystem {
	objectType?: string;
	quantity: number;
	description?: { public?: string };
}

// ── Flags ────────────────────────────────────

export interface NimbleFlags {
	editingEnabled?: boolean;
	darkMode?: boolean;
	colorScheme?: ColorScheme;
	customColors?: Partial<CustomColorMap>;
	trackInventorySlots?: boolean;
}

// ── Color scheme ─────────────────────────────

export type ColorScheme = 'white' | 'dark' | 'nimble' | 'custom';

export interface CustomColorMap {
	bgPrimary: string;
	bgSecondary: string;
	bgInput: string;
	textPrimary: string;
	textSecondary: string;
	textLabel: string;
	borderColor: string;
	borderLight: string;
	accent: string;
	highlight: string;
	labelBg: string;
	labelText: string;
	danger: string;
	success: string;
	manaColor: string;
}

export const COLOR_DEFAULTS: CustomColorMap = {
	bgPrimary: '#fafafa',
	bgSecondary: '#f0f0f0',
	bgInput: '#ffffff',
	textPrimary: '#222222',
	textSecondary: '#555555',
	textLabel: '#ffffff',
	borderColor: '#333333',
	borderLight: '#888888',
	accent: '#444444',
	highlight: '#c2dbf4',
	labelBg: '#333333',
	labelText: '#ffffff',
	danger: '#b01b19',
	success: '#3b8a57',
	manaColor: '#3d7ab8',
};

export const CSS_VAR_MAP: Record<keyof CustomColorMap, string> = {
	bgPrimary: '--nos-bg-primary',
	bgSecondary: '--nos-bg-secondary',
	bgInput: '--nos-bg-input',
	textPrimary: '--nos-text-primary',
	textSecondary: '--nos-text-secondary',
	textLabel: '--nos-text-label',
	borderColor: '--nos-border-color',
	borderLight: '--nos-border-light',
	accent: '--nos-accent',
	highlight: '--nos-highlight',
	labelBg: '--nos-label-bg',
	labelText: '--nos-label-text',
	danger: '--nos-danger',
	success: '--nos-success',
	manaColor: '--nos-mana-color',
};

// ── Hit Dice helpers ─────────────────────────

export interface HitDiceDataBySize {
	[dieSize: number]: { current: number; total: number };
}

export interface HitDiceData {
	bySize: HitDiceDataBySize;
	value: number;
	max: number;
}

const DIE_SIZES = [4, 6, 8, 10, 12, 20] as const;

export function incrementDieSize(size: number, bonus: number): number {
	if (!bonus) return size;
	const idx = DIE_SIZES.indexOf(size as (typeof DIE_SIZES)[number]);
	if (idx === -1) return size;
	return DIE_SIZES[Math.min(idx + bonus, DIE_SIZES.length - 1)];
}

/**
 * Aggregate hit dice from class items, bonus hit dice, and per-size bonuses
 * into a single { bySize, value, max } structure.
 */
export function computeHitDiceData(
	hitDiceAttr: Record<number, HitDieEntry>,
	bonusHitDice: BonusHitDieEntry[],
	classes: { system: ClassItemSystem }[],
	hitDiceSizeBonus: number,
): HitDiceData {
	const bySize: HitDiceDataBySize = {};

	// 1. Class-based hit dice
	for (const cls of classes) {
		const size = incrementDieSize(cls.system.hitDieSize, hitDiceSizeBonus);
		const classLevel = cls.system.classLevel;
		bySize[size] ??= { current: 0, total: 0 };
		bySize[size].total += classLevel;
		bySize[size].current = hitDiceAttr[size]?.current ?? 0;
	}

	const effectiveClassSizes = classes.map((cls) =>
		incrementDieSize(cls.system.hitDieSize, hitDiceSizeBonus),
	);

	// 2. Bonus hit dice array
	for (const entry of bonusHitDice) {
		const size = incrementDieSize(entry.size, hitDiceSizeBonus);
		bySize[size] ??= { current: hitDiceAttr[size]?.current ?? 0, total: 0 };
		bySize[size].total += entry.value;
		if (!effectiveClassSizes.includes(size)) {
			bySize[size].current = hitDiceAttr[size]?.current ?? 0;
		}
	}

	const effectiveBonusSizes = bonusHitDice.map((entry) =>
		incrementDieSize(entry.size, hitDiceSizeBonus),
	);

	// 3. Per-size bonus field
	for (const [sizeStr, hitDieData] of Object.entries(hitDiceAttr ?? {})) {
		const size = incrementDieSize(Number(sizeStr), hitDiceSizeBonus);
		const bonus = hitDieData?.bonus ?? 0;
		if (bonus > 0) {
			bySize[size] ??= { current: 0, total: 0 };
			bySize[size].total += bonus;
			if (!effectiveClassSizes.includes(size) && !effectiveBonusSizes.includes(size)) {
				bySize[size].current = hitDiceAttr[size]?.current ?? 0;
			}
		}
	}

	// Totals
	let value = 0;
	let max = 0;
	for (const data of Object.values(bySize)) {
		value += data.current;
		max += data.total;
	}

	return { bySize, value, max };
}

// ── CONFIG.NIMBLE shape ──────────────────────

export interface NimbleConfig {
	sizeCategories: Record<string, string>;
	defaultSkillAbilities: Record<string, string>;
	abilityScoreAbbreviations: Record<string, string>;
	skills: Record<string, string>;
	classes?: Record<string, string>;
}

// ── Token actor resolution ───────────────────

export interface TokenDocument {
	isToken: boolean;
	parent?: { actor: Actor };
}
