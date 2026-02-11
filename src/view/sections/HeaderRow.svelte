<script>
	import localize from '../../utils/localize.js';
	import ActionsDiamond from '../components/ActionsDiamond.svelte';

	let { actor, metaData, editingEnabled, hitDiceData } = $props();

	let details = $derived(actor.reactive.system.details);

	// Get the primary hit die size label
	let hitDieLabel = $derived.by(() => {
		const sizes = Object.keys(hitDiceData.bySize);
		if (sizes.length === 0) return '—';
		if (sizes.length === 1) return `d${sizes[0]}`;
		return sizes.map((s) => `d${s}`).join('/');
	});
</script>

<header class="nos-header">
	<div class="nos-header__name">
		<label>Character Name</label>
		<input
			type="text"
			value={actor.reactive.name}
			autocomplete="off"
			spellcheck="false"
			onchange={({ target }) => actor.update({ name: target.value })}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-header__meta">
		<label>Ancestry, Class, & Level</label>
		<div class="nos-meta-text">
			{#if metaData}
				<span>{metaData}</span>
			{:else}
				<span style="color: var(--nos-text-secondary, #888)">—</span>
			{/if}
			<button
				class="nos-icon-btn"
				type="button"
				aria-label="Edit"
				data-tooltip="Edit Metadata"
				onclick={() => actor.editMetadata()}
				disabled={!editingEnabled}
			>
				<i class="fa-solid fa-edit"></i>
			</button>
		</div>
	</div>

	<div class="nos-header__actions">
		<ActionsDiamond />
	</div>

	<div class="nos-header__hw">
		<label>Height & Weight</label>
		<div class="nos-hw-fields">
			<input
				type="text"
				value={details.height ?? ''}
				placeholder="Height"
				onchange={({ target }) => actor.update({ 'system.details.height': target.value })}
				disabled={!editingEnabled}
			/>
			<input
				type="text"
				value={details.weight ?? ''}
				placeholder="Weight"
				onchange={({ target }) => actor.update({ 'system.details.weight': target.value })}
				disabled={!editingEnabled}
			/>
		</div>
	</div>

	<div class="nos-header__hitdie">
		<label>Hit Die</label>
		<span class="nos-hitdie-value">{hitDieLabel}</span>
	</div>
</header>
