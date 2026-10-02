<script lang="ts">
	import type { NimbleActor } from '../../types.js';
	import localize from '../../utils/localize.js';
	import ItemRow from '../components/ItemRow.svelte';
	import { format } from '../../utils/localize.js';

	let { actor, editingEnabled }: { actor: NimbleActor; editingEnabled: boolean } = $props();

	let searchQuery = $state('');

	let allSpells = $derived(
		actor.reactive.items
			.filter((i) => i.type === 'spell')
			.sort((a, b) => a.name.localeCompare(b.name)),
	);

	let filteredSpells = $derived(
		searchQuery
			? allSpells.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
			: allSpells,
	);

	// Group spells by tier, sorted by tier number (Utility last)
	let sortedTiers = $derived.by(() => {
		const groups: Record<string, { label: string; spells: typeof filteredSpells }> = {};
		for (const spell of filteredSpells) {
			const tier = spell.system?.tier ?? 0;
			const isUtility = spell.system?.isUtility ?? false;
			const key = isUtility ? '_utility' : `_tier_${tier}`;
			const label = isUtility ? localize('NWS.Utility') : format('NWS.Tier', { n: tier });
			groups[key] ??= { label, spells: [] };
			groups[key].spells.push(spell);
		}
		return Object.entries(groups).sort(([a], [b]) => {
			if (a === '_utility') return 1;
			if (b === '_utility') return -1;
			return Number.parseInt(a.replace('_tier_', '')) - Number.parseInt(b.replace('_tier_', ''));
		});
	});

	async function createSpell(): Promise<void> {
		try {
			await actor.createEmbeddedDocuments('Item', [{ name: localize('NWS.NewSpell'), type: 'spell' }]);
		} catch (err) {
			console.error('nimble-white-sheet | Failed to create spell:', err);
		}
	}

</script>

<div class="nos-search">
	<i class="fa-solid fa-search nos-muted"></i>
	<input
		type="text"
		placeholder={localize('NWS.SearchSpells')}
		bind:value={searchQuery}
	/>
	{#if editingEnabled}
		<button class="nos-tab-btn" type="button" onclick={createSpell}>
			<i class="fa-solid fa-plus"></i> {localize('NWS.New')}
		</button>
	{/if}
</div>

{#each sortedTiers as [_key, tier]}
	<div class="nos-spell-tier">
		<h4 class="nos-spell-tier__heading">{tier.label}</h4>
		<div class="nos-item-grid">
			{#each tier.spells as spell}
				<ItemRow
					{actor}
					item={spell}
					{editingEnabled}
					castable
					tooltip={spell.system?.description?.baseEffect}
					onactivate={() => actor.activateItem(spell.id)}
				>
					{#snippet label()}
						{spell.name}
						{#if spell.system?.concentration}
							<span class="nos-tag" data-tooltip={localize('NWS.Concentration')}>[C]</span>
						{/if}
						{#if spell.system?.isUtility}
							<span class="nos-tag" data-tooltip={localize('NWS.Utility')}>[U]</span>
						{/if}
					{/snippet}
					{#snippet extra()}
						<span class="nos-item__meta">{spell.system?.activationCost ?? ''}</span>
					{/snippet}
				</ItemRow>
			{/each}
		</div>
	</div>
{/each}

{#if allSpells.length === 0}
	<p class="nos-empty">
		{localize('NWS.DropSpellsHere')}
	</p>
{/if}
