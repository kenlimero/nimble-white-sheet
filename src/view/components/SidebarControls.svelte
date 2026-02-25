<script>
	import localize from '../../utils/localize.js';
	import ColorSchemeMenu from './ColorSchemeMenu.svelte';

	let { actor, editingEnabled, toggleEditingEnabled, classItem, darkMode, colorScheme, setColorScheme, customColors, setCustomColor } = $props();

	let menuOpen = $state(false);
</script>

<aside class="nos-sidebar-controls">
	<button
		class="nos-sidebar-btn"
		class:nos-sidebar-btn--active={editingEnabled}
		type="button"
		aria-pressed={editingEnabled}
		aria-label={editingEnabled ? localize('NWS.DisableEditing') : localize('NWS.EnableEditing')}
		data-tooltip={editingEnabled ? localize('NWS.EditingEnabled') : localize('NWS.EditingLocked')}
		onclick={toggleEditingEnabled}
	>
		<i class="fa-solid {editingEnabled ? 'fa-pen' : 'fa-lock'}"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label={localize('NWS.LevelUp')}
		data-tooltip={localize('NWS.LevelUp')}
		onclick={() => actor.triggerLevelUp()}
		disabled={!classItem || classItem?.system?.classLevel >= 20}
	>
		<i class="fa-solid fa-arrow-up-right-dots"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label={localize('NWS.RevertLastLevelUp')}
		data-tooltip={localize('NWS.RevertLastLevelUp')}
		onclick={() => actor.triggerLevelDown()}
		disabled={actor.reactive.system.levelUpHistory.length === 0}
	>
		<i class="fa-solid fa-undo"></i>
	</button>

	<div class="nos-color-scheme-wrapper">
		<button
			class="nos-sidebar-btn"
			class:nos-sidebar-btn--active={darkMode}
			type="button"
			aria-pressed={darkMode}
			aria-label={localize('NWS.ColorScheme')}
			data-tooltip={localize('NWS.ColorScheme')}
			aria-haspopup="true"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<i class="fa-solid fa-circle-half-stroke"></i>
		</button>

		{#if menuOpen}
			<ColorSchemeMenu {colorScheme} {setColorScheme} {customColors} {setCustomColor} onclose={() => (menuOpen = false)} />
		{/if}
	</div>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label={localize('NWS.FieldRest')}
		data-tooltip={localize('NWS.FieldRest')}
		onclick={() => actor.triggerRest({ restType: 'field' })}
	>
		<i class="fa-regular fa-hourglass-half"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label={localize('NWS.SafeRest')}
		data-tooltip={localize('NWS.SafeRest')}
		onclick={() => actor.triggerRest({ restType: 'safe' })}
	>
		<i class="fa-solid fa-moon"></i>
	</button>
</aside>
