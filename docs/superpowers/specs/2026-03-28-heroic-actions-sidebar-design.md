# Heroic Actions Sidebar — Design Spec

## Summary

Replace the weapons sidebar in the character sheet with a heroic actions/reactions panel. The sidebar displays two sub-tabs (Actions / Reactions), each showing 4 clickable cards with icon + label. No combat state management — buttons are UI-only placeholders for future integration.

## Motivation

The source system (kenlimero/FoundryVTT-Nimble) has a heroic actions tab with full combat integration. This spec ports the UI layout into nimble-white-sheet as a simplified, non-interactive sidebar replacing the weapons list.

## Components

### New: `src/view/components/HeroicActions.svelte`

A Svelte 5 component that displays heroic actions and reactions.

**Props:** none (self-contained, uses i18n for labels)

**State:**
- `activeTab: 'actions' | 'reactions'` — defaults to `'actions'`

**Static data (from source .ts):**

Actions:
| id       | icon                         | i18n key              |
|----------|------------------------------|-----------------------|
| attack   | `fa-solid fa-sword`          | `NWS.Action.Attack`   |
| spell    | `fa-solid fa-wand-sparkles`  | `NWS.Action.Spell`    |
| move     | `fa-solid fa-person-running` | `NWS.Action.Move`     |
| assess   | `fa-solid fa-eye`            | `NWS.Action.Assess`   |

Reactions:
| id          | icon                            | i18n key                 |
|-------------|---------------------------------|--------------------------|
| defend      | `fa-solid fa-shield`            | `NWS.Reaction.Defend`    |
| interpose   | `fa-solid fa-people-arrows`     | `NWS.Reaction.Interpose` |
| opportunity | `fa-solid fa-bullseye`          | `NWS.Reaction.Opportunity` |
| help        | `fa-solid fa-handshake-angle`   | `NWS.Reaction.Help`      |

**Rendering:** Each item is a button with `.nos-slot` styling, containing an icon (`<i>`) and a label (`<span>`). `onclick` is a no-op for now.

**Sub-tabs:** Two buttons in the sidebar header area, using `.nos-tab-btn` / `.nos-tab-btn--active` styling but scaled smaller to fit the sidebar width.

### Modified: `src/view/sections/ContentArea.svelte`

- Remove `InventorySlots` import, add `HeroicActions` import
- Replace sidebar header (was "WEAPONS" label) with two sub-tab buttons ("Actions" / "Reactions") managed by `HeroicActions` component
- Replace sidebar body (was `<InventorySlots>` + inventory tracking) with `<HeroicActions>`
- Remove `trackSlots` and `inventory` derived values (no longer needed)

### Modified: `dist/lang/en.json`

Add i18n keys:
```json
{
  "NWS.Actions": "Actions",
  "NWS.Reactions": "Reactions",
  "NWS.Action.Attack": "Attack",
  "NWS.Action.Spell": "Cast a Spell",
  "NWS.Action.Move": "Move",
  "NWS.Action.Assess": "Assess",
  "NWS.Reaction.Defend": "Defend",
  "NWS.Reaction.Interpose": "Interpose",
  "NWS.Reaction.Opportunity": "Opportunity Attack",
  "NWS.Reaction.Help": "Help"
}
```

### Removable: `src/view/components/InventorySlots.svelte`

No longer imported anywhere after the change. Can be deleted.

## Styling

Reuse existing CSS classes:
- `.nos-slot`, `.nos-slot__name` for action cards
- `.nos-tab-btn`, `.nos-tab-btn--active` for sidebar sub-tabs
- `.nos-content__sidebar-header`, `.nos-content__sidebar` grid areas unchanged

No new SCSS files needed.

## Files Touched

| File | Action |
|------|--------|
| `src/view/components/HeroicActions.svelte` | Create |
| `src/view/sections/ContentArea.svelte` | Modify |
| `dist/lang/en.json` | Modify |
| `src/view/components/InventorySlots.svelte` | Delete |

## Future Work

- Connect buttons to Foundry combat state (action pips, reaction availability)
- Add expanded panel per action/reaction with detailed description
- Add help dialog for heroic actions rules
