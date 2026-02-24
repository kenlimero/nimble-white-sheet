<script>
	import localize from '../../utils/localize.js';
	import { format } from '../../utils/localize.js';

	let { wounds, toggleWounds, resetWounds } = $props();
</script>

<div class="nos-wounds">
	<button
		class="nos-wounds__label"
		type="button"
		data-tooltip={localize('NWS.ResetWounds')}
		aria-label={localize('NWS.ResetWounds')}
		onclick={resetWounds}
	>
		{localize('NWS.Wounds')}
	</button>
	<div class="nos-wounds__drops">
		{#each { length: wounds.max }, i}
			<button
				class="nos-wounds__drop"
				class:nos-wounds__drop--active={wounds.value > i}
				type="button"
				data-tooltip={format('NWS.ToggleWound', { n: i + 1 })}
				aria-label={format('NWS.ToggleWound', { n: i + 1 })}
				onclick={() => toggleWounds(i + 1)}
			>
				<i class="fa-solid fa-droplet"></i>
			</button>
		{/each}
	</div>
</div>
