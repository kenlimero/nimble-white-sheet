# Design : Masquer les boutons Level Up quand l'édition est verrouillée

Date : 2026-03-28

## Contexte

La feuille de personnage dispose d'un bouton "editing lock" dans `SidebarControls.svelte` qui toggle le flag `editingEnabled`. Quand ce verrou est actif (`editingEnabled = false`), les boutons Level Up et Revert Last Level Up doivent également disparaître.

## Changement

**Fichier :** `src/view/components/SidebarControls.svelte`

Entourer les deux boutons Level Up et Revert Last Level Up d'un seul bloc conditionnel `{#if editingEnabled}…{/if}`.

- Quand `editingEnabled` est `false` → les deux boutons sont retirés du DOM
- Quand `editingEnabled` est `true` → comportement actuel inchangé

## Données

`editingEnabled` est déjà une prop du composant. Aucune nouvelle propagation de données nécessaire.

## Fichiers touchés

- `src/view/components/SidebarControls.svelte` — ajout du bloc `{#if editingEnabled}`
