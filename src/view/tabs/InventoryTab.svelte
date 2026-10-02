<script lang="ts">
	import type { NimbleActor } from '../../types.js';
	import localize from '../../utils/localize.js';
	import ItemRow from '../components/ItemRow.svelte';

	let { actor, editingEnabled }: { actor: NimbleActor; editingEnabled: boolean } = $props();

	let searchQuery = $state('');
	let currency = $derived(actor.reactive.system.currency);

	let allObjects = $derived(
		actor.reactive.items
			.filter((i) => i.type === 'object')
			.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0)),
	);

	let filteredObjects = $derived(
		searchQuery
			? allObjects.filter((o) => o.name.toLowerCase().includes(searchQuery.toLowerCase()))
			: allObjects,
	);

	async function createObject(): Promise<void> {
		try {
			await actor.createEmbeddedDocuments('Item', [{ name: localize('NWS.NewObject'), type: 'object' }]);
		} catch (err) {
			console.error('nimble-white-sheet | Failed to create object:', err);
		}
	}

	function updateCurrency(type: string, value: string): void {
		const parsed = Math.max(0, Math.round(Number(value)));
		if (Number.isNaN(parsed)) return;
		actor.update({ [`system.currency.${type}.value`]: parsed });
	}

	function adjustCurrency(type: string, delta: number): void {
		const current = currency[type]?.value ?? 0;
		actor.update({ [`system.currency.${type}.value`]: Math.max(0, current + delta) });
	}

	function updateQuantity(id: string, value: string): void {
		const parsed = Number(value);
		if (Number.isNaN(parsed)) return;
		const item = actor.items.get(id);
		item?.update({ 'system.quantity': parsed });
	}
</script>

<!-- Currency -->
<div class="nos-currency">
	{#each [['gp', 'NWS.GP'], ['sp', 'NWS.SP'], ['cp', 'NWS.CP']] as [type, labelKey]}
		<div class="nos-currency__coin">
			<label for="currency-{type}">{localize(labelKey)}</label>
			<button class="nos-currency__btn" type="button" aria-label="-1 {localize(labelKey)}" onclick={() => adjustCurrency(type, -1)}>
				<i class="fa-solid fa-minus"></i>
			</button>
			<input
				id="currency-{type}"
				type="number"
				value={currency[type]?.value ?? 0}
				onchange={(e) => updateCurrency(type, e.currentTarget.value)}
				min="0"
			/>
			<button class="nos-currency__btn" type="button" aria-label="+1 {localize(labelKey)}" onclick={() => adjustCurrency(type, 1)}>
				<i class="fa-solid fa-plus"></i>
			</button>
		</div>
	{/each}
</div>

<div class="nos-search">
	<i class="fa-solid fa-search nos-muted"></i>
	<input
		type="text"
		placeholder={localize('NWS.SearchItems')}
		bind:value={searchQuery}
	/>
	{#if editingEnabled}
		<button class="nos-tab-btn" type="button" onclick={createObject}>
			<i class="fa-solid fa-plus"></i> {localize('NWS.New')}
		</button>
	{/if}
</div>

<div class="nos-item-grid">
	{#each filteredObjects as item}
		<ItemRow {actor} {item} {editingEnabled} tooltip={item.system?.description?.public}>
			{#snippet extra()}
				<input
					class="nos-item__qty"
					type="number"
					value={item.system?.quantity ?? 1}
					onchange={(e) => updateQuantity(item.id, e.currentTarget.value)}
					min="0"
				/>
			{/snippet}
		</ItemRow>
	{/each}
</div>

{#if allObjects.length === 0}
	<p class="nos-empty">
		{localize('NWS.DropInventoryHere')}
	</p>
{/if}
