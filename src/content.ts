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
