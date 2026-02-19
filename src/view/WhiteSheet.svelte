<script>
	import { setContext } from 'svelte';
	import { createSubscriber } from 'svelte/reactivity';
	import { readable } from 'svelte/store';
	import localize from '../utils/localize.js';
	import HeaderRow from './sections/HeaderRow.svelte';
	import StatsRow from './sections/StatsRow.svelte';
	import SkillsRow from './sections/SkillsRow.svelte';
	import ContentArea from './sections/ContentArea.svelte';
	import SidebarControls from './components/SidebarControls.svelte';

	let { actor: rawActor, sheet } = $props();

	// --- Module-local reactivity ---
	// The system's actor.reactive uses createSubscriber from the system's Svelte runtime.
	// Since this module bundles its own Svelte runtime, the system's subscriptions don't
	// notify our $derived values. We create our own subscription using the module's runtime,
	// listening to the same Foundry hooks.
	const subscribe = createSubscriber((update) => {
		const hooks = {
			updateActor: Hooks.on('updateActor', (doc, _, opts) => {
				if (opts.diff === false) return;
				if (doc._id === rawActor.id) update();
			}),
			createItem: Hooks.on('createItem', (doc) => {
				if (doc?.actor?.id === rawActor.id) update();
			}),
			deleteItem: Hooks.on('deleteItem', (doc) => {
				if (doc?.actor?.id === rawActor.id) update();
			}),
			updateItem: Hooks.on('updateItem', (doc, _, opts) => {
				if (opts.diff === false) return;
				if (doc?.actor?.id === rawActor.id) update();
			}),
		};
		return () => {
			Hooks.off('updateActor', hooks.updateActor);
			Hooks.off('createItem', hooks.createItem);
			Hooks.off('deleteItem', hooks.deleteItem);
			Hooks.off('updateItem', hooks.updateItem);
		};
	});

	// Proxy that intercepts .reactive to use our module-local subscription
	const actor = new Proxy(rawActor, {
		get(target, prop) {
			if (prop === 'reactive') {
				subscribe();
				return target;
			}
			const value = target[prop];
			if (typeof value === 'function') return value.bind(target);
			return value;
		},
	});

	const { sizeCategories, defaultSkillAbilities, abilityScoreAbbreviations } = CONFIG.NIMBLE;

	// --- Derived data (mirrored from system's PlayerCharacterSheet.svelte) ---

	function getHitPointPercentage(currentHP, maxHP) {
		return Math.clamp(0, Math.round((currentHP / maxHP) * 100), 100);
	}

	function prepareCharacterMetadata(characterClass, subclass, ancestry, sizeCategory) {
		const origins = [];
		if (ancestry) {
			origins.push(`${ancestry.name} (${sizeCategories[sizeCategory] ?? sizeCategory})`);
		}
		if (characterClass) {
			if (subclass) {
				origins.push(`${characterClass.name} (${subclass.name}, ${characterClass.system.classLevel})`);
			} else {
				origins.push(`${characterClass.name} (${characterClass.system.classLevel})`);
			}
		}
		return origins.filter(Boolean).join(' ⟡ ');
	}

	function incrementDieSize(size, bonus) {
		if (!bonus) return size;
		const dieSizes = [4, 6, 8, 10, 12, 20];
		const idx = dieSizes.indexOf(size);
		if (idx === -1) return size;
		return dieSizes[Math.min(idx + bonus, dieSizes.length - 1)];
	}

	// HP
	let isBloodied = $derived.by(() =>
		getHitPointPercentage(
			actor.reactive.system.attributes.hp.value,
			actor.reactive.system.attributes.hp.max,
		) <= 50,
	);

	function updateCurrentHP(newValue) {
		actor.update({ 'system.attributes.hp.value': newValue });
	}
	function updateTempHP(newValue) {
		actor.update({ 'system.attributes.hp.temp': newValue });
	}

	// Mana
	let mana = $derived(actor.reactive.system.resources.mana);
	let hasMana = $derived.by(() => {
		if ((mana.max ?? 0) > 0 || (mana.baseMax ?? 0) > 0) return true;
		return actor.reactive.items.some(
			(item) => item.type === 'class' && item.system?.mana?.formula?.length,
		);
	});

	function updateCurrentMana(newValue) {
		actor.update({ 'system.resources.mana.current': newValue });
	}
	// Hit Dice
	let hitDiceData = $derived.by(() => {
		const hitDiceAttr = actor.reactive.system.attributes.hitDice;
		const bonusHitDice = actor.reactive.system.attributes.bonusHitDice ?? [];
		const classes = actor.reactive.items.filter((i) => i.type === 'class');
		const hitDiceSizeBonus = actor.reactive.system.attributes.hitDiceSizeBonus ?? 0;

		const bySize = {};
		for (const cls of classes) {
			const baseSize = cls.system.hitDieSize;
			const size = incrementDieSize(baseSize, hitDiceSizeBonus);
			const classLevel = cls.system.classLevel;
			bySize[size] ??= { current: 0, total: 0 };
			bySize[size].total += classLevel;
			bySize[size].current = hitDiceAttr[size]?.current ?? 0;
		}

		const effectiveClassSizes = classes.map((cls) =>
			incrementDieSize(cls.system.hitDieSize, hitDiceSizeBonus),
		);

		for (const entry of bonusHitDice) {
			const size = incrementDieSize(entry.size, hitDiceSizeBonus);
			bySize[size] ??= { current: hitDiceAttr[size]?.current ?? 0, total: 0 };
			bySize[size].total += entry.value;
			if (!effectiveClassSizes.includes(size)) {
				bySize[size].current = hitDiceAttr[size]?.current ?? 0;
			}
		}

		const effectiveBonusArraySizes = bonusHitDice.map((entry) =>
			incrementDieSize(entry.size, hitDiceSizeBonus),
		);

		for (const [sizeStr, hitDieData] of Object.entries(hitDiceAttr ?? {})) {
			const baseSize = Number(sizeStr);
			const size = incrementDieSize(baseSize, hitDiceSizeBonus);
			const bonus = hitDieData?.bonus ?? 0;
			if (bonus > 0) {
				bySize[size] ??= { current: 0, total: 0 };
				bySize[size].total += bonus;
				const fromClass = effectiveClassSizes.includes(size);
				const fromBonusArray = effectiveBonusArraySizes.includes(size);
				if (!fromClass && !fromBonusArray) {
					bySize[size].current = hitDiceAttr[size]?.current ?? 0;
				}
			}
		}

		let value = 0;
		let max = 0;
		for (const data of Object.values(bySize)) {
			value += data.current;
			max += data.total;
		}

		return { bySize, value, max };
	});

	async function updateCurrentHitDice(newValue) {
		await actor.updateCurrentHitDice(newValue);
	}
	async function rollHitDice() {
		await actor.rollHitDice();
	}
	async function editCurrentHitDice() {
		await actor.editCurrentHitDice();
	}

	// Metadata
	let classItem = $derived(actor.reactive.items.find((item) => item.type === 'class') ?? null);
	let metaData = $derived.by(() => {
		const c = actor.reactive.items.find((i) => i.type === 'class') ?? null;
		const sub = actor.reactive.items.find((i) => i.type === 'subclass') ?? null;
		const anc = actor.reactive.items.find((i) => i.type === 'ancestry') ?? null;
		const size = actor.reactive.system.attributes.sizeCategory;
		return prepareCharacterMetadata(c, sub, anc, size);
	});

	// Wounds
	let wounds = $derived(actor.reactive.system.attributes.wounds);
	function toggleWounds(woundLevel) {
		let newWoundsValue = woundLevel;
		if (woundLevel <= wounds.value) newWoundsValue = woundLevel - 1;
		actor.update({ 'system.attributes.wounds.value': newWoundsValue });
	}

	// Flags
	let flags = $derived(actor.reactive.flags.nimble);
	let editingEnabled = $derived(flags?.editingEnabled ?? true);
	const editingEnabledStore = readable(false, (set) => {
		$effect(() => set(editingEnabled));
		return () => {};
	});

	async function toggleEditingEnabled() {
		await actor.setFlag('nimble', 'editingEnabled', !editingEnabled);
	}

	// Color scheme: 'white' | 'dark' | 'nimble'
	let colorScheme = $derived.by(() => {
		const scheme = flags?.colorScheme;
		if (scheme) return scheme;
		// Backward compatibility: convert old boolean darkMode flag
		if (flags?.darkMode === true) return 'dark';
		return 'white';
	});

	async function setColorScheme(value) {
		await actor.setFlag('nimble', 'colorScheme', value);
	}

	let darkMode = $derived(colorScheme === 'dark');
	let nimbleMode = $derived(colorScheme === 'nimble');

	// Set contexts
	setContext('actor', actor);
	setContext('document', actor);
	setContext('application', sheet);
	setContext('editingEnabled', editingEnabledStore);
</script>

<div class="nos-sheet" class:nos-sheet--dark={darkMode} class:nos-sheet--nimble={nimbleMode} style="position: relative;">
	<div class="nos-top">
		<HeaderRow
			{actor}
			{metaData}
			{editingEnabled}
			{hitDiceData}
		/>

		<StatsRow
			{actor}
			{editingEnabled}
			{isBloodied}
			{hitDiceData}
			{hasMana}
			{mana}
			{wounds}
			{toggleWounds}
			{updateCurrentHP}
			{updateTempHP}
			{updateCurrentMana}
			{updateCurrentHitDice}
			{rollHitDice}
			{editCurrentHitDice}
		/>

		<SkillsRow
			{actor}
			{editingEnabled}
		/>
	</div>

	<ContentArea
		{actor}
		{editingEnabled}
		{hasMana}
		{mana}
		{updateCurrentMana}
	/>

	<SidebarControls
		{actor}
		{editingEnabled}
		{toggleEditingEnabled}
		{classItem}
		{darkMode}
		{colorScheme}
		{setColorScheme}
	/>

	<span class="nos-logo">Nimble</span>
</div>
