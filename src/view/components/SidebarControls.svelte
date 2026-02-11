<script>
	import localize from '../../utils/localize.js';

	let { actor, editingEnabled, toggleEditingEnabled, classItem } = $props();
</script>

<aside class="nos-sidebar-controls">
	<button
		class="nos-sidebar-btn"
		class:nos-sidebar-btn--active={editingEnabled}
		type="button"
		aria-pressed={editingEnabled}
		aria-label={editingEnabled ? 'Disable editing' : 'Enable editing'}
		data-tooltip={editingEnabled ? 'Editing Enabled' : 'Editing Locked'}
		onclick={toggleEditingEnabled}
	>
		<i class="fa-solid {editingEnabled ? 'fa-pen' : 'fa-lock'}"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label="Level Up"
		data-tooltip="Level Up"
		onclick={() => actor.triggerLevelUp()}
		disabled={!classItem || classItem?.system?.classLevel >= 20}
	>
		<i class="fa-solid fa-arrow-up-right-dots"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label="Revert Last Level Up"
		data-tooltip="Revert Last Level Up"
		onclick={() => actor.triggerLevelDown()}
		disabled={actor.reactive.system.levelUpHistory.length === 0}
	>
		<i class="fa-solid fa-undo"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label="Field Rest"
		data-tooltip="Field Rest"
		onclick={() => actor.triggerRest({ restType: 'field' })}
	>
		<i class="fa-regular fa-hourglass-half"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label="Safe Rest"
		data-tooltip="Safe Rest"
		onclick={() => actor.triggerRest({ restType: 'safe' })}
	>
		<i class="fa-solid fa-moon"></i>
	</button>
</aside>
