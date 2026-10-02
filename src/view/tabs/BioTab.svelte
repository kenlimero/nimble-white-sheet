<script lang="ts">
	import type { NimbleActor } from '../../types.js';
	import localize from '../../utils/localize.js';

	let { actor, editingEnabled }: { actor: NimbleActor; editingEnabled: boolean } = $props();

	let details = $derived(actor.reactive.system.details);

	// Proficiencies
	let proficiencies = $derived(actor.reactive.system.proficiencies);
	let languages = $derived([...(proficiencies.languages ?? [])].join(', '));
	let armorProf = $derived([...(proficiencies.armor ?? [])].join(', '));
	let weaponProf = $derived((proficiencies.weapons ?? []).join(', '));

	function updateDetail(path: string, value: string): void {
		actor.update({ [`system.details.${path}`]: value });
	}

	// Notes are user-authored HTML rendered with {@html}: strip scripts and event handlers
	// both on save and on display (covers notes stored before this fix).
	let notesHTML = $derived(foundry.utils.cleanHTML(details.notes ?? ''));

	function updateNotes(html: string): void {
		const clean = foundry.utils.cleanHTML(html);
		if (clean === notesHTML) return;
		updateDetail('notes', clean);
	}
</script>

<div class="nos-bio">
	<div class="nos-bio__field">
		<label>{localize('NWS.Age')}</label>
		<input
			type="text"
			value={details.age ?? ''}
			onchange={(e) => updateDetail('age', e.currentTarget.value)}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-bio__field">
		<label>{localize('NWS.Gender')}</label>
		<input
			type="text"
			value={details.gender ?? ''}
			onchange={(e) => updateDetail('gender', e.currentTarget.value)}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-bio__field">
		<label>{localize('NWS.Height')}</label>
		<input
			type="text"
			value={details.height ?? ''}
			placeholder={localize('NWS.Height')}
			onchange={(e) => updateDetail('height', e.currentTarget.value)}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-bio__field">
		<label>{localize('NWS.Weight')}</label>
		<input
			type="text"
			value={details.weight ?? ''}
			placeholder={localize('NWS.Weight')}
			onchange={(e) => updateDetail('weight', e.currentTarget.value)}
			disabled={!editingEnabled}
		/>
	</div>

	<div class="nos-bio__field">
		<label>{localize('NWS.Languages')}</label>
		<span style="font-size: 0.833rem;">{languages || '—'}</span>
		<button
			class="nos-icon-btn"
			type="button"
			data-tooltip={localize('NWS.ConfigureLanguages')}
			onclick={() => actor.configureLanguageProficiencies()}
			disabled={!editingEnabled}
			style="opacity: 0.65;"
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>

	<div class="nos-bio__field">
		<label>{localize('NWS.ArmorProficiencies')}</label>
		<span style="font-size: 0.833rem;">{armorProf || '—'}</span>
		<button
			class="nos-icon-btn"
			type="button"
			data-tooltip={localize('NWS.ConfigureArmorProficiencies')}
			onclick={() => actor.configureArmorProficiencies()}
			disabled={!editingEnabled}
			style="opacity: 0.65;"
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>

	<div class="nos-bio__field" style="grid-column: 1 / -1;">
		<label>{localize('NWS.WeaponProficiencies')}</label>
		<span style="font-size: 0.833rem;">{weaponProf || '—'}</span>
		<button
			class="nos-icon-btn"
			type="button"
			data-tooltip={localize('NWS.ConfigureWeaponProficiencies')}
			onclick={() => actor.configureWeaponProficiencies()}
			disabled={!editingEnabled}
			style="opacity: 0.65;"
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	</div>

	<div class="nos-bio__notes">
		<label>{localize('NWS.Notes')}</label>
		<div
			contenteditable={editingEnabled ? 'true' : 'false'}
			class="nos-bio__notes-editor"
			onblur={(e) => updateNotes(e.currentTarget.innerHTML)}
		>
			{@html notesHTML}
		</div>
	</div>
</div>
