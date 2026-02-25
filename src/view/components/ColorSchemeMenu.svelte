<script>
	import localize from '../../utils/localize.js';

	let { colorScheme, setColorScheme, customColors, setCustomColor, onclose } = $props();

	const options = [
		{ value: 'white', icon: 'fa-sun', label: 'NWS.ThemeWhite' },
		{ value: 'dark', icon: 'fa-moon', label: 'NWS.ThemeDark' },
		{ value: 'nimble', icon: 'fa-dice-d20', label: 'NWS.ThemeNimble' },
		{ value: 'custom', icon: 'fa-palette', label: 'NWS.ThemeCustom' },
	];

	const colorGroups = [
		{
			label: 'NWS.ColorGroupBackgrounds',
			colors: [
				{ key: 'bgPrimary', label: 'NWS.ColorBgPrimary' },
				{ key: 'bgSecondary', label: 'NWS.ColorBgSecondary' },
				{ key: 'bgInput', label: 'NWS.ColorBgInput' },
			],
		},
		{
			label: 'NWS.ColorGroupTexts',
			colors: [
				{ key: 'textPrimary', label: 'NWS.ColorTextPrimary' },
				{ key: 'textSecondary', label: 'NWS.ColorTextSecondary' },
				{ key: 'textLabel', label: 'NWS.ColorTextLabel' },
			],
		},
		{
			label: 'NWS.ColorGroupBorders',
			colors: [
				{ key: 'borderColor', label: 'NWS.ColorBorderColor' },
				{ key: 'borderLight', label: 'NWS.ColorBorderLight' },
			],
		},
		{
			label: 'NWS.ColorGroupAccents',
			colors: [
				{ key: 'accent', label: 'NWS.ColorAccent' },
				{ key: 'highlight', label: 'NWS.ColorHighlight' },
				{ key: 'labelBg', label: 'NWS.ColorLabelBg' },
				{ key: 'labelText', label: 'NWS.ColorLabelText' },
			],
		},
		{
			label: 'NWS.ColorGroupStatus',
			colors: [
				{ key: 'danger', label: 'NWS.ColorDanger' },
				{ key: 'success', label: 'NWS.ColorSuccess' },
				{ key: 'manaColor', label: 'NWS.ColorMana' },
			],
		},
	];

	function select(value) {
		setColorScheme(value);
		if (value !== 'custom') onclose();
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

	{#if colorScheme === 'custom'}
		<div class="nos-color-picker-panel">
			{#each colorGroups as group}
				<div class="nos-color-picker-group">
					<span class="nos-color-picker-group__label">{localize(group.label)}</span>
					<div class="nos-color-picker-group__colors">
						{#each group.colors as color}
							<label class="nos-color-picker">
								<input
									type="color"
									value={customColors[color.key]}
									onchange={(e) => setCustomColor(color.key, e.target.value)}
								/>
								<span>{localize(color.label)}</span>
							</label>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
