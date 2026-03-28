# Editing Lock — Masquer les boutons Level Up Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Quand le verrou d'édition est actif (`editingEnabled = false`), masquer les boutons Level Up et Revert Last Level Up dans la sidebar.

**Architecture:** Un seul bloc `{#if editingEnabled}` dans `SidebarControls.svelte` entoure les deux boutons concernés. La prop `editingEnabled` est déjà disponible dans ce composant — aucune modification de l'arbre de données nécessaire.

**Tech Stack:** Svelte 5

---

### Task 1 : Masquer les boutons Level Up et Revert Last Level Up

**Files:**
- Modify: `src/view/components/SidebarControls.svelte:23-43`

- [ ] **Step 1 : Modifier le template**

Dans `src/view/components/SidebarControls.svelte`, remplacer les lignes 23–43 :

```svelte
	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label={localize('NWS.LevelUp')}
		data-tooltip={localize('NWS.LevelUp')}
		onclick={() => actor.triggerLevelUp()}
		disabled={!classItem || classItem?.system?.classLevel >= 20}
	>
		<i class="fa-solid fa-arrow-up-right-dots"></i>
	</button>

	<button
		class="nos-sidebar-btn"
		type="button"
		aria-label={localize('NWS.RevertLastLevelUp')}
		data-tooltip={localize('NWS.RevertLastLevelUp')}
		onclick={() => actor.triggerLevelDown()}
		disabled={actor.reactive.system.levelUpHistory.length === 0}
	>
		<i class="fa-solid fa-undo"></i>
	</button>
```

par :

```svelte
	{#if editingEnabled}
		<button
			class="nos-sidebar-btn"
			type="button"
			aria-label={localize('NWS.LevelUp')}
			data-tooltip={localize('NWS.LevelUp')}
			onclick={() => actor.triggerLevelUp()}
			disabled={!classItem || classItem?.system?.classLevel >= 20}
		>
			<i class="fa-solid fa-arrow-up-right-dots"></i>
		</button>

		<button
			class="nos-sidebar-btn"
			type="button"
			aria-label={localize('NWS.RevertLastLevelUp')}
			data-tooltip={localize('NWS.RevertLastLevelUp')}
			onclick={() => actor.triggerLevelDown()}
			disabled={actor.reactive.system.levelUpHistory.length === 0}
		>
			<i class="fa-solid fa-undo"></i>
		</button>
	{/if}
```

- [ ] **Step 2 : Builder le module**

```bash
cd nimble-white-sheet-main && npm run build
```

Résultat attendu : build sans erreur, `dist/nimble-white-sheet.js` mis à jour.

- [ ] **Step 3 : Vérification manuelle dans FoundryVTT**

1. Ouvrir une feuille de personnage
2. Vérifier que les boutons Level Up et Revert Last Level Up sont visibles par défaut
3. Cliquer sur le cadenas → les deux boutons doivent disparaître
4. Recliquer sur le cadenas → les deux boutons réapparaissent

- [ ] **Step 4 : Commit**

```bash
git add src/view/components/SidebarControls.svelte dist/nimble-white-sheet.js dist/nimble-white-sheet.css
git commit -m "feat: hide level up buttons when editing is locked"
```
