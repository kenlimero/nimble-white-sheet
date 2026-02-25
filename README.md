# Nimble White Character Sheet

**[English](#english)** | **[Français](#français)**

---

## English

An alternative character sheet module for the **Nimble 2** system on [Foundry VTT](https://foundryvtt.com), featuring a clean white paper layout inspired by traditional tabletop character sheets.

### Features

#### Character Identity
- **Portrait** — Click to change the character image via the Foundry file picker.
- **Metadata** — Name, ancestry, class, subclass, level, and size category.
- **Hit Die** — Displays the character's hit die type.

#### Abilities & Skills
- **4 Core Abilities** — Strength, Dexterity, Intelligence, Will, each with d20 ability checks and saving throws.
- **10 Skills** — Arcana, Examination, Finesse, Influence, Insight, Lore, Might, Naturecraft, Perception, Stealth. Each displays its associated ability and modifier and is clickable to roll.
- **Configuration dialogs** — Fine-tune ability scores, saving throws, and skill modifiers from the sheet.

#### Combat Stats
- **Hit Points** — Current/Max HP with a bloodied visual indicator at ≤ 50% health. Temporary HP field included.
- **Armor Class** — Displays current AC.
- **Initiative** — Clickable to roll initiative.
- **Movement / Speed** — Displays character movement speed with configuration.
- **Hit Dice** — Full tracker supporting multiple die sizes, die size bonuses, bonus hit dice, and rollable hit dice.
- **Wounds Tracker** — Visual droplet-based wound tracking system with click-to-toggle and reset.

#### Mana System
- **Mana display** — Current/Max mana with color-coded indicator.
- **Configuration dialog** — Dedicated mana configuration accessible from the sheet.
- **Class integration** — Integrates with class-specific mana formulas.

#### Tabbed Content

The sheet organizes detailed character information into **4 tabs** with a **weapon sidebar**:

**Features** — Ancestry, Background, Class, and Subclass items. Class features and boons with drag-and-drop support. Subclass validation (requires level 3+).

**Spells** — Spells organized by tier (0, 1, 2…) with a separate utility category. Concentration indicator **[C]** and activation cost display. Built-in search/filter for quick spell lookup. Integrated spell casting.

**Inventory** — Currency: Gold (GP), Silver (SP), Copper (CP). Objects with quantity tracking. Weapon quick-access slots in the sidebar.

**Bio** — Age, Gender, Height, Weight. Languages, Armor proficiencies, Weapon proficiencies. Rich text notes editor.

#### Sidebar Controls
- **Edit Lock** — Toggle edit mode to prevent accidental changes.
- **Level Up / Revert** — Level up (max 20) and revert last level up with history.
- **Rest System** — Field Rest and Safe Rest buttons.
- **Color Scheme** — 4 built-in themes + fully customizable colors (14 variables).

#### Color Schemes

| Theme | Description |
|---|---|
| **White** | Default clean white design |
| **Dark** | Dark mode variant |
| **Nimble** | Accent-based scheme matching Nimble identity |
| **Custom** | Full color picker with 14 variables |

#### Localization

**English** and **French** fully supported (70+ localized strings). All UI labels, actions, tabs, item types, configuration dialogs, and color scheme names are translated.

### Compatibility

| Requirement | Version |
|---|---|
| Foundry VTT | v13 |
| Nimble system | >= 0.6.0 |

### Installation

In Foundry VTT, go to **Add-on Modules > Install Module** and paste the manifest URL:

```
https://github.com/kenlimero/nimble-white-sheet/releases/latest/download/module.json
```

### Development

#### Tech Stack

| Technology | Version |
|---|---|
| Svelte | 5 |
| TypeScript | 5.9 |
| Vite | 7.1 |
| Sass (SCSS) | 1.93 |
| Node.js | >= 22.1.0 |

#### Commands

```bash
npm install
npm run dev    # Dev server with HMR
npm run build  # Production build to dist/
```

#### Project Structure

```
src/
├── main.ts                            # Entry point
├── sheets/
│   └── WhiteCharacterSheet.svelte.ts  # Main sheet class
├── lib/
│   └── SvelteApplicationMixin.svelte.ts  # Foundry-Svelte bridge
├── view/
│   ├── WhiteSheet.svelte              # Root component
│   ├── sections/
│   │   ├── HeaderRow.svelte           # Portrait, name, metadata
│   │   ├── StatsRow.svelte            # Abilities, HP, AC, mana, wounds
│   │   ├── SkillsRow.svelte           # 10 skill buttons
│   │   └── ContentArea.svelte         # Tabs + weapon sidebar
│   ├── tabs/
│   │   ├── FeaturesTab.svelte         # Features & boons
│   │   ├── SpellsTab.svelte           # Spells by tier
│   │   ├── InventoryTab.svelte        # Currency & objects
│   │   └── BioTab.svelte              # Biography & proficiencies
│   └── components/
│       ├── AbilityBox.svelte          # Ability score box
│       ├── SkillCell.svelte           # Skill button
│       ├── WoundTracker.svelte        # Wound droplets
│       ├── InventorySlots.svelte      # Weapon sidebar slots
│       ├── SidebarControls.svelte     # Edit, level, rest, theme
│       └── ColorSchemeMenu.svelte     # Theme picker
├── utils/
│   ├── localize.ts                    # i18n helper
│   └── formatModifier.ts             # +X / −X formatting
└── scss/                              # SCSS stylesheets
    ├── main.scss
    ├── _variables.scss
    ├── _layout.scss
    ├── _shapes.scss
    ├── _form-aesthetic.scss
    ├── _header.scss
    ├── _stats.scss
    ├── _skills.scss
    └── _content.scss
```

---

## Français

Module de feuille de personnage alternatif pour le système **Nimble 2** sur [Foundry VTT](https://foundryvtt.com), avec un design épuré sur fond blanc inspiré des feuilles de personnage papier traditionnelles.

### Fonctionnalités

#### Identité du personnage
- **Portrait** — Cliquez pour changer l'image du personnage via le sélecteur de fichiers Foundry.
- **Métadonnées** — Nom, ascendance, classe, sous-classe, niveau et catégorie de taille.
- **Dé de vie** — Affiche le type de dé de vie du personnage.

#### Caractéristiques & Compétences
- **4 Caractéristiques principales** — Force, Dextérité, Intelligence, Volonté, chacune avec jets de caractéristique (d20) et jets de sauvegarde.
- **10 Compétences** — Arcanes, Examen, Finesse, Influence, Intuition, Érudition, Puissance, Artisanat naturel, Perception, Discrétion. Chacune affiche sa caractéristique associée et son modificateur, et est cliquable pour lancer un jet.
- **Dialogues de configuration** — Ajustez finement les scores de caractéristiques, jets de sauvegarde et modificateurs de compétences directement depuis la feuille.

#### Statistiques de combat
- **Points de vie** — PV actuels/max avec indicateur visuel "ensanglanté" à ≤ 50% de santé. Champ de PV temporaires inclus.
- **Classe d'armure** — Affiche la CA actuelle.
- **Initiative** — Cliquable pour lancer l'initiative.
- **Déplacement / Vitesse** — Affiche la vitesse de déplacement du personnage avec configuration.
- **Dés de vie** — Suivi complet supportant plusieurs tailles de dés, bonus de taille de dé, dés de vie bonus et jets de dés de vie.
- **Traqueur de blessures** — Système visuel de suivi des blessures par gouttes avec activation/désactivation au clic et réinitialisation.

#### Système de Mana
- **Affichage de la mana** — Mana actuelle/max avec indicateur coloré.
- **Dialogue de configuration** — Configuration de la mana dédiée, accessible depuis la feuille.
- **Intégration de classe** — S'intègre aux formules de mana spécifiques à chaque classe.

#### Contenu par onglets

La feuille organise les informations détaillées du personnage en **4 onglets** avec une **barre latérale d'armes** :

**Capacités** — Objets d'ascendance, historique, classe et sous-classe. Capacités de classe et aubaines avec glisser-déposer. Validation de sous-classe (nécessite niveau 3+).

**Sorts** — Sorts organisés par palier (0, 1, 2…) avec une catégorie utilitaire séparée. Indicateur de concentration **[C]** et affichage du coût d'activation. Recherche/filtre intégré pour retrouver rapidement un sort. Lancement de sorts intégré.

**Inventaire** — Monnaie : Or (PO), Argent (PA), Cuivre (PC). Objets avec suivi de quantité. Emplacements d'armes en accès rapide dans la barre latérale.

**Biographie** — Âge, genre, taille, poids. Langues, maîtrises d'armure, maîtrises d'armes. Éditeur de notes en texte enrichi.

#### Contrôles latéraux
- **Verrouillage d'édition** — Activez/désactivez le mode édition pour éviter les modifications accidentelles.
- **Monter de niveau / Annuler** — Montée de niveau (max 20) et annulation de la dernière montée avec historique.
- **Système de repos** — Boutons Repos de terrain et Repos sûr.
- **Thème de couleurs** — 4 thèmes intégrés + couleurs entièrement personnalisables (14 variables).

#### Thèmes de couleurs

| Thème | Description |
|---|---|
| **White** | Design blanc épuré par défaut |
| **Dark** | Variante mode sombre |
| **Nimble** | Thème accent correspondant à l'identité Nimble |
| **Custom** | Sélecteur de couleurs complet avec 14 variables |

#### Localisation

**Anglais** et **français** entièrement supportés (70+ chaînes localisées). Tous les libellés, actions, onglets, types d'objets, dialogues de configuration et noms de thèmes sont traduits.

### Compatibilité

| Prérequis | Version |
|---|---|
| Foundry VTT | v13 |
| Système Nimble | >= 0.6.0 |

### Installation

Dans Foundry VTT, allez dans **Modules complémentaires > Installer un module** et collez l'URL du manifeste :

```
https://github.com/kenlimero/nimble-white-sheet/releases/latest/download/module.json
```

### Développement

#### Stack technique

| Technologie | Version |
|---|---|
| Svelte | 5 |
| TypeScript | 5.9 |
| Vite | 7.1 |
| Sass (SCSS) | 1.93 |
| Node.js | >= 22.1.0 |

#### Commandes

```bash
npm install
npm run dev    # Serveur de dev avec HMR
npm run build  # Build de production vers dist/
```

#### Structure du projet

```
src/
├── main.ts                            # Point d'entrée
├── sheets/
│   └── WhiteCharacterSheet.svelte.ts  # Classe principale de la feuille
├── lib/
│   └── SvelteApplicationMixin.svelte.ts  # Pont Foundry-Svelte
├── view/
│   ├── WhiteSheet.svelte              # Composant racine
│   ├── sections/
│   │   ├── HeaderRow.svelte           # Portrait, nom, métadonnées
│   │   ├── StatsRow.svelte            # Caractéristiques, PV, CA, mana, blessures
│   │   ├── SkillsRow.svelte           # 10 boutons de compétences
│   │   └── ContentArea.svelte         # Onglets + barre latérale d'armes
│   ├── tabs/
│   │   ├── FeaturesTab.svelte         # Capacités et aubaines
│   │   ├── SpellsTab.svelte           # Sorts par palier
│   │   ├── InventoryTab.svelte        # Monnaie et objets
│   │   └── BioTab.svelte              # Biographie et maîtrises
│   └── components/
│       ├── AbilityBox.svelte          # Boîte de caractéristique
│       ├── SkillCell.svelte           # Bouton de compétence
│       ├── WoundTracker.svelte        # Gouttes de blessures
│       ├── InventorySlots.svelte      # Emplacements d'armes
│       ├── SidebarControls.svelte     # Édition, niveau, repos, thème
│       └── ColorSchemeMenu.svelte     # Sélecteur de thème
├── utils/
│   ├── localize.ts                    # Aide i18n
│   └── formatModifier.ts             # Formatage +X / −X
└── scss/                              # Feuilles de style SCSS
    ├── main.scss
    ├── _variables.scss
    ├── _layout.scss
    ├── _shapes.scss
    ├── _form-aesthetic.scss
    ├── _header.scss
    ├── _stats.scss
    ├── _skills.scss
    └── _content.scss
```

---

## Author / Auteur

**Kenlimero aka Ricco** — [GitHub](https://github.com/kenlimero)

## License / Licence

MIT
