<script>
	import localize from '../../utils/localize.js';
	import { format } from '../../utils/localize.js';

	let { wounds, toggleWounds } = $props();
</script>

<div class="nos-exhaustion">
	<span class="nos-exhaustion__label">{localize('NWS.Exhaustion')}</span>
	<div class="nos-exhaustion__diamonds">
		{#each { length: wounds.max }, i}
			<button
				class="nos-diamond"
				class:nos-diamond--active={wounds.value > i}
				type="button"
				data-tooltip={format('NWS.ToggleWound', { n: i + 1 })}
				aria-label={format('NWS.ToggleWound', { n: i + 1 })}
				onclick={() => toggleWounds(i + 1)}
			></button>
		{/each}
	</div>
</div>
