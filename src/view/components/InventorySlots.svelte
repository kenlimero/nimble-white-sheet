<script>
	let { actor, editingEnabled } = $props();

	let items = $derived(
		actor.reactive.items
			.filter((i) => i.type === 'object')
			.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0)),
	);
</script>

{#each items as item}
	<div class="nos-slot" draggable="true">
		<span
			class="nos-slot__name"
			style="flex: 1; cursor: pointer;"
			onclick={() => actor.activateItem(item.id)}
			data-tooltip={item.name}
		>
			{item.name}
			{#if (item.system?.quantity ?? 1) > 1}
				<span style="color: #888;">x{item.system.quantity}</span>
			{/if}
		</span>
	</div>
{/each}

{#if items.length === 0}
	<div class="nos-slot nos-slot--empty">No items</div>
{/if}
