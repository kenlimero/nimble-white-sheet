# Heroic Actions Sidebar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the weapons sidebar with a heroic actions/reactions panel featuring sub-tabs.

**Architecture:** New `HeroicActions.svelte` component with internal sub-tab state (`actions` | `reactions`), rendered inside `ContentArea.svelte`'s existing sidebar grid areas. Static data arrays define the 4 actions and 4 reactions. i18n keys added to `en.json`.

**Tech Stack:** Svelte 5 (runes), SCSS (existing classes), FoundryVTT i18n via `localize()`.

---

### Task 1: Add i18n keys to `dist/lang/en.json`

**Files:**
- Modify: `dist/lang/en.json`

- [ ] **Step 1: Add heroic action/reaction i18n keys**

In `dist/lang/en.json`, add the following keys after the existing `"Actions": "Actions"` line (line 31). Note: `"Actions"` already exists, so do NOT duplicate it. Add the new keys:

```json
"Reactions": "Reactions",
"Action.Attack": "Attack",
"Action.Spell": "Cast a Spell",
"Action.Move": "Move",
"Action.Assess": "Assess",
"Reaction.Defend": "Defend",
"Reaction.Interpose": "Interpose",
"Reaction.Opportunity": "Opportunity Attack",
"Reaction.Help": "Help",
```

Insert these after line 31 (`"Actions": "Actions",`), before line 33 (`"DisableEditing": ...`). All keys are under the top-level `"NWS"` object. Remove the existing `"Weapons": "Weapons"` (line 75) and `"NoWeapons": "No weapons"` (line 96) keys since they are no longer used.

- [ ] **Step 2: Verify JSON is valid**

Run: `node -e "require('./dist/lang/en.json')" 2>&1`
Expected: no output (valid JSON)

- [ ] **Step 3: Commit**

```bash
git add dist/lang/en.json
git commit -m "feat: add heroic actions/reactions i18n keys to en.json"
```

---

### Task 2: Create `HeroicActions.svelte` component

**Files:**
- Create: `src/view/components/HeroicActions.svelte`

- [ ] **Step 1: Create the component file**

Create `src/view/components/HeroicActions.svelte` with this content:

```svelte
<script lang="ts">
	import localize from '../../utils/localize.js';

	let activeTab = $state<'actions' | 'reactions'>('actions');

	const actions = [
		{ id: 'attack', icon: 'fa-solid fa-sword', labelKey: 'NWS.Action.Attack' },
		{ id: 'spell', icon: 'fa-solid fa-wand-sparkles', labelKey: 'NWS.Action.Spell' },
		{ id: 'move', icon: 'fa-solid fa-person-running', labelKey: 'NWS.Action.Move' },
		{ id: 'assess', icon: 'fa-solid fa-eye', labelKey: 'NWS.Action.Assess' },
	];

	const reactions = [
		{ id: 'defend', icon: 'fa-solid fa-shield', labelKey: 'NWS.Reaction.Defend' },
		{ id: 'interpose', icon: 'fa-solid fa-people-arrows', labelKey: 'NWS.Reaction.Interpose' },
		{ id: 'opportunity', icon: 'fa-solid fa-bullseye', labelKey: 'NWS.Reaction.Opportunity' },
		{ id: 'help', icon: 'fa-solid fa-handshake-angle', labelKey: 'NWS.Reaction.Help' },
	];

	let items = $derived(activeTab === 'actions' ? actions : reactions);
</script>

<nav class="nos-heroic-tabs">
	<button
		class="nos-tab-btn nos-tab-btn--sm"
		class:nos-tab-btn--active={activeTab === 'actions'}
		type="button"
		onclick={() => (activeTab = 'actions')}
	>
		{localize('NWS.Actions')}
	</button>
	<button
		class="nos-tab-btn nos-tab-btn--sm"
		class:nos-tab-btn--active={activeTab === 'reactions'}
		type="button"
		onclick={() => (activeTab = 'reactions')}
	>
		{localize('NWS.Reactions')}
	</button>
</nav>

<div class="nos-heroic-list">
	{#each items as item (item.id)}
		<button class="nos-slot nos-heroic-btn" type="button">
			<i class={item.icon}></i>
			<span class="nos-slot__name">{localize(item.labelKey)}</span>
		</button>
	{/each}
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/view/components/HeroicActions.svelte
git commit -m "feat: create HeroicActions sidebar component"
```

---

### Task 3: Wire `HeroicActions` into `ContentArea.svelte` and remove weapons

**Files:**
- Modify: `src/view/sections/ContentArea.svelte`
- Delete: `src/view/components/InventorySlots.svelte`

- [ ] **Step 1: Replace InventorySlots with HeroicActions in ContentArea**

In `src/view/sections/ContentArea.svelte`, make these changes:

**Replace the import** on line 7:
```
// OLD
import InventorySlots from '../components/InventorySlots.svelte';
// NEW
import HeroicActions from '../components/HeroicActions.svelte';
```

