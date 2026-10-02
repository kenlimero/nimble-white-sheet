<script>
	import { onDestroy, setContext } from 'svelte';
	import { createSubscriber } from 'svelte/reactivity';
	import { readable } from 'svelte/store';
	import localize from '../utils/localize.js';
	import { MODULE_ID } from '../utils/moduleId.js';
	import { computeHitDiceData, COLOR_DEFAULTS, CSS_VAR_MAP } from '../types.js';
	import HeaderRow from './sections/HeaderRow.svelte';
	import StatsRow from './sections/StatsRow.svelte';
	import SkillsRow from './sections/SkillsRow.svelte';
	import ContentArea from './sections/ContentArea.svelte';
	import SidebarControls from './components/SidebarControls.svelte';

	let { actor: rawActor, sheet } = $props();

	// Active effects live on the actor or on one of its items (transferred effects).
	const effectActorId = (effect) =>
		(effect?.parent?.documentName === 'Actor' ? effect.parent : effect?.parent?.parent)?.id;

	// --- Module-local reactivity ---
	// The system's actor.reactive uses createSubscriber from the system's Svelte runtime.
	// Since this module bundles its own Svelte runtime, the system's subscriptions don't
	// notify our $derived values. We create our own subscription using the module's runtime,
	// listening to the same Foundry hooks.
	const subscribe = createSubscriber((update) => {
		const onEffect = (effect) => {
			if (effectActorId(effect) === rawActor.id) update();
		};
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
			createActiveEffect: Hooks.on('createActiveEffect', onEffect),
			updateActiveEffect: Hooks.on('updateActiveEffect', onEffect),
			deleteActiveEffect: Hooks.on('deleteActiveEffect', onEffect),
		};
		return () => {
			Hooks.off('updateActor', hooks.updateActor);
			Hooks.off('createItem', hooks.createItem);
			Hooks.off('deleteItem', hooks.deleteItem);
			Hooks.off('updateItem', hooks.updateItem);
			Hooks.off('createActiveEffect', hooks.createActiveEffect);
			Hooks.off('updateActiveEffect', hooks.updateActiveEffect);
			Hooks.off('deleteActiveEffect', hooks.deleteActiveEffect);
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

	const { sizeCategories } = CONFIG.NIMBLE;

	// --- Pure helper functions ---

	function getHitPointPercentage(currentHP, maxHP) {
		if (maxHP <= 0) return 0;
		return Math.clamp(0, Math.round((currentHP / maxHP) * 100), 100);
	}

	function prepareCharacterMetadata(characterClass, subclass, ancestry, sizeCategory) {
		const origins = [];
		if (ancestry) {
			origins.push(`${ancestry.name} (${sizeCategories[sizeCategory] ?? sizeCategory})`);
		}
		if (characterClass) {
			const level = characterClass.system.classLevel;
			origins.push(
				subclass
					? `${characterClass.name} (${subclass.name}, ${level})`
					: `${characterClass.name} (${level})`,
			);
		}
		return origins.join(' ⟡ ');
	}

	// --- Derived: items looked up once ---
	let classItem = $derived(actor.reactive.items.find((item) => item.type === 'class') ?? null);
	let subclassItem = $derived(actor.reactive.items.find((item) => item.type === 'subclass') ?? null);
	let ancestryItem = $derived(actor.reactive.items.find((item) => item.type === 'ancestry') ?? null);

	// --- HP ---
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

	// --- Mana ---
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

	// --- Hit Dice (extracted to pure function) ---
	let hitDiceData = $derived.by(() => {
		const attrs = actor.reactive.system.attributes;
		const classes = actor.reactive.items.filter((i) => i.type === 'class');
		return computeHitDiceData(
			attrs.hitDice,
			attrs.bonusHitDice ?? [],
			classes,
			attrs.hitDiceSizeBonus ?? 0,
		);
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

	// --- Metadata (reuses already-derived items) ---
	let metaData = $derived.by(() => {
		const size = actor.reactive.system.attributes.sizeCategory;
		return prepareCharacterMetadata(classItem, subclassItem, ancestryItem, size);
	});

	// --- Wounds ---
	let wounds = $derived(actor.reactive.system.attributes.wounds);
	function toggleWounds(woundLevel) {
		const newWoundsValue = woundLevel === wounds.value ? woundLevel - 1 : woundLevel;
		actor.update({ 'system.attributes.wounds.value': newWoundsValue });
	}
	function resetWounds() {
		actor.update({ 'system.attributes.wounds.value': 0 });
	}

	// --- Flags & editing ---
	let flags = $derived(actor.reactive.flags.nimble);
	let editingEnabled = $derived(flags?.editingEnabled ?? true);
	const editingEnabledStore = readable(false, (set) => {
		$effect(() => set(editingEnabled));
		return () => {};
	});

	async function toggleEditingEnabled() {
		await actor.setFlag('nimble', 'editingEnabled', !editingEnabled);
	}

	// --- Color scheme ---
	// Theme flags live in this module's scope. Sheets themed before that stored them in the
	// system's `nimble` scope, which is still read as a fallback.
	let themeFlags = $derived(actor.reactive.flags[MODULE_ID]);

	let colorScheme = $derived.by(() => {
		const scheme = themeFlags?.colorScheme ?? flags?.colorScheme;
		if (scheme) return scheme;
		if (flags?.darkMode === true) return 'dark';
		return 'nimble';
	});

	async function setColorScheme(value) {
		await actor.setFlag(MODULE_ID, 'colorScheme', value);
	}

	let darkMode = $derived(colorScheme === 'dark');
	let nimbleMode = $derived(colorScheme === 'nimble');
	let customMode = $derived(colorScheme === 'custom');

	// --- Custom colors ---
	// The color picker fires on every pointer move: preview locally at once, save once it settles.
	const COLOR_SAVE_DELAY = 300;
	let savedColors = $derived({ ...flags?.customColors, ...themeFlags?.customColors });
	let pendingColors = $state({});
	let colorSaveTimer;

	let customColors = $derived({ ...COLOR_DEFAULTS, ...savedColors, ...pendingColors });

	function setCustomColor(key, value) {
		pendingColors = { ...pendingColors, [key]: value };
		clearTimeout(colorSaveTimer);
		colorSaveTimer = setTimeout(saveCustomColors, COLOR_SAVE_DELAY);
	}

	async function saveCustomColors() {
		const pending = pendingColors;
		if (Object.keys(pending).length === 0) return;
		await actor.setFlag(MODULE_ID, 'customColors', { ...savedColors, ...pending });
		// Keep only the colors changed again while saving.
		pendingColors = Object.fromEntries(
			Object.entries(pendingColors).filter(([key, value]) => pending[key] !== value),
		);
	}

	onDestroy(() => {
		clearTimeout(colorSaveTimer);
		saveCustomColors();
	});

	let customStyle = $derived.by(() => {
		if (!customMode) return '';
		return Object.entries(CSS_VAR_MAP)
			.map(([key, varName]) => `${varName}: ${customColors[key]}`)
			.join('; ');
	});

	// --- Contexts ---
	setContext('actor', actor);
	setContext('document', actor);
	setContext('application', sheet);
	setContext('editingEnabled', editingEnabledStore);
</script>

<div class="nos-sheet" class:nos-sheet--dark={darkMode} class:nos-sheet--nimble={nimbleMode} class:nos-sheet--custom={customMode} style="position: relative; {customStyle}">
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
			{resetWounds}
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
		{customColors}
		{setCustomColor}
	/>

	<span class="nos-logo">Nimble</span>
</div>
