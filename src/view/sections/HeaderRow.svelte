<script>
	import localize from '../../utils/localize.js';

	let { actor, metaData, editingEnabled, hitDiceData } = $props();

	let details = $derived(actor.reactive.system.details);
	let actorImg = $derived(actor.reactive.img);

	function pickPortrait() {
		new FilePicker({
			type: 'image',
			current: actor.img,
			callback: (path) => actor.update({ img: path }),
		}).render(true);
	}

	let hitDieLabel = $derived.by(() => {
		const sizes = Object.keys(hitDiceData.bySize);
		if (sizes.length === 0) return '—';
		if (sizes.length === 1) return `d${sizes[0]}`;
		return sizes.map((s) => `d${s}`).join('/');
	});
</script>

<header class="nos-header">
	<div class="nos-header__portrait" onclick={pickPortrait}>
		<img
			src={actorImg}
			alt={actor.reactive.name}
		/>
	</div>

	<div class="nos-header__name">
		<label>{localize('NWS.CharacterName')}</label>
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
		<label>{localize('NWS.AncestryClassLevel')}</label>
		<div class="nos-meta-text">
			{#if metaData}
				<span>{metaData}</span>
			{:else}
				<span style="color: var(--nos-text-secondary, #888)">—</span>
			{/if}
			<button
				class="nos-icon-btn"
				type="button"
				aria-label={localize('NWS.EditMetadata')}
				data-tooltip={localize('NWS.EditMetadata')}
				onclick={() => actor.editMetadata()}
				disabled={!editingEnabled}
			>
				<i class="fa-solid fa-edit"></i>
			</button>
		</div>
	</div>

	<div class="nos-header__hitdie">
		<label>{localize('NWS.HitDie')}</label>
		<span class="nos-header__hitdie-value">{hitDieLabel}</span>
	</div>

</header>
