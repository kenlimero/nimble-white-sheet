<script>
	import localize from '../../utils/localize.js';
	import SkillCell from '../components/SkillCell.svelte';
	import ExhaustionTracker from '../components/ExhaustionTracker.svelte';

	let { actor, wounds, toggleWounds } = $props();

	const skillKeys = [
		'arcana',
		'examination',
		'finesse',
		'influence',
		'insight',
		'lore',
		'might',
		'naturecraft',
		'perception',
		'stealth',
	];
</script>

<section class="nos-skills-row">
	{#each skillKeys as key}
		<SkillCell
			skillKey={key}
			skill={actor.reactive.system.skills[key]}
			{actor}
		/>
	{/each}

	<ExhaustionTracker {wounds} {toggleWounds} />
</section>
