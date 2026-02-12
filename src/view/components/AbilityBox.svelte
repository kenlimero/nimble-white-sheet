<script>
	import localize from '../../utils/localize.js';
	import { format } from '../../utils/localize.js';
	import formatModifier from '../../utils/formatModifier.js';

	let { abilityKey, ability, save, actor, editingEnabled } = $props();

	const { abilityScoreAbbreviations } = CONFIG.NIMBLE;
	let label = $derived(localize(abilityScoreAbbreviations[abilityKey]));
	let rollTooltip = $derived(format('NWS.RollCheck', { name: label }));
	let saveTooltip = $derived(format('NWS.RollSave', { name: label }));
</script>

<div class="nos-ability">
	<!-- d20 Save button (top) -->
	<button
		class="nos-ability__roll"
		class:nos-ability__roll--advantage={save.defaultRollMode > 0}
		class:nos-ability__roll--disadvantage={save.defaultRollMode < 0}
		type="button"
		data-tooltip={saveTooltip}
		aria-label={saveTooltip}
		onclick={() => actor.rollSavingThrowToChat(abilityKey)}
	>
		<i class="fa-solid fa-dice-d20 nos-ability__d20"></i>
	</button>

	<!-- Main ability box (click = check roll) -->
	<button
		class="nos-ability__box nos-rollable"
		type="button"
		data-tooltip={rollTooltip}
		aria-label={rollTooltip}
		onclick={() => actor.rollAbilityCheckToChat(abilityKey)}
	>
		<span class="nos-ability__value">{formatModifier(ability.mod)}</span>
	</button>

	<!-- Label banner (same style as skills) -->
	<span class="nos-ability__name nos-banner">{label}</span>
</div>
