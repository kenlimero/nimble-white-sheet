<script>
	let { wounds, toggleWounds } = $props();
</script>

<div class="nos-exhaustion">
	<span class="nos-exhaustion__label">Exhaustion</span>
	<div class="nos-exhaustion__diamonds">
		{#each { length: wounds.max }, i}
			<button
				class="nos-diamond"
				class:nos-diamond--active={wounds.value > i}
				type="button"
				data-tooltip="Toggle Wound {i + 1}"
				aria-label="Toggle wound {i + 1}"
				onclick={() => toggleWounds(i + 1)}
			></button>
		{/each}
	</div>
</div>
