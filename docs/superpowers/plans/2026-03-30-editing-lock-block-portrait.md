# Editing Lock — Bloquer le portrait/token Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Quand le verrou d'édition est actif (`editingEnabled = false`), cliquer sur le portrait ne fait rien — ni tokenizer ni FilePicker ne s'ouvrent.

**Architecture:** Un guard `if (!editingEnabled) return;` ajouté en début de `pickPortrait()` dans `HeaderRow.svelte`. La prop `editingEnabled` est déjà disponible dans ce composant — aucune propagation de données supplémentaire.

**Tech Stack:** Svelte 5

---

### Task 1 : Bloquer `pickPortrait()` quand l'édition est verrouillée

**Files:**
- Modify: `src/view/sections/HeaderRow.svelte:9-21`

- [ ] **Step 1 : Modifier la fonction `pickPortrait`**

Dans `src/view/sections/HeaderRow.svelte`, remplacer :

```svelte
function pickPortrait(): void {
	const tokenizer = game.modules.get('vtta-tokenizer') as { active?: boolean; api?: { tokenizeActor(actor: unknown): void } } | undefined;
	if (tokenizer?.active) {
		tokenizer.api?.tokenizeActor(actor);
		return;
	}

	new FilePicker({
		type: 'image',
		current: actor.img,
		callback: (path: string) => actor.update({ img: path }),
	}).render(true);
}
```

par :

```svelte
function pickPortrait(): void {
	if (!editingEnabled) return;
	const tokenizer = game.modules.get('vtta-tokenizer') as { active?: boolean; api?: { tokenizeActor(actor: unknown): void } } | undefined;
	if (tokenizer?.active) {
		tokenizer.api?.tokenizeActor(actor);
		return;
	}

	new FilePicker({
		type: 'image',
		current: actor.img,
		callback: (path: string) => actor.update({ img: path }),
	}).render(true);
}
```

- [ ] **Step 2 : Builder le module**

```bash
cd /Users/ricco/Projets/Nimble-Sheet/nimble-white-sheet-main && npm run build
```

Résultat attendu : build sans erreur, `dist/nimble-white-sheet.js` mis à jour.

- [ ] **Step 3 : Vérification manuelle dans FoundryVTT**

1. Ouvrir une feuille de personnage
2. Vérifier qu'en mode édition actif, cliquer sur le portrait ouvre bien tokenizer ou le FilePicker
3. Activer le verrou d'édition (icône cadenas)
4. Cliquer sur le portrait → rien ne doit se passer
5. Désactiver le verrou → le clic doit de nouveau fonctionner

- [ ] **Step 4 : Commit**

```bash
git add src/view/sections/HeaderRow.svelte dist/nimble-white-sheet.js dist/nimble-white-sheet.css
git commit -m "feat: block portrait/token change when editing is locked"
```
