<script>
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

	// Group spells by tier
	let spellsByTier = $derived.by(() => {
		const groups = {};
		for (const spell of filteredSpells) {
			const tier = spell.system?.tier ?? 0;
			const isUtility = spell.system?.isUtility ?? false;
			const key = isUtility ? 'Utility' : `Tier ${tier}`;
			groups[key] ??= [];
			groups[key].push(spell);
		}
		return groups;
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
</script>

<div class="nos-search">
	<i class="fa-solid fa-search" style="color: #888;"></i>
	<input
		type="text"
		placeholder="Search spells..."
		bind:value={searchQuery}
	/>
	{#if editingEnabled}
		<button class="nos-tab-btn" type="button" onclick={createSpell}>
			<i class="fa-solid fa-plus"></i> New
		</button>
	{/if}
</div>

{#each Object.entries(spellsByTier) as [tierName, spells]}
	<div class="nos-spell-tier">
		<h4 class="nos-spell-tier__heading">{tierName}</h4>
		{#each spells as spell}
			<div class="nos-item" draggable="true">
				<span class="nos-item__name" onclick={() => configureItem(spell.id)}>
					{spell.name}
					{#if spell.system?.concentration}
						<span style="color: #888; font-size: 0.7rem;" data-tooltip="Concentration">[C]</span>
					{/if}
					{#if spell.system?.isUtility}
						<span style="color: #888; font-size: 0.7rem;" data-tooltip="Utility">[U]</span>
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
{/each}

{#if allSpells.length === 0}
	<p style="color: #888; font-style: italic; text-align: center; padding: 2rem;">
		Drop spell items here.
	</p>
{/if}
