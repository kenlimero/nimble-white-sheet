<script lang="ts">
	import type { NimbleActor } from '../../types.js';
	import localize from '../../utils/localize.js';
	import ItemRow from '../components/ItemRow.svelte';

	let { actor, editingEnabled }: { actor: NimbleActor; editingEnabled: boolean } = $props();

	let features = $derived(actor.reactive.items.filter((i) => i.type === 'feature'));
	let boons = $derived(actor.reactive.items.filter((i) => i.type === 'boon'));
	let ancestry = $derived(actor.reactive.items.find((i) => i.type === 'ancestry') ?? null);
	let background = $derived(actor.reactive.items.find((i) => i.type === 'background') ?? null);
	let classItem = $derived(actor.reactive.items.find((i) => i.type === 'class') ?? null);
	let subclass = $derived(actor.reactive.items.find((i) => i.type === 'subclass') ?? null);
</script>

{#if ancestry || background}
	<div class="nos-feature-row">
		{#if ancestry}
			<div class="nos-feature-group">
				<h4 class="nos-feature-group__heading">{localize('NWS.Ancestry')}</h4>
				<ItemRow {actor} item={ancestry} {editingEnabled} tooltip={ancestry.system?.description} />
			</div>
		{/if}
		{#if background}
			<div class="nos-feature-group">
				<h4 class="nos-feature-group__heading">{localize('NWS.Background')}</h4>
				<ItemRow {actor} item={background} {editingEnabled} tooltip={background.system?.description} />
			</div>
		{/if}
	</div>
{/if}

{#if classItem}
	<div class="nos-feature-group">
		<h4 class="nos-feature-group__heading">{localize('NWS.Class')}</h4>
		<ItemRow {actor} item={classItem} {editingEnabled}>
			{#snippet label()}
				{classItem.name} ({localize('NWS.Level')} {classItem.system.classLevel})
			{/snippet}
		</ItemRow>
		{#if subclass}
			<ItemRow {actor} item={subclass} {editingEnabled} indent />
		{/if}
	</div>
{/if}

{#each [{ items: features, labelKey: 'NWS.Features' }, { items: boons, labelKey: 'NWS.Boons' }] as group}
	{#if group.items.length > 0}
		<div class="nos-feature-group">
			<h4 class="nos-feature-group__heading">{localize(group.labelKey)}</h4>
			<div class="nos-item-grid">
				{#each group.items as item}
					<ItemRow
						{actor}
						{item}
						{editingEnabled}
						tooltip={item.system?.description}
						onactivate={() => actor.activateItem(item.id)}
					/>
				{/each}
			</div>
		</div>
	{/if}
{/each}

{#if !ancestry && !background && !classItem && features.length === 0 && boons.length === 0}
	<p class="nos-empty">
		{localize('NWS.DropFeaturesHere')}
	</p>
{/if}
