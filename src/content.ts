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
    "importer le GeoPackage des communes de Seine-Maritime ;",
    "contrôler les couches et les variables avant de cartographier ;",
    "décrire l’unité d’observation et les indicateurs disponibles.",
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
      title: "Chargez le GeoPackage",
      text: "Glissez-déposez donnees_commune_mutation_76.gpkg dans Magrit, ou ouvrez « Import des données » dans le menu latéral puis la fenêtre d’import.",
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
    "Je vois la couche spatial dans le gestionnaire.",
    "Les communes de Seine-Maritime apparaissent dans la zone centrale.",
    "Je peux ouvrir le tableau associé à la couche.",
    "J’ai vérifié qu’une ligne correspond à une commune identifiée par id.",
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
        label: "Défi 2 · Comparer",
        title: "Moyenne et médiane racontent-elles la même chose ?",
        prompt:
          "Choisissez un même indicateur disponible avec les suffixes _mean et _med, puis comparez les deux distributions.",
        tasks: [
          "Repérez une commune dont la position relative change entre les deux variables.",
          "Rappelez quelle mesure est la plus sensible aux valeurs extrêmes.",
          "Formulez une hypothèse sur l’écart observé sans la présenter comme une explication démontrée.",
        ],
        answer:
          "Concluez sous la forme : « Pour cette commune, la moyenne est… tandis que la médiane est… ; cet écart pourrait indiquer… »",
        hint:
          "La moyenne peut être fortement déplacée par quelques mutations de valeur élevée ou faible. La médiane décrit la valeur qui partage les observations en deux groupes de même effectif.",
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
      "La couche communale et son tableau sont bien importés. Quelle est la prochaine décision utile ?",
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
        label: "Formuler la question puis choisir l’indicateur qui y répond",
        correct: true,
        feedback:
          "Oui. Le choix entre valeur, surface, nombre de pièces, moyenne et médiane dépend de la question posée.",
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

export const magritApplication = {
  title: "Cartographier les mutations foncières",
  duration: "Durée à confirmer",
  objectives: [
    "produire une carte communale d’un indicateur de valeur foncière ;",
    "justifier une représentation en plages de couleurs ;",
    "comparer une moyenne et une médiane portant sur le même phénomène ;",
    "séparer description cartographique, interprétation et hypothèse explicative.",
  ],
  dataset: {
    file: "donnees_commune_mutation_76.gpkg",
    layer: "spatial",
    territory: "Seine-Maritime",
    unit: "la commune",
    identifier: "id",
    expectedFeatureCount: 708,
    geometry: "MULTIPOLYGON",
    crs: "EPSG:4326",
    vintage: "janvier 2025",
    sources: "Demandes de valeurs foncières (DVF) diffusées sur data.gouv.fr et contours cadastraux Etalab",
    processing: "fusion des données à la parcelle, puis agrégation par commune réalisée pour cette séance",
    license: "Licence Ouverte 2.0",
    indicators: [
      { theme: "Valeur foncière", unit: "euro", median: "valeur_fonciere_med", mean: "valeur_fonciere_mean" },
      { theme: "Surface réelle bâtie", unit: "m²", median: "surface_reelle_bati_med", mean: "surface_reelle_bati_mean" },
      { theme: "Nombre de pièces principales", unit: "nombre de pièces", median: "nombre_pieces_principales_med", mean: "nombre_pieces_principales_mean" },
      { theme: "Surface du terrain", unit: "m²", median: "surface_terrain_med", mean: "surface_terrain_mean" },
    ],
  },
  firstMapSteps: [
    "Dans le menu des représentations, choisissez une carte en plages de couleurs.",
    "Sélectionnez la couche spatial puis la variable valeur_fonciere_med.",
    "Observez la distribution proposée avant de choisir une discrétisation.",
    "Choisissez une palette ordonnée dont la progression reste lisible et évitez l’effet arc-en-ciel.",
    "Ajoutez un titre qui nomme l’indicateur, l’unité territoriale et le territoire.",
  ],
  questions: {
    variable: {
      prompt: "Quelle variable répond le mieux à la question « Quelle est la valeur foncière médiane des mutations dans chaque commune ? »",
      answers: [
        { id: "valueMedian", label: "valeur_fonciere_med", correct: true, feedback: "Cette colonne correspond bien au phénomène, à la mesure résumée et à l’unité communale demandés." },
        { id: "valueMean", label: "valeur_fonciere_mean", correct: false, feedback: "Cette variable décrit la moyenne, alors que la question porte explicitement sur la médiane." },
        { id: "surfaceMedian", label: "surface_terrain_med", correct: false, feedback: "Cette variable résume la surface des terrains, pas leur valeur foncière." },
      ],
    },
    representation: {
      prompt: "Quelle représentation principale convient à cette médiane calculée pour chaque commune ?",
      answers: [
        { id: "areas", label: "Des plages de couleurs ordonnées", correct: true, feedback: "La médiane est un indicateur intensif : elle caractérise chaque commune sans être un total proportionnel à sa taille." },
        { id: "symbols", label: "Des symboles proportionnels", correct: false, feedback: "Les symboles proportionnels conviennent d’abord aux stocks et effectifs. Ici, la variable est une valeur médiane." },
      ],
    },
    comparison: {
      prompt: "Pourquoi la carte de valeur_fonciere_mean peut-elle différer de celle de valeur_fonciere_med ?",
      answers: [
        { id: "extremes", label: "La moyenne est plus sensible aux valeurs extrêmes", correct: true, feedback: "Oui. Quelques mutations très élevées ou très faibles peuvent déplacer la moyenne davantage que la médiane." },
        { id: "geometry", label: "La moyenne modifie les limites communales", correct: false, feedback: "Changer de variable statistique ne modifie pas la géométrie des communes." },
        { id: "identifier", label: "La médiane remplace l’identifiant id", correct: false, feedback: "L’identifiant et l’indicateur ont deux rôles différents : id repère la commune, la médiane la caractérise." },
      ],
    },
  },
  productionChecks: [
    "La légende indique clairement qu’il s’agit d’une valeur foncière médiane.",
    "Les classes sont ordonnées et leurs bornes sont lisibles.",
    "Les valeurs manquantes, si elles existent, sont distinguées des valeurs faibles.",
    "Le titre ne prétend pas montrer un prix au m² ni une évolution temporelle.",
  ],
  interpretationPrompts: [
    "Décrivez une organisation spatiale visible sans chercher à l’expliquer.",
    "Repérez une commune ou un groupe de communes qui se distingue et appuyez-vous sur la légende.",
    "Proposez une hypothèse explicative, puis nommez une donnée supplémentaire nécessaire pour l’examiner.",
  ],
} as const;
