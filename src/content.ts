export const course = {
  title: "M1 · Remise à niveau en statistique",
  description:
    "Des parcours guidés pour réactiver les bases, expérimenter et vérifier sa compréhension.",
};

export const sessionTwo = {
  number: 2,
  title: "Cartographie thématique et statistique",
  introductionTitle: "Choisir avant de cartographier",
  duration: "25 minutes environ",
  objectives: [
    "identifier l’unité d’observation d’une carte ;",
    "distinguer un effectif d’un indicateur relatif ;",
    "associer une donnée à une représentation adaptée ;",
    "justifier un choix cartographique en une phrase.",
  ],
  diagnostic: {
    title: "Même donnée, deux cartes : laquelle choisir ?",
    prompt:
      "Les deux cartes fictives représentent le nombre total d’habitants dans quatre territoires.",
    correct:
      "Le nombre d’habitants est une quantité absolue : la taille des symboles peut varier proportionnellement à cette quantité.",
    retry:
      "Le remplissage des surfaces donne l’impression d’une intensité. Or les grands territoires ont souvent mécaniquement davantage d’habitants.",
    hint:
      "Demandez-vous si la valeur décrit une quantité totale ou une intensité indépendante de la taille du territoire.",
  },
  quiz: [
    { label: "Nombre total d’habitants", answer: "stock" },
    { label: "Part des habitants âgés de 65 ans ou plus", answer: "ratio" },
    { label: "Nombre d’établissements scolaires", answer: "stock" },
    { label: "Habitants par km²", answer: "ratio" },
  ],
} as const;

export const magritIntroduction = {
  title: "Prendre en main Magrit",
  duration: "40 minutes environ",
  objectives: [
    "repérer les trois zones principales de l’interface ;",
    "importer un fond de carte et, si besoin, une table de données ;",
    "contrôler les couches et les variables avant de cartographier ;",
    "décrire ce qui est prêt et ce qui reste à relier ou à corriger.",
  ],
  interfaceZones: [
    {
      id: "topbar",
      number: "01",
      title: "Barre de menu",
      short: "Barre de menu",
      description:
        "Elle donne accès aux actions générales : ouvrir ou sauvegarder un projet, consulter l’aide et régler l’application.",
    },
    {
      id: "sidebar",
      number: "02",
      title: "Menu latéral",
      short: "Menu latéral",
      description:
        "Il organise le travail : importer, choisir une projection, créer une représentation, habiller puis exporter la carte.",
    },
    {
      id: "canvas",
      number: "03",
      title: "Zone centrale",
      short: "Zone centrale",
      description:
        "Elle affiche la carte et permet d’interagir avec les objets visibles. Le résultat évolue au fil des réglages.",
    },
  ],
  interfaceQuiz: [
    { label: "Ouvrir la fenêtre d’import des données", answer: "sidebar" },
    { label: "Glisser-déposer les fichiers sur le planisphère", answer: "canvas" },
    { label: "Enregistrer le projet Magrit", answer: "topbar" },
  ],
  importSteps: [
    {
      title: "Ouvrez l’application",
      text: "Lancez Magrit dans un nouvel onglet et gardez ce support ouvert pour suivre les consignes.",
    },
    {
      title: "Chargez les fichiers de la séance",
      text: "Glissez-déposez les fichiers dans Magrit, ou ouvrez « Import des données » dans le menu latéral puis la fenêtre d’import.",
    },
    {
      title: "Lisez avant de valider",
      text: "Pour chaque donnée géographique, relevez le nom, le nombre d’entités, le type de géométrie et le système de coordonnées de référence (SCR).",
    },
    {
      title: "Contrôlez le résultat",
      text: "Après l’import, ouvrez le gestionnaire de couches puis le tableau de données. Ne choisissez pas encore de représentation.",
    },
  ],
  verificationItems: [
    "Je vois au moins une couche dans le gestionnaire.",
    "Le fond de carte apparaît dans la zone centrale.",
    "Je peux ouvrir le tableau associé à la couche ou à la table.",
    "J’ai identifié ce que représente une ligne du tableau.",
  ],
  checkpoint: {
    prompt:
      "Un fond de carte et une table statistique sont bien importés. Quelle est la prochaine vérification utile ?",
    answers: [
      {
        id: "colors",
        label: "Choisir immédiatement une palette de couleurs",
        correct: false,
        feedback:
          "La couleur vient plus tard. Il faut d’abord savoir quelles observations et quelles variables sont disponibles.",
      },
      {
        id: "tables",
        label: "Ouvrir les deux tableaux et chercher les identifiants communs",
        correct: true,
        feedback:
          "Oui. Cette vérification permet de comprendre les données et de préparer une éventuelle jointure sans perdre d’observations.",
      },
      {
        id: "export",
        label: "Exporter la carte pour vérifier sa résolution",
        correct: false,
        feedback:
          "L’export concerne un résultat déjà construit. À ce stade, la priorité est de contrôler les données importées.",
      },
    ],
  },
} as const;
