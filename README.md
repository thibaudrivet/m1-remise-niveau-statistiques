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

## Séance 2 — jeu de travail et décisions encore ouvertes

Le parcours Magrit utilise le GeoPackage `data/donnees_commune_mutation_76.gpkg`. Il contient une couche communale de Seine-Maritime déjà associée à des indicateurs agrégés de mutations foncières. Une ligne correspond à une commune et la colonne `id` sert d’identifiant ; aucune jointure n’est demandée dans le parcours actuel.

Le jeu a été préparé à partir du millésime de janvier 2025 des Demandes de valeurs foncières (DVF), récupéré sur data.gouv.fr, et des contours cadastraux Etalab. Les données initialement disponibles à la parcelle ont été fusionnées puis agrégées par commune pour la séance. Les sources sont diffusées sous Licence Ouverte 2.0.

L’application propose une première carte de `valeur_fonciere_med`, puis une comparaison avec `valeur_fonciere_mean`. Les autres couples moyenne–médiane portent sur la surface réelle bâtie, le nombre de pièces principales et la surface du terrain.

L’équipe enseignante doit encore confirmer :

- le canal de diffusion du GeoPackage aux étudiants ;
- la période de mutation effectivement couverte par le millésime de janvier 2025 ;
- la documentation détaillée des règles d’agrégation ;
- le niveau attendu sur la discrétisation ;
- la durée exacte, la répartition de l’animation et l’éventuel livrable étudiant.
