<script>
	let { actor, editingEnabled } = $props();

	let details = $derived(actor.reactive.system.details);

	// Proficiencies
	let proficiencies = $derived(actor.reactive.system.proficiencies);
	let languages = $derived([...(proficiencies.languages ?? [])].join(', '));
	let armorProf = $derived([...(proficiencies.armor ?? [])].join(', '));
	let weaponProf = $derived((proficiencies.weapons ?? []).join(', '));
</script>

<div class="nos-bio">
	<div class="nos-bio__field">
		<label>Age</label>
		<input
			type="text"
			value={details.age ?? ''}
			onchange={({ target }) => actor.update({ 'system.details.age': target.value })}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-bio__field">
		<label>Gender</label>
		<input
			type="text"
			value={details.gender ?? ''}
			onchange={({ target }) => actor.update({ 'system.details.gender': target.value })}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-bio__field">
		<label>Languages</label>
		<span style="font-size: 0.833rem;">{languages || '—'}</span>
		<button
			class="nos-icon-btn"
			type="button"
			data-tooltip="Configure Languages"
			onclick={() => actor.configureLanguageProficiencies()}
			disabled={!editingEnabled}
			style="opacity: 0.65;"
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>

	<div class="nos-bio__field">
		<label>Armor Proficiencies</label>
		<span style="font-size: 0.833rem;">{armorProf || '—'}</span>
		<button
			class="nos-icon-btn"
			type="button"
			data-tooltip="Configure Armor Proficiencies"
			onclick={() => actor.configureArmorProficiencies()}
			disabled={!editingEnabled}
			style="opacity: 0.65;"
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>

	<div class="nos-bio__field" style="grid-column: 1 / -1;">
		<label>Weapon Proficiencies</label>
		<span style="font-size: 0.833rem;">{weaponProf || '—'}</span>
		<button
			class="nos-icon-btn"
			type="button"
			data-tooltip="Configure Weapon Proficiencies"
			onclick={() => actor.configureWeaponProficiencies()}
			disabled={!editingEnabled}
			style="opacity: 0.65;"
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>

	<div class="nos-bio__notes">
		<label>Notes</label>
		<div
			contenteditable={editingEnabled ? 'true' : 'false'}
			class="nos-bio__notes-editor"
			style="
				border: 1px solid #888;
				padding: 0.5rem;
				min-height: 6rem;
				font-size: 0.833rem;
				background: #fff;
				overflow-y: auto;
			"
			onblur={({ target }) => actor.update({ 'system.details.notes': target.innerHTML })}
		>
			{@html details.notes ?? ''}
		</div>
	</div>
</div>
