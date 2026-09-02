# Instructions pour les agents Codex

## Objet du dépôt

Ce dépôt contient les supports web de l’UE de **remise à niveau en statistique du M1**. Il doit rester utilisable comme site statique sur GitHub Pages et comme ressource liée depuis UniversiTICE.

Les séances prévues sont notamment :

- séance 2 : cartographie thématique et statistique, avec Magrit ;
- séance 5 : analyse des relations entre variables quantitatives.

Le contenu officiel précis, le jeu de données, les logiciels et certaines attentes pédagogiques peuvent encore évoluer. Ne jamais présenter une hypothèse de travail comme une consigne officielle confirmée.

## Organisation retenue

- Un dépôt correspond à une UE, pas à une séance et pas à l’ensemble des enseignements.
- Chaque séance possède sa propre route dans l’application (`#/seance-2`, puis `#/seance-5`, etc.).
- `src/content.ts` contient autant que possible les textes, questions, réponses et objectifs facilement modifiables.
- `src/App.tsx` contient la structure et les interactions.
- `src/styles.css` contient l’identité visuelle commune de l’UE.
- `.github/workflows/deploy-pages.yml` publie le dossier compilé sur GitHub Pages.

## Principes pédagogiques

- Partir d’une question géographique avant d’introduire une manipulation logicielle.
- Distinguer explicitement données, représentation, interprétation et explication.
- Demander aux étudiants de justifier leurs choix plutôt que d’appliquer uniquement une recette.
- Prévoir un parcours principal guidé, des aides repliables et un approfondissement facultatif pour les étudiants rapides.
- Conserver quelques points de synchronisation collective dans les séances de trois heures.
- Formuler les objectifs comme des capacités observables.
- Les autocorrections du site sont formatives et ne doivent pas laisser croire que les réponses sont enregistrées.
- Employer un vocabulaire précis mais accessible à des étudiants de master venant de parcours différents.

## Contraintes techniques

- Le projet doit rester entièrement statique : aucun serveur, aucune base de données et aucun secret.
- Ne jamais mettre dans le dépôt des données personnelles, confidentielles, sous restriction d’accès ou issues d’un environnement sécurisé.
- Les corrigés réservés, données non diffusables, dépôts étudiants et évaluations suivies restent sur UniversiTICE.
- Préserver le fonctionnement sous le sous-chemin d’un projet GitHub Pages ; ne pas remplacer `base: "./"` sans raison vérifiée.
- Préserver la navigation par hash, qui évite les erreurs 404 au rechargement sur GitHub Pages.
- Éviter les nouvelles dépendances lorsque HTML, CSS et React suffisent.
- Ne jamais committer `node_modules/` ni `dist/`.

## Accessibilité et ergonomie

- Le site doit rester utilisable au clavier et sur un écran étroit.
- Conserver un contraste suffisant, des libellés explicites et une taille de texte principale d’au moins 16 px.
- Fournir un texte alternatif ou un libellé accessible pour toute information visuelle.
- Ne pas transmettre une information uniquement par la couleur.
- Respecter `prefers-reduced-motion`.

## Procédure avant de terminer une modification

1. Relire les textes visibles du point de vue étudiant.
2. Vérifier que les réponses et rétroactions correspondent aux consignes.
3. Exécuter `npm run build`.
4. Corriger toute erreur TypeScript ou de compilation.
5. Résumer les changements apportés et les informations qui restent à confirmer.

## Travail avec le responsable et la co-intervenante

Lorsqu’une décision dépend du responsable de formation ou de l’autre doctorante, la laisser clairement repérée dans le code ou la documentation. Les éléments structurants encore ouverts sont notamment :

- jeu de données et territoire étudié ;
- modalités exactes d’usage de Magrit ;
- niveau attendu sur la discrétisation ;
- articulation avec les autres séances ;
- répartition de l’animation et de la préparation ;
- éventuels livrables demandés aux étudiants.

Ne pas inventer ces éléments pour compléter artificiellement une séance.
