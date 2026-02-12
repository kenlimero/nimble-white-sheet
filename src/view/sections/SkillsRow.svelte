<script>
	import localize from '../../utils/localize.js';
	import SkillCell from '../components/SkillCell.svelte';

	let { actor, editingEnabled } = $props();

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
	{#if editingEnabled}
		<button
			class="nos-icon-btn nos-skills-row__config"
			type="button"
			data-tooltip={localize('NWS.ConfigureSkills')}
			onclick={() => actor.configureSkills()}
		>
			<i class="fa-solid fa-gear"></i>
		</button>
	{/if}
</section>
