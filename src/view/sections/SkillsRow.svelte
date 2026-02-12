<script>
	import localize from '../../utils/localize.js';
	import SkillCell from '../components/SkillCell.svelte';

	let { actor } = $props();

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
</section>
