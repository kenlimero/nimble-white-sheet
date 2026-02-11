<script>
	import localize from '../../utils/localize.js';
	import formatModifier from '../../utils/formatModifier.js';

	let { skillKey, skill, actor } = $props();

	const { defaultSkillAbilities, abilityScoreAbbreviations, skills: skillLabels } = CONFIG.NIMBLE;

	let abilityKey = $derived(defaultSkillAbilities[skillKey]);
	let abilityAbbrev = $derived(localize(abilityScoreAbbreviations[abilityKey]));
	let skillName = $derived(localize(skillLabels[skillKey]));
</script>

<button
	class="nos-skill nos-rollable"
	type="button"
	data-tooltip="Roll {skillName}"
	onclick={() => actor.rollSkillCheckToChat(skillKey)}
>
	<span class="nos-skill__ability">{abilityAbbrev}</span>
	<span class="nos-skill__value">{formatModifier(skill.mod)}</span>
	<span class="nos-skill__name nos-banner">{skillName}</span>
</button>
