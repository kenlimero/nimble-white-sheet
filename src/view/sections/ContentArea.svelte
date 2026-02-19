<script>
	import localize from '../../utils/localize.js';
	import FeaturesTab from '../tabs/FeaturesTab.svelte';
	import SpellsTab from '../tabs/SpellsTab.svelte';
	import InventoryTab from '../tabs/InventoryTab.svelte';
	import BioTab from '../tabs/BioTab.svelte';
	import InventorySlots from '../components/InventorySlots.svelte';

	let { actor, editingEnabled, hasMana, mana, updateCurrentMana } = $props();

	const tabs = [
		{ name: 'features', labelKey: 'NWS.Features', icon: 'fa-solid fa-table-list', component: FeaturesTab },
		{ name: 'spells', labelKey: 'NWS.Spells', icon: 'fa-solid fa-wand-sparkles', component: SpellsTab },
		{ name: 'inventory', labelKey: 'NWS.Inventory', icon: 'fa-solid fa-box-open', component: InventoryTab },
		{ name: 'bio', labelKey: 'NWS.Bio', icon: 'fa-solid fa-file-lines', component: BioTab },
	];

	let currentTab = $state('features');

	// Inventory tracking
	let trackSlots = $derived(actor.reactive.flags?.nimble?.trackInventorySlots ?? false);
	let inventory = $derived(actor.reactive.system.inventory);
</script>

<section class="nos-content">
	<nav class="nos-content__tabs">
		{#each tabs as tab}
			<button
				class="nos-tab-btn"
				class:nos-tab-btn--active={currentTab === tab.name}
				type="button"
				onclick={() => (currentTab = tab.name)}
			>
				<i class="{tab.icon}" style="margin-right: 0.25rem;"></i>
				{localize(tab.labelKey)}
			</button>
		{/each}
	</nav>

	<div class="nos-content__body">
		{#if currentTab === 'features'}
			<FeaturesTab {actor} {editingEnabled} />
		{:else if currentTab === 'spells'}
			<SpellsTab {actor} {editingEnabled} />
		{:else if currentTab === 'inventory'}
			<InventoryTab {actor} {editingEnabled} />
		{:else if currentTab === 'bio'}
			<BioTab {actor} {editingEnabled} />
		{/if}
	</div>

	<div class="nos-content__sidebar-header">
		<span>{localize('NWS.Weapons')}</span>
	</div>

	<div class="nos-content__sidebar">
		<InventorySlots {actor} />
		{#if trackSlots}
			<div class="nos-slot" style="font-weight: 600; justify-content: center; border-top: 2px solid #333;">
				{inventory.usedSlots ?? 0} / {inventory.totalSlots ?? 0}
			</div>
		{/if}
	</div>
</section>
