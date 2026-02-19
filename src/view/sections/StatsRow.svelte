<script>
	import localize from '../../utils/localize.js';
	import formatModifier from '../../utils/formatModifier.js';
	import AbilityBox from '../components/AbilityBox.svelte';
	import WoundTracker from '../components/WoundTracker.svelte';

	let {
		actor,
		editingEnabled,
		isBloodied,
		hitDiceData,
		hasMana,
		mana,
		wounds,
		toggleWounds,
		updateCurrentHP,
		updateTempHP,
		updateCurrentMana,
		updateCurrentHitDice,
		rollHitDice,
		editCurrentHitDice,
	} = $props();

	const abilities = ['strength', 'dexterity', 'intelligence', 'will'];
	const { abilityScoreAbbreviations } = CONFIG.NIMBLE;

	let hp = $derived(actor.reactive.system.attributes.hp);
	let armor = $derived(actor.reactive.system.attributes.armor);
	let initiative = $derived(actor.reactive.system.attributes.initiative);
	let movement = $derived(actor.reactive.system.attributes.movement);

</script>

<section class="nos-stats">
	<div class="nos-abilities">
		{#each abilities as key}
			<AbilityBox
				abilityKey={key}
				ability={actor.reactive.system.abilities[key]}
				save={actor.reactive.system.savingThrows[key]}
				{actor}
				{editingEnabled}
			/>
		{/each}
		{#if editingEnabled}
			<button
				class="nos-icon-btn nos-abilities__config nos-abilities__config--saves"
				type="button"
				data-tooltip={localize('NWS.ConfigureSavingThrows')}
				onclick={() => actor.configureSavingThrows()}
			>
				<i class="fa-solid fa-gear"></i>
			</button>
			<button
				class="nos-icon-btn nos-abilities__config nos-abilities__config--abilities"
				type="button"
				data-tooltip={localize('NWS.ConfigureAbilityScores')}
				onclick={() => actor.configureAbilityScores()}
			>
				<i class="fa-solid fa-gear"></i>
			</button>
		{/if}
	</div>

	<div class="nos-right-col">
		<div class="nos-combat">
			<!-- Armor + Temp HP (stacked) -->
			<div class="nos-combat__pair">
				<div class="nos-combat__stat">
					<span class="nos-combat__icon"><i class="fa-solid fa-shield-heart"></i></span>
					<span class="nos-combat__label">{localize('NWS.Armor')}</span>
					<span class="nos-combat__value">{armor.value}</span>
				</div>
				<div class="nos-combat__stat">
					<span class="nos-combat__icon"><i class="fa-solid fa-heart-circle-plus"></i></span>
					<span class="nos-combat__label">{localize('NWS.TempHP')}</span>
					<input
						class="nos-combat__input"
						type="number"
						value={hp.temp ?? 0}
						onchange={({ target }) => updateTempHP(Number(target.value))}
					/>
				</div>
			</div>

			<!-- Hit Points + Mana (stacked) -->
			<div class="nos-combat__pair" class:nos-hp--bloodied={isBloodied}>
				<div class="nos-combat__stat nos-combat__stat--hp">
					<span class="nos-combat__icon">
						{#if isBloodied}
							<i class="fa-solid fa-heart-crack" style="color: #b01b19;"></i>
						{:else}
							<i class="fa-solid fa-heart"></i>
						{/if}
					</span>
					<span class="nos-combat__label">{localize('NWS.HitPoints')}</span>
					<div class="nos-combat__hp-inputs">
						<input
							class="nos-combat__input"
							type="number"
							value={hp.value}
							onchange={({ target }) => updateCurrentHP(Number(target.value))}
						/>
						<span class="nos-combat__sub">/</span>
						<span class="nos-combat__value">{hp.max}</span>
					</div>
					<button
						class="nos-icon-btn"
						type="button"
						data-tooltip={localize('NWS.ConfigureHitPoints')}
						onclick={() => actor.configureHitPoints()}
						disabled={!editingEnabled}
					>
						<i class="fa-solid fa-gear"></i>
					</button>
				</div>
				<div class="nos-combat__stat nos-combat__stat--mana">
					<span class="nos-combat__icon"><i class="fa-solid fa-sparkles" style="color: {mana?.color ?? '#6a5acd'};"></i></span>
					<span class="nos-combat__label" style="color: {mana?.color ?? '#6a5acd'};">{localize('NWS.Mana')}</span>
					<div class="nos-combat__mana-inputs">
						<input
							class="nos-combat__input"
							type="number"
							value={mana?.current ?? 0}
							onchange={({ target }) => updateCurrentMana(Number(target.value))}
							style="color: {mana?.color ?? '#6a5acd'};"
						/>
						<span class="nos-combat__sub">/</span>
						<span class="nos-combat__value" style="color: {mana?.color ?? '#6a5acd'};">{mana?.max || mana?.baseMax || 0}</span>
					</div>
					<button
						class="nos-icon-btn"
						type="button"
						data-tooltip={localize('NWS.ConfigureMana')}
						onclick={() => actor.configureMana()}
						disabled={!editingEnabled}
					>
						<i class="fa-solid fa-gear"></i>
					</button>
				</div>
			</div>

			<!-- Hit Dice -->
			<div class="nos-combat__stat nos-combat__stat--clickable" onclick={() => rollHitDice()}>
				<span class="nos-combat__icon"><i class="fa-solid fa-dice-d20"></i></span>
				<span class="nos-combat__label">{localize('NWS.HitDice')}</span>
				<span class="nos-combat__value">{hitDiceData.value}/{hitDiceData.max}</span>
				<button
					class="nos-icon-btn"
					type="button"
					data-tooltip={localize('NWS.ConfigureHitDice')}
					onclick={(e) => { e.stopPropagation(); actor.configureHitDice(); }}
					disabled={!editingEnabled}
				>
					<i class="fa-solid fa-gear"></i>
				</button>
			</div>

			<!-- Initiative + Speed (stacked) -->
			<div class="nos-combat__pair">
				<div
					class="nos-combat__stat nos-combat__stat--clickable"
					data-tooltip={localize('NWS.RollInitiative')}
					onclick={() => actor.rollInitiative({ createCombatants: true })}
				>
					<span class="nos-combat__icon"><i class="fa-solid fa-arrow-right-long"></i></span>
					<span class="nos-combat__label">{localize('NWS.Initiative')}</span>
					<span class="nos-combat__value">{formatModifier(initiative.mod)}</span>
				</div>
				<div class="nos-combat__stat">
					<span class="nos-combat__icon"><i class="fa-solid fa-person-running"></i></span>
					<span class="nos-combat__label">{localize('NWS.Speed')}</span>
					<span class="nos-combat__value">{movement.walk}</span>
					<button
						class="nos-icon-btn"
						type="button"
						data-tooltip={localize('NWS.ConfigureMovement')}
						onclick={() => actor.configureMovement()}
						disabled={!editingEnabled}
					>
						<i class="fa-solid fa-gear"></i>
					</button>
				</div>
			</div>
		</div>

	</div>

	<WoundTracker {wounds} {toggleWounds} />
</section>
