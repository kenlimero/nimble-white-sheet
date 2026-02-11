<script>
	import FeaturesTab from '../tabs/FeaturesTab.svelte';
	import SpellsTab from '../tabs/SpellsTab.svelte';
	import InventoryTab from '../tabs/InventoryTab.svelte';
	import BioTab from '../tabs/BioTab.svelte';
	import SettingsTab from '../tabs/SettingsTab.svelte';
	import InventorySlots from '../components/InventorySlots.svelte';

	let { actor, editingEnabled, hasMana, mana, updateCurrentMana, updateMaxMana } = $props();

	const tabs = [
		{ name: 'features', label: 'Features', icon: 'fa-solid fa-table-list', component: FeaturesTab },
		{ name: 'spells', label: 'Spells', icon: 'fa-solid fa-wand-sparkles', component: SpellsTab },
		{ name: 'inventory', label: 'Inventory', icon: 'fa-solid fa-box-open', component: InventoryTab },
		{ name: 'bio', label: 'Bio', icon: 'fa-solid fa-file-lines', component: BioTab },
		{ name: 'settings', label: 'Settings', icon: 'fa-solid fa-cog', component: SettingsTab },
	];

	let currentTab = $state(tabs[0]);

	// Inventory tracking
	let trackSlots = $derived(actor.reactive.flags?.nimble?.trackInventorySlots ?? false);
	let inventory = $derived(actor.reactive.system.inventory);
</script>

<section class="nos-content">
	<nav class="nos-content__tabs">
		{#each tabs as tab}
			<button
				class="nos-tab-btn"
				class:nos-tab-btn--active={currentTab.name === tab.name}
				type="button"
				onclick={() => (currentTab = tab)}
			>
				<i class="{tab.icon}" style="margin-right: 0.25rem;"></i>
				{tab.label}
			</button>
		{/each}
	</nav>

	<div class="nos-content__body">
		<currentTab.component {actor} {editingEnabled} />
	</div>

	<div class="nos-content__sidebar-header">
		<span>Inventory Slots</span>
	</div>

	<div class="nos-content__sidebar">
		<InventorySlots {actor} {editingEnabled} />
		{#if trackSlots}
			<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;">
				{inventory.usedSlots ?? 0} / {inventory.totalSlots ?? 0}
			</div>
		{/if}
	</div>
</section>
