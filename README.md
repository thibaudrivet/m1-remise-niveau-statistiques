# M1 — Remise à niveau en statistique

Support web progressif destiné aux séances de remise à niveau du master. Le site est conçu pour être publié gratuitement sur GitHub Pages et lié depuis UniversiTICE.

## Choix d’organisation

Un dépôt correspond à une **UE**. Les différentes séances vivent dans le même site :

- séance 2 : cartographie thématique et statistique ;
- séance 5 : relations entre variables quantitatives.

Cette organisation permet de partager les styles et composants sans mélanger les enseignements de L1, les enseignements de M1 et les futures UE.

## Modifier le contenu

Les fichiers principaux sont :

- `src/content.ts` : textes, objectifs, questions et réponses ;
- `src/App.tsx` : structure des pages et interactions ;
- `src/styles.css` : couleurs et mise en page ;
- `AGENTS.md` : contexte et règles à lire par Codex avant d’intervenir.

Pour une modification simple, commencer par `src/content.ts`.

## Lancer le site en local

Installer [Node.js](https://nodejs.org/) dans une version récente, puis ouvrir un terminal dans le dossier :

```bash
npm install
npm run dev
```

Vite indique une adresse locale, généralement `http://localhost:5173/`.

Pour vérifier la version qui sera publiée :

```bash
npm run build
npm run preview
```

## Poursuivre avec Codex

Ouvrir une instance Codex directement dans ce dossier. `AGENTS.md` sera lu comme contexte de projet. Une demande peut par exemple être formulée ainsi :

> Complète la partie « prise en main de Magrit » de la séance 2. Conserve le parcours guidé, ajoute des aides repliables et ne suppose pas encore de jeu de données définitif. Vérifie le build.

## Publier sur GitHub Pages

1. Créer un nouveau dépôt GitHub, par exemple `m1-remise-niveau-statistiques`.
2. Placer le contenu de ce dossier à la racine du dépôt.
3. Envoyer les fichiers sur la branche `main`.
4. Dans GitHub, ouvrir **Settings → Pages**.
5. Dans **Build and deployment**, choisir **GitHub Actions**.

Le workflow inclus compile et publie ensuite automatiquement le site à chaque envoi sur `main`.

L’adresse aura normalement la forme :

```text
https://UTILISATEUR.github.io/m1-remise-niveau-statistiques/
```

## Répartition avec UniversiTICE

GitHub Pages héberge les supports publics et interactifs. UniversiTICE conserve :

- les fichiers soumis à restriction ;
- les corrigés réservés ;
- les évaluations suivies ;
- les dépôts de travaux étudiants ;
- le lien institutionnel vers le support.

Les réponses aux exercices interactifs de ce site ne sont ni envoyées ni enregistrées.

## Séance 2 — décisions encore ouvertes

La deuxième partie, « Prendre en main Magrit », reste volontairement indépendante d’un jeu de données précis. Avant de construire l’étape suivante, l’équipe enseignante doit encore confirmer :

- le territoire et le jeu de données utilisés ;
- les fichiers distribués aux étudiants et leur canal de diffusion ;
- la présence ou non d’une jointure entre un fond de carte et une table ;
- les identifiants à comparer et les contrôles attendus après la jointure ;
- la première représentation à produire et le niveau attendu sur la discrétisation ;
- la durée exacte, la répartition de l’animation et l’éventuel livrable étudiant.
