<script>
	import localize from '../../utils/localize.js';

	let { actor } = $props();

	let weapons = $derived(
		actor.reactive.items
			.filter((i) => i.type === 'object' && i.system?.objectType === 'weapon')
			.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0)),
	);
</script>

{#each weapons as item}
	<div class="nos-slot" draggable="true">
		<img
			class="nos-slot__img"
			src={item.img}
			alt={item.name}
		/>
		<span
			class="nos-slot__name"
			onclick={() => actor.activateItem(item.id)}
			data-tooltip={item.name}
		>
			{item.name}
		</span>
	</div>
{/each}

{#if weapons.length === 0}
	<div class="nos-slot nos-slot--empty">{localize('NWS.NoWeapons')}</div>
{/if}
