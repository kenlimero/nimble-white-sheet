<script>
	import localize from '../../utils/localize.js';

	let { actor, editingEnabled } = $props();

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

	function configureItem(id) {
		const item = actor.items.get(id);
		item?.sheet?.render(true);
	}

	function deleteItem(id) {
		actor.deleteEmbeddedDocuments('Item', [id]);
	}

	function createObject() {
		actor.createEmbeddedDocuments('Item', [{ name: 'New Object', type: 'object' }]);
	}

	function updateCurrency(type, value) {
		actor.update({ [`system.currency.${type}.value`]: Math.max(0, Math.round(Number(value))) });
	}

	function adjustCurrency(type, delta) {
		const current = currency[type]?.value ?? 0;
		actor.update({ [`system.currency.${type}.value`]: Math.max(0, current + delta) });
	}

	function updateQuantity(id, value) {
		const item = actor.items.get(id);
		item?.update({ 'system.quantity': Number(value) });
	}

	function onDragStart(event, item) {
		const dragData = { type: 'Item', uuid: item.uuid };
		event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
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
				onchange={({ target }) => updateCurrency(type, target.value)}
				min="0"
			/>
			<button class="nos-currency__btn" type="button" aria-label="+1 {localize(labelKey)}" onclick={() => adjustCurrency(type, 1)}>
				<i class="fa-solid fa-plus"></i>
			</button>
		</div>
	{/each}
</div>

<div class="nos-search">
	<i class="fa-solid fa-search" style="color: #888;"></i>
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
		<div class="nos-item" draggable="true" ondragstart={(e) => onDragStart(e, item)}>
			<img
				class="nos-item__img"
				src={item.img}
				alt={item.name}
			/>
			<span class="nos-item__name" onclick={() => configureItem(item.id)}>
				{item.name}
			</span>
			<input
				class="nos-item__qty"
				type="number"
				value={item.system?.quantity ?? 1}
				onchange={({ target }) => updateQuantity(item.id, target.value)}
				min="0"
			/>
			{#if editingEnabled}
				<div class="nos-item__controls">
					<button class="nos-icon-btn" type="button" onclick={() => configureItem(item.id)}>
						<i class="fa-solid fa-gear"></i>
					</button>
					<button class="nos-icon-btn" type="button" onclick={() => deleteItem(item.id)}>
						<i class="fa-solid fa-trash"></i>
					</button>
				</div>
			{/if}
		</div>
	{/each}
</div>

{#if allObjects.length === 0}
	<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">
		{localize('NWS.DropInventoryHere')}
	</p>
{/if}
