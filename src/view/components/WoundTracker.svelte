<script>
	import localize from '../../utils/localize.js';
	import { format } from '../../utils/localize.js';

	let { wounds, toggleWounds } = $props();
</script>

<div class="nos-wounds">
	<span class="nos-wounds__label">{localize('NWS.Wounds')}</span>
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
