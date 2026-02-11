<script>
	import localize from '../../utils/localize.js';
	import formatModifier from '../../utils/formatModifier.js';

	let { abilityKey, ability, actor, editingEnabled } = $props();

	const { abilityScoreAbbreviations } = CONFIG.NIMBLE;
	let label = $derived(localize(abilityScoreAbbreviations[abilityKey]));
</script>

<div class="nos-ability">
	<button
		class="nos-ability__roll nos-rollable"
		type="button"
		data-tooltip="Roll {label} Check"
		aria-label="Roll {label} Check"
		onclick={() => actor.rollAbilityCheckToChat(abilityKey)}
	>
		<span class="nos-ability__value">{formatModifier(ability.mod)}</span>
		<span class="nos-ability__label nos-pentagon">{label}</span>
	</button>
	<button
		class="nos-icon-btn"
		type="button"
		aria-label="Configure Ability Scores"
		data-tooltip="Configure Ability Scores"
		onclick={() => actor.configureAbilityScores()}
		disabled={!editingEnabled}
	>
		<i class="fa-solid fa-gear"></i>
	</button>
</div>

<style>
	.nos-ability__roll {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		width: 100%;
	}
</style>
