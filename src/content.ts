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
  bonus: {
    title: "Questions bonus : poussez le raisonnement",
    introduction:
      "Vous avez terminé le point de contrôle ? Choisissez un seul défi. L’objectif n’est pas d’aller plus vite, mais de préciser la question géographique avant de choisir une représentation. Cette partie ne compte pas dans la progression.",
    challenges: [
      {
        id: "denominator",
        label: "Défi 1 · Transformer",
        title: "Changer de dénominateur, est-ce changer de question ?",
        prompt:
          "Vous connaissez le nombre d’habitants âgés de 65 ans ou plus dans chaque territoire. Imaginez deux indicateurs relatifs construits à partir de cet effectif.",
        tasks: [
          "Choisissez un dénominateur pertinent pour chacun des deux indicateurs.",
          "Formulez la question géographique à laquelle répondrait chaque indicateur.",
          "Expliquez pourquoi les deux cartes pourraient classer les territoires différemment.",
        ],
        answer:
          "Présentez vos propositions sous la forme : « … ÷ … permet de comparer… »",
        hint:
          "Vous pouvez rapporter l’effectif à la population totale pour étudier la structure par âge, ou à la superficie pour étudier une concentration spatiale. Les deux indicateurs ne décrivent pas le même phénomène.",
      },
      {
        id: "median",
        label: "Défi 2 · Nuancer",
        title: "Toute variable qui n’est pas un stock est-elle un ratio ?",
        prompt:
          "Prenez le revenu médian d’un territoire. Il ne s’agit ni d’un nombre de revenus ni d’une division entre deux effectifs.",
        tasks: [
          "Expliquez avec vos mots ce que mesure une médiane.",
          "Diriez-vous que cette variable est extensive ou intensive ?",
          "Choisissez entre symboles proportionnels et plages de couleurs, puis justifiez votre décision.",
        ],
        answer:
          "Complétez : « Le revenu médian n’est pas un ratio, mais je choisirais… parce que… »",
        hint:
          "Une variable intensive caractérise un territoire sans augmenter mécaniquement avec sa taille ou sa population. Elle peut donc être représentée par des plages de couleurs, même si elle n’est pas un ratio au sens strict.",
      },
      {
        id: "explanation",
        label: "Défi 3 · Interpréter",
        title: "Peut-on expliquer une carte uniquement en la regardant ?",
        prompt:
          "Revenez à la carte en symboles proportionnels du diagnostic et choisissez un territoire qui attire votre attention.",
        tasks: [
          "Rédigez un constat qui décrit seulement ce qui est visible.",
          "Proposez ensuite une hypothèse susceptible d’expliquer ce constat.",
          "Nommez une donnée supplémentaire nécessaire pour examiner cette hypothèse.",
        ],
        answer:
          "Séparez trois phrases : « J’observe… », « Je fais l’hypothèse… », puis « Pour la vérifier, il faudrait… »",
        hint:
          "La carte montre ici une quantité par territoire. Une cause possible — superficie, urbanisation ou autre — reste une hypothèse tant qu’elle n’est pas confrontée à d’autres informations.",
      },
    ],
    sharePrompt:
      "Quel défi montre le mieux que la représentation dépend de la question posée ? Préparez un exemple précis à expliquer au groupe.",
  },
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
  bonus: {
    title: "Questions bonus : enquêtez sur les données",
    introduction:
      "Vous avez terminé les contrôles ? Choisissez un défi parmi ceux que permettent les fichiers disponibles. Il n’est pas nécessaire de tous les faire et cette partie ne compte pas dans la progression.",
    challenges: [
      {
        id: "variable",
        label: "Défi 1 · Décrire",
        title: "Une variable est-elle vraiment prête à être cartographiée ?",
        prompt:
          "Choisissez une variable quantitative qui pourrait être utilisée plus tard dans la séance, puis établissez sa fiche d’identité.",
        tasks: [
          "Que mesure-t-elle, pour quelle unité d’observation et à quelle date ?",
          "Son type est-il bien numérique dans Magrit ?",
          "Repérez-vous des valeurs manquantes, nulles ou surprenantes ?",
        ],
        answer:
          "Préparez une phrase : « Cette variable mesure…, pour…, en…, mais je dois encore vérifier… »",
        hint:
          "Le nom d’une colonne ne suffit pas toujours. Cherchez aussi une documentation, une unité ou une date dans les éléments fournis pendant la séance. Si l’information manque, signalez-le : c’est déjà un résultat utile.",
      },
      {
        id: "identifier",
        label: "Défi 2 · Relier",
        title: "Un identifiant commun garantit-il une bonne jointure ?",
        prompt:
          "Si vous disposez d’une couche et d’une table séparée, comparez les colonnes qui pourraient servir à les relier.",
        tasks: [
          "Les identifiants ont-ils le même format dans les deux tableaux ?",
          "Sont-ils uniques ou certains apparaissent-ils plusieurs fois ?",
          "Des territoires semblent-ils présents d’un côté mais absents de l’autre ?",
        ],
        answer:
          "Concluez : la jointure paraît-elle possible immédiatement, possible après correction, ou impossible à évaluer ? Justifiez avec un contrôle précis.",
        hint:
          "Deux colonnes peuvent porter le même nom sans contenir exactement les mêmes codes. Comparez quelques valeurs, leur longueur, les éventuels zéros initiaux et le nombre de lignes.",
      },
      {
        id: "anomaly",
        label: "Défi 3 · Questionner",
        title: "Une valeur étonnante est-elle forcément une erreur ?",
        prompt:
          "Repérez une valeur qui vous semble très grande, très petite ou inhabituelle. Ne cherchez pas encore à l’expliquer.",
        tasks: [
          "Décrivez précisément ce qui vous étonne, sans employer « anormal » ou « bizarre ».",
          "Vérifiez l’unité, la date et la valeur dans le tableau.",
          "Proposez une vérification supplémentaire qui permettrait de distinguer erreur et cas réel.",
        ],
        answer:
          "Distinguez votre constat de votre hypothèse : « J’observe que… Pour savoir si…, je vérifierais… »",
        hint:
          "À ce stade, la carte ou le tableau permet de repérer un cas, pas d’en donner la cause. Une comparaison avec la source, une autre date ou une variable liée peut aider.",
      },
    ],
    sharePrompt:
      "Quelle vérification a le plus modifié votre compréhension des données ? Préparez une réponse en deux phrases : une pour le constat, une pour ce qu’il reste à vérifier.",
  },
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
