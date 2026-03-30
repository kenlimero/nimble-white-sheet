# Design : Bloquer le changement de portrait/token quand l'édition est verrouillée

Date : 2026-03-30

## Contexte

Quand le verrou d'édition est actif (`editingEnabled = false`), cliquer sur le portrait du personnage ne doit rien faire — que vtta-tokenizer soit installé ou non.

## Changement

**Fichier :** `src/view/sections/HeaderRow.svelte`

Ajouter un guard `if (!editingEnabled) return;` en début de la fonction `pickPortrait()`.

- Quand `editingEnabled` est `false` → clic sur le portrait = no-op (ni tokenizer ni FilePicker ne s'ouvrent)
- Quand `editingEnabled` est `true` → comportement actuel inchangé

## Données

`editingEnabled` est déjà une prop du composant. Aucune modification de l'arbre de données nécessaire.

## Fichiers touchés

- `src/view/sections/HeaderRow.svelte` — guard dans `pickPortrait()`
