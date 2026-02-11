<script>
	let { hasMana, mana, updateCurrentMana, updateMaxMana, editingEnabled } = $props();
</script>

<div class="nos-resources">
	<span class="nos-resources__label">Class Resources</span>

	{#if hasMana}
		<div class="nos-resources__mana">
			<label>Mana</label>
			<input
				type="number"
				value={mana.current}
				onchange={({ target }) => updateCurrentMana(Number(target.value))}
			/>
			<span class="nos-resources__separator">/</span>
			<input
				type="number"
				value={mana.max || mana.baseMax}
				onchange={({ target }) => updateMaxMana(Number(target.value))}
				disabled={!editingEnabled}
			/>
		</div>
	{/if}
</div>
