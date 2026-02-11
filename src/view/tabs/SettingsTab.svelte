<script>
	let { actor, editingEnabled } = $props();

	let flags = $derived(actor.reactive.flags?.nimble ?? {});
	let trackSlots = $derived(flags.trackInventorySlots ?? false);
	let includeCurrencyBulk = $derived(flags.includeCurrencyBulk ?? false);
	let bonusSlots = $derived(actor.reactive.system.inventory?.bonusSlots ?? 0);
	let showImages = $derived(flags.showEmbeddedDocumentImages ?? false);
	let executeItemMacros = $derived(flags.executeItemMacros ?? false);
	let compactSkills = $derived(flags.compactSkillsView ?? false);
	let showPassive = $derived(flags.showPassiveSkillScores ?? false);

	// Actor image settings
	let imgXOffset = $derived(flags.actorImageXOffset ?? 0);
	let imgYOffset = $derived(flags.actorImageYOffset ?? 0);
	let imgScale = $derived(flags.actorImageScale ?? 100);

	function setFlag(key, value) {
		actor.setFlag('nimble', key, value);
	}

	function updateBonusSlots(value) {
		actor.update({ 'system.inventory.bonusSlots': Number(value) });
	}
</script>

<div class="nos-settings">
	<div class="nos-settings__group">
		<h3>Actor Image</h3>
		<div class="nos-settings__row">
			<label>X-Offset (px)</label>
			<input
				type="number"
				value={imgXOffset}
				onchange={({ target }) => setFlag('actorImageXOffset', Number(target.value))}
			/>
		</div>
		<div class="nos-settings__row">
			<label>Y-Offset (px)</label>
			<input
				type="number"
				value={imgYOffset}
				onchange={({ target }) => setFlag('actorImageYOffset', Number(target.value))}
			/>
		</div>
		<div class="nos-settings__row">
			<label>Scale (%)</label>
			<input
				type="number"
				value={imgScale}
				onchange={({ target }) => setFlag('actorImageScale', Number(target.value))}
			/>
		</div>
	</div>

	<div class="nos-settings__group">
		<h3>Embedded Documents</h3>
		<div class="nos-settings__row">
			<label>Execute Item Macros on Activation</label>
			<input
				type="checkbox"
				checked={executeItemMacros}
				onchange={() => setFlag('executeItemMacros', !executeItemMacros)}
			/>
		</div>
		<div class="nos-settings__row">
			<label>Show Embedded Document Images</label>
			<input
				type="checkbox"
				checked={showImages}
				onchange={() => setFlag('showEmbeddedDocumentImages', !showImages)}
			/>
		</div>
	</div>

	<div class="nos-settings__group">
		<h3>Inventory</h3>
		<div class="nos-settings__row">
			<label>Track Inventory Slots</label>
			<input
				type="checkbox"
				checked={trackSlots}
				onchange={() => setFlag('trackInventorySlots', !trackSlots)}
			/>
		</div>
		{#if trackSlots}
			<div class="nos-settings__row">
				<label>Include Currency Bulk</label>
				<input
					type="checkbox"
					checked={includeCurrencyBulk}
					onchange={() => setFlag('includeCurrencyBulk', !includeCurrencyBulk)}
				/>
			</div>
			<div class="nos-settings__row">
				<label>Bonus Inventory Slots</label>
				<input
					type="number"
					value={bonusSlots}
					onchange={({ target }) => updateBonusSlots(target.value)}
					disabled={!editingEnabled}
				/>
			</div>
		{/if}
	</div>

	<div class="nos-settings__group">
		<h3>Skills</h3>
		<div class="nos-settings__row">
			<label>Use Two-Column Skills View</label>
			<input
				type="checkbox"
				checked={compactSkills}
				onchange={() => setFlag('compactSkillsView', !compactSkills)}
			/>
		</div>
		<div class="nos-settings__row">
			<label>Show Passive Skill Scores</label>
			<input
				type="checkbox"
				checked={showPassive}
				onchange={() => setFlag('showPassiveSkillScores', !showPassive)}
			/>
		</div>
	</div>
</div>
