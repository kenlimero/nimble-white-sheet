<script>
	import localize from '../../utils/localize.js';
	import { format } from '../../utils/localize.js';

	let { actor, editingEnabled } = $props();

	let searchQuery = $state('');

	let allSpells = $derived(
		actor.reactive.items
			.filter((i) => i.type === 'spell')
			.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0)),
	);

	let filteredSpells = $derived(
		searchQuery
			? allSpells.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
			: allSpells,
	);

	// Group spells by tier, sorted by tier number (Utility last)
	let sortedTiers = $derived.by(() => {
		const groups = {};
		for (const spell of filteredSpells) {
			const tier = spell.system?.tier ?? 0;
			const isUtility = spell.system?.isUtility ?? false;
			const key = isUtility ? '_utility' : `_tier_${tier}`;
			const label = isUtility ? localize('NWS.Utility') : format('NWS.Tier', { n: tier });
			groups[key] ??= { label, spells: [] };
			groups[key].spells.push(spell);
		}
		// Sort tiers: Tier 0, Tier 1, ..., Utility last
		return Object.entries(groups).sort(([a], [b]) => {
			if (a === '_utility') return 1;
			if (b === '_utility') return -1;
			const tierA = parseInt(a.replace('_tier_', ''));
			const tierB = parseInt(b.replace('_tier_', ''));
			return tierA - tierB;
		});
	});

	function configureItem(id) {
		const item = actor.items.get(id);
		item?.sheet?.render(true);
	}

	function deleteItem(id) {
		actor.deleteEmbeddedDocuments('Item', [id]);
	}

	function createSpell() {
		actor.createEmbeddedDocuments('Item', [{ name: 'New Spell', type: 'spell' }]);
	}

	function castSpell(id) {
		actor.activateItem(id);
	}

	function onDragStart(event, item) {
		const dragData = { type: 'Item', uuid: item.uuid };
		event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
	}
</script>

<div class="nos-search">
	<i class="fa-solid fa-search" style="color: #888;"></i>
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
				<div class="nos-item nos-item--castable" draggable="true" ondragstart={(e) => onDragStart(e, spell)}>
					<img class="nos-item__img" src={spell.img} alt={spell.name} />
					<span class="nos-item__name" onclick={() => castSpell(spell.id)}>
						{spell.name}
						{#if spell.system?.concentration}
							<span style="color: #888; font-size: 0.7rem;" data-tooltip={localize('NWS.Concentration')}>[C]</span>
						{/if}
						{#if spell.system?.isUtility}
							<span style="color: #888; font-size: 0.7rem;" data-tooltip={localize('NWS.Utility')}>[U]</span>
						{/if}
					</span>
					<span class="nos-item__meta">
						{spell.system?.activationCost ?? ''}
					</span>
					{#if editingEnabled}
						<div class="nos-item__controls">
							<button class="nos-icon-btn" type="button" onclick={() => configureItem(spell.id)}>
								<i class="fa-solid fa-gear"></i>
							</button>
							<button class="nos-icon-btn" type="button" onclick={() => deleteItem(spell.id)}>
								<i class="fa-solid fa-trash"></i>
							</button>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/each}

{#if allSpells.length === 0}
	<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">
		{localize('NWS.DropSpellsHere')}
	</p>
{/if}
