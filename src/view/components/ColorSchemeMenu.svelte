<script>
	import localize from '../../utils/localize.js';

	let { colorScheme, setColorScheme, onclose } = $props();

	const options = [
		{ value: 'white', icon: 'fa-sun', label: 'NWS.ThemeWhite' },
		{ value: 'dark', icon: 'fa-moon', label: 'NWS.ThemeDark' },
		{ value: 'nimble', icon: 'fa-dice-d20', label: 'NWS.ThemeNimble' },
	];

	function select(value) {
		setColorScheme(value);
		onclose();
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') onclose();
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="nos-color-scheme-backdrop" onclick={onclose} onkeydown={handleKeydown}></div>
<div class="nos-color-scheme-menu" role="menu">
	{#each options as opt}
		<button
			class="nos-color-scheme-menu__option"
			class:nos-color-scheme-menu__option--active={colorScheme === opt.value}
			type="button"
			role="menuitem"
			onclick={() => select(opt.value)}
		>
			<i class="fa-solid {opt.icon}"></i>
			<span>{localize(opt.label)}</span>
		</button>
	{/each}
</div>