**Remove unused props** from the destructure on line 9. The `actor` prop is no longer needed for the sidebar (but is still needed for tabs). Remove `trackSlots` and `inventory` derived values (lines 21-22) entirely.

**Replace the sidebar header** (lines 52-54):
```svelte
<!-- OLD -->
<div class="nos-content__sidebar-header">
	<span>{localize('NWS.Weapons')}</span>
</div>

<!-- NEW -->
<div class="nos-content__sidebar-header">
	<HeroicActions />
</div>
```

Wait — looking at the design more carefully, the sub-tabs should be in the sidebar header and the action list in the sidebar body. But the `HeroicActions` component contains both the tabs and the list. Let's instead put the whole component in the sidebar body and use the sidebar header for a simple label, OR embed the component spanning both areas.

The cleanest approach: remove the sidebar-header content entirely, and put `<HeroicActions />` in the sidebar body. The component itself renders its own tab nav + list.

Replace lines 52-63 entirely:

```svelte
<div class="nos-content__sidebar-header nos-content__sidebar-header--heroic">
</div>

<div class="nos-content__sidebar">
	<HeroicActions />
</div>
```

The full updated `ContentArea.svelte`:

```svelte
<script>
	import localize from '../../utils/localize.js';
	import FeaturesTab from '../tabs/FeaturesTab.svelte';
	import SpellsTab from '../tabs/SpellsTab.svelte';
	import InventoryTab from '../tabs/InventoryTab.svelte';
	import BioTab from '../tabs/BioTab.svelte';
	import HeroicActions from '../components/HeroicActions.svelte';

	let { actor, editingEnabled, hasMana, mana, updateCurrentMana } = $props();

	const tabs = [
		{ name: 'features', labelKey: 'NWS.Features', icon: 'fa-solid fa-table-list', component: FeaturesTab },
		{ name: 'spells', labelKey: 'NWS.Spells', icon: 'fa-solid fa-wand-sparkles', component: SpellsTab },
		{ name: 'inventory', labelKey: 'NWS.Inventory', icon: 'fa-solid fa-box-open', component: InventoryTab },
		{ name: 'bio', labelKey: 'NWS.Bio', icon: 'fa-solid fa-file-lines', component: BioTab },
	];

	let currentTab = $state('features');
</script>

<section class="nos-content">
	<nav class="nos-content__tabs">
		{#each tabs as tab}
			<button
				class="nos-tab-btn"
				class:nos-tab-btn--active={currentTab === tab.name}
				type="button"
				onclick={() => (currentTab = tab.name)}
			>
				<i class="{tab.icon}" style="margin-right: 0.25rem;"></i>
				{localize(tab.labelKey)}
			</button>
		{/each}
	</nav>

	<div class="nos-content__body">
		{#if currentTab === 'features'}
			<FeaturesTab {actor} {editingEnabled} />
		{:else if currentTab === 'spells'}
			<SpellsTab {actor} {editingEnabled} />
		{:else if currentTab === 'inventory'}
			<InventoryTab {actor} {editingEnabled} />
		{:else if currentTab === 'bio'}
			<BioTab {actor} {editingEnabled} />
		{/if}
	</div>

	<div class="nos-content__sidebar-header"></div>

	<div class="nos-content__sidebar">
		<HeroicActions />
	</div>
</section>
```

- [ ] **Step 2: Delete InventorySlots.svelte**

```bash
rm src/view/components/InventorySlots.svelte
```

- [ ] **Step 3: Build and verify no errors**

Run: `cd /Users/ricco/Projets/Nimble-Sheet/nimble-white-sheet-main && npm run build 2>&1`
Expected: Build completes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/view/sections/ContentArea.svelte
git rm src/view/components/InventorySlots.svelte
git commit -m "feat: replace weapons sidebar with heroic actions component"
```

---

### Task 4: Add minimal SCSS for heroic sidebar

**Files:**
- Modify: `src/scss/_content.scss`

- [ ] **Step 1: Add heroic-specific styles**

At the end of `src/scss/_content.scss` (after the `.nos-search` block, line 289), add:

```scss

// Heroic actions sidebar
.nos-heroic-tabs {
	display: flex;
	gap: 0;
	width: 100%;
}

.nos-tab-btn--sm {
	font-size: $nos-text-xxs;
	padding: 0.25rem 0.5rem;
	flex: 1;
	text-align: center;
}

.nos-heroic-list {
	display: flex;
	flex-direction: column;
}

.nos-heroic-btn {
	cursor: pointer;
	background: none;
	border: none;
	border-bottom: 1px solid $nos-border-light;
	transition: $nos-transition;

	&:hover {
		background: $nos-highlight;
	}

	i {
		width: 1.25rem;
		text-align: center;
		color: $nos-text-secondary;
		font-size: $nos-text-sm;
	}
}
```

- [ ] **Step 2: Build and verify**

Run: `cd /Users/ricco/Projets/Nimble-Sheet/nimble-white-sheet-main && npm run build 2>&1`
Expected: Build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/scss/_content.scss
git commit -m "style: add heroic actions sidebar styles"
```
