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

export const sessionFiveBasics = {
  number: 5,
  title: "Relations entre variables quantitatives",
  pageTitle: "Réactiver les bases statistiques",
  duration: "25 minutes environ",
  objectives: [
    "identifier l’individu, la population, l’échantillon et la variable dans une situation donnée ;",
    "distinguer une mesure de position d’une mesure de dispersion ;",
    "interpréter une variance et un écart-type sans les confondre ;",
    "contrôler qu’un résultat numérique reste cohérent avec les données observées.",
  ],
  vocabulary: [
    {
      term: "Individu",
      definition: "l’unité sur laquelle porte une observation.",
      example: "Une commune, une personne ou une entreprise selon la question étudiée.",
    },
    {
      term: "Population",
      definition: "l’ensemble des individus concernés par l’étude.",
      example: "Toutes les communes de la région étudiée.",
    },
    {
      term: "Échantillon",
      definition: "la partie de la population effectivement observée.",
      example: "120 communes sélectionnées parmi l’ensemble des communes françaises.",
    },
    {
      term: "Variable",
      definition: "une caractéristique observée pour chaque individu.",
      example: "La population municipale ou le revenu médian de chaque commune.",
    },
    {
      term: "Valeur",
      definition: "le résultat pris par une variable pour un individu donné.",
      example: "12 450 habitants pour une commune donnée.",
    },
    {
      term: "Effectif n",
      definition: "le nombre d’individus effectivement observés.",
      example: "Sept valeurs observées correspondent à n = 7.",
    },
  ],
  example: {
    values: [2, 4, 4, 5, 5, 6, 9],
    mean: "5",
    median: "5",
    range: "9 − 2 = 7",
    variance: "4",
    standardDeviation: "2",
  },
  measures: [
    {
      name: "Moyenne",
      symbol: "x̄",
      role: "Situer le centre de gravité des valeurs.",
      reading: "La somme des valeurs divisée par leur effectif.",
      warning: "Elle est sensible aux valeurs très éloignées.",
    },
    {
      name: "Médiane",
      symbol: "Me",
      role: "Repérer la valeur qui partage la série ordonnée en deux groupes.",
      reading: "Au moins la moitié des valeurs se trouve de chaque côté.",
      warning: "Elle décrit une position, pas la dispersion.",
    },
    {
      name: "Variance",
      symbol: "V",
      role: "Résumer la moyenne des écarts au carré à la moyenne.",
      reading: "Une variance plus grande signale des valeurs plus dispersées, toutes choses égales par ailleurs.",
      warning: "Son unité est celle de la variable au carré, donc son interprétation directe est peu intuitive.",
    },
    {
      name: "Écart-type",
      symbol: "σ",
      role: "Exprimer la dispersion dans l’unité de la variable.",
      reading: "Il est égal à la racine carrée de la variance.",
      warning: "Il ne décrit pas, à lui seul, la forme de la distribution.",
    },
  ],
  quiz: [
    {
      prompt: "Dans un tableau où chaque ligne décrit une commune et chaque colonne un indicateur, que représentent une ligne et une colonne ?",
      answers: [
        { id: "right", label: "Une ligne est un individu ; une colonne est une variable", correct: true, feedback: "Oui. La valeur située à leur intersection est l’observation de cette variable pour cette commune." },
        { id: "reverse", label: "Une ligne est une variable ; une colonne est un échantillon", correct: false, feedback: "Revenez à la structure du tableau : une même ligne rassemble les caractéristiques d’une seule commune." },
        { id: "population", label: "Une ligne est une population ; une colonne est un individu", correct: false, feedback: "La population désigne l’ensemble des individus étudiés, pas une seule ligne." },
      ],
    },
    {
      prompt: "Deux séries ont la même moyenne. La série B présente des valeurs beaucoup plus éloignées de cette moyenne. Que peut-on attendre ?",
      answers: [
        { id: "same", label: "Les deux écarts-types sont nécessairement égaux", correct: false, feedback: "Une même moyenne n’implique pas une même dispersion." },
        { id: "larger", label: "L’écart-type de B est généralement plus grand", correct: true, feedback: "Oui. Des écarts à la moyenne plus importants conduisent généralement à une variance et à un écart-type plus grands." },
        { id: "negative", label: "L’écart-type de B devient négatif", correct: false, feedback: "Un écart-type est toujours positif ou nul." },
      ],
    },
    {
      prompt: "Une variable est mesurée en kilomètres. Dans quelle unité s’exprime son écart-type ?",
      answers: [
        { id: "km", label: "En kilomètres", correct: true, feedback: "Oui. L’écart-type retrouve l’unité initiale grâce à la racine carrée." },
        { id: "km2", label: "En kilomètres carrés", correct: false, feedback: "C’est la variance qui s’exprime dans l’unité au carré." },
        { id: "none", label: "Sans unité", correct: false, feedback: "L’écart-type conserve l’unité de la variable." },
      ],
    },
  ],
} as const;

export const sessionFiveRelations = {
  title: "Explorer une relation entre deux variables quantitatives",
  duration: "35 minutes environ",
  objectives: [
    "lire un nuage de points en décrivant sa direction, sa forme et son intensité ;",
    "repérer une observation atypique susceptible de modifier le résumé de la relation ;",
    "distinguer covariance et coefficient de corrélation linéaire ;",
    "formuler une conclusion qui ne transforme pas une association en causalité.",
  ],
  patterns: [
    {
      id: "positive",
      label: "Relation positive",
      description: "Quand X augmente, Y tend aussi à augmenter. Le nuage suit ici une forme approximativement linéaire.",
      points: [[8, 14], [17, 20], [27, 31], [36, 34], [45, 48], [56, 55], [65, 62], [75, 76], [87, 82], [94, 91]],
    },
    {
      id: "negative",
      label: "Relation négative",
      description: "Quand X augmente, Y tend à diminuer. Le signe décrit une direction, pas un jugement de valeur.",
      points: [[8, 89], [18, 78], [27, 74], [36, 63], [46, 58], [55, 43], [66, 39], [76, 27], [86, 22], [94, 9]],
    },
    {
      id: "none",
      label: "Pas de tendance linéaire nette",
      description: "Les points ne suivent pas de direction linéaire claire. Cela n’exclut ni une relation non linéaire, ni des sous-groupes.",
      points: [[8, 53], [17, 20], [25, 82], [35, 39], [44, 68], [53, 16], [63, 55], [72, 88], [83, 35], [94, 64]],
    },
  ],
  readingSteps: [
    { title: "Variables", text: "Nommez X et Y, leurs unités, les individus observés et l’effectif du nuage." },
    { title: "Direction", text: "Indiquez si Y tend à augmenter, diminuer ou ne montre pas de tendance nette lorsque X augmente." },
    { title: "Forme", text: "Demandez-vous si le nuage évoque une droite, une courbe, plusieurs groupes ou aucune structure simple." },
    { title: "Intensité", text: "Observez si les points sont serrés autour de la tendance ou largement dispersés." },
    { title: "Exceptions", text: "Repérez les points isolés ou influents avant de résumer la relation par un seul nombre." },
  ],
  concepts: [
    {
      name: "Covariance",
      formula: "cov(X,Y) = moyenne[(xᵢ − x̄)(yᵢ − ȳ)]",
      meaning: "Son signe indique le sens de variation conjointe : positif si les écarts à la moyenne vont souvent dans le même sens, négatif s’ils vont souvent en sens contraire.",
      limit: "Sa valeur dépend des unités de X et de Y ; elle se compare donc difficilement entre des couples de variables différents.",
    },
    {
      name: "Corrélation linéaire de Pearson",
      formula: "r = cov(X,Y) ÷ (sₓ × sᵧ)",
      meaning: "Elle standardise la covariance. Le coefficient r est sans unité et reste compris entre −1 et +1.",
      limit: "Elle résume une relation linéaire et peut être fortement modifiée par une observation atypique.",
    },
  ],
  quiz: [
    {
      prompt: "Un coefficient de corrélation vaut r = −0,82. Quelle formulation est la plus prudente ?",
      answers: [
        { id: "careful", label: "Les deux variables présentent une association linéaire négative assez forte dans les données observées", correct: true, feedback: "Oui. La phrase précise la direction, le caractère linéaire et le périmètre de l’observation." },
        { id: "cause", label: "Une hausse de X provoque nécessairement une baisse de Y", correct: false, feedback: "Une corrélation, même forte, ne démontre pas un mécanisme causal." },
        { id: "weak", label: "La relation est faible parce que le coefficient est négatif", correct: false, feedback: "Le signe indique la direction. L’intensité dépend de la proximité de la valeur absolue de r avec 1." },
      ],
    },
    {
      prompt: "Le coefficient r est proche de zéro. Que peut-on conclure ?",
      answers: [
        { id: "nothing", label: "Les variables n’ont absolument aucune relation", correct: false, feedback: "Une relation courbe ou des sous-groupes peuvent produire une corrélation linéaire proche de zéro." },
        { id: "linear", label: "Aucune association linéaire nette n’est mise en évidence", correct: true, feedback: "Oui. Cette formulation reste limitée à la forme de relation effectivement résumée par r." },
        { id: "equal", label: "Les deux variables ont la même moyenne", correct: false, feedback: "La corrélation ne compare pas les moyennes des deux variables." },
      ],
    },
    {
      prompt: "Pourquoi observer le nuage avant de calculer ou commenter r ?",
      answers: [
        { id: "visual", label: "Pour repérer la forme, les sous-groupes et les points atypiques que r masque", correct: true, feedback: "Oui. Le graphique et le coefficient apportent des informations complémentaires." },
        { id: "replace", label: "Parce que le graphique remplace toujours tout calcul", correct: false, feedback: "Le nuage aide à interpréter ; le coefficient fournit ensuite un résumé numérique utile lorsqu’il est adapté." },
        { id: "axes", label: "Uniquement pour choisir la couleur des axes", correct: false, feedback: "L’enjeu principal est l’examen de la structure des données, pas la décoration du graphique." },
      ],
    },
  ],
} as const;

export const sessionFiveRegression = {
  title: "Ajuster une régression linéaire simple dans R",
  duration: "50 minutes environ",
  objectives: [
    "écrire une formule de modèle en distinguant variable expliquée et variable explicative ;",
    "ajuster une régression linéaire simple avec lm() et afficher son résumé ;",
    "interpréter la pente, l’ordonnée à l’origine et le coefficient R² dans leur contexte ;",
    "examiner les résidus avant de retenir une conclusion ou une prédiction.",
  ],
  dataset: {
    name: "cars",
    description: "un jeu fourni avec R contenant 50 observations de vitesses et de distances d’arrêt de voitures",
    warning: "Ces mesures recueillies dans les années 1920 servent uniquement à apprendre la démarche technique. Elles ne constituent pas le jeu d’étude définitif de la séance et ne doivent pas être généralisées aux véhicules actuels.",
    variables: [
      { name: "speed", role: "variable explicative X", unit: "miles par heure (mph)" },
      { name: "dist", role: "variable expliquée Y", unit: "pieds (ft)" },
    ],
  },
  workflow: [
    {
      title: "Examiner les données",
      code: "data(cars)\nhead(cars)\nstr(cars)\nsummary(cars)",
      instruction: "Vérifiez le nombre de lignes, les noms de variables, leur type et leur étendue avant de construire le modèle.",
    },
    {
      title: "Tracer le nuage de points",
      code: "plot(dist ~ speed, data = cars,\n     xlab = \"Vitesse (mph)\",\n     ylab = \"Distance d'arrêt (ft)\",\n     pch = 19, col = \"#6d28d9\")",
      instruction: "Décrivez la direction, la forme, la dispersion et les observations atypiques éventuelles.",
    },
    {
      title: "Ajuster le modèle",
      code: "modele <- lm(dist ~ speed, data = cars)",
      instruction: "Dans la formule R, la variable expliquée se place à gauche de ~ et la variable explicative à droite.",
    },
    {
      title: "Afficher les résultats",
      code: "summary(modele)\ncoef(modele)",
      instruction: "Commencez par identifier les coefficients, puis R² et l’écart-type résiduel. Ne réduisez pas la lecture aux étoiles de significativité.",
    },
    {
      title: "Ajouter la droite ajustée",
      code: "abline(modele, col = \"#ea580c\", lwd = 2)",
      instruction: "La droite résume la valeur prédite de la distance pour chaque vitesse ; les points ne sont pas supposés se trouver exactement dessus.",
    },
  ],
  expected: {
    equation: "distance prédite ≈ −17,58 + 3,93 × vitesse",
    intercept: "L’ordonnée à l’origine est la distance prédite pour une vitesse nulle. Ici, 0 mph se trouve hors de l’étendue observée : cette valeur négative n’a pas d’interprétation concrète utile.",
    slope: "Dans ces données, une hausse de 1 mph est associée en moyenne à environ 3,93 pieds supplémentaires de distance d’arrêt prédite.",
    rSquared: "R² vaut environ 0,65 : le modèle linéaire rend compte d’environ 65 % de la variabilité observée de dist dans cet échantillon.",
  },
  diagnostics: [
    {
      title: "Résidus et valeurs ajustées",
      code: "plot(modele, which = 1)",
      question: "Les résidus sont-ils dispersés sans structure autour de zéro, ou une courbure reste-t-elle visible ?",
    },
    {
      title: "Normalité approximative des résidus",
      code: "plot(modele, which = 2)",
      question: "Les points suivent-ils approximativement la droite du graphique quantile-quantile, notamment dans les extrémités ?",
    },
    {
      title: "Dispersion des résidus",
      code: "plot(modele, which = 3)",
      question: "La dispersion reste-t-elle relativement stable quand les valeurs ajustées augmentent ?",
    },
    {
      title: "Observations influentes",
      code: "plot(modele, which = 5)",
      question: "Certaines observations combinent-elles un fort levier et un résidu important ?",
    },
  ],
  quiz: [
    {
      prompt: "Que signifie lm(dist ~ speed, data = cars) ?",
      answers: [
        { id: "right", label: "On modélise dist en fonction de speed", correct: true, feedback: "Oui. dist est la réponse placée à gauche de ~ ; speed est le prédicteur placé à droite." },
        { id: "reverse", label: "On modélise speed en fonction de dist", correct: false, feedback: "Cela correspondrait à la formule speed ~ dist. Inverser X et Y change le modèle." },
        { id: "cor", label: "On calcule seulement leur corrélation", correct: false, feedback: "lm() ajuste ici une droite et produit notamment des coefficients et des résidus." },
      ],
    },
    {
      prompt: "Comment interpréter la pente estimée à environ 3,93 ?",
      answers: [
        { id: "cause", label: "Ajouter 1 mph cause exactement 3,93 ft de distance en plus", correct: false, feedback: "La pente décrit une association moyenne estimée ; elle n’établit ni un effet exact pour chaque voiture, ni une causalité." },
        { id: "average", label: "Dans ces données, +1 mph est associé à environ +3,93 ft de distance prédite en moyenne", correct: true, feedback: "Oui. La formulation précise les unités, le sens de variation et le périmètre des données." },
        { id: "percent", label: "La distance augmente de 3,93 %", correct: false, feedback: "Le modèle est ajusté sur les valeurs brutes : la pente s’exprime ici en pieds par mph, pas en pourcentage." },
      ],
    },
    {
      prompt: "Que résume un R² proche de 0,65 dans ce modèle ?",
      answers: [
        { id: "variance", label: "Environ 65 % de la variabilité de dist est rendue compte par la relation linéaire avec speed", correct: true, feedback: "Oui, dans les données utilisées pour ajuster ce modèle." },
        { id: "points", label: "65 % des observations sont exactement sur la droite", correct: false, feedback: "R² porte sur la variabilité expliquée, pas sur une proportion de points correctement placés." },
        { id: "cause", label: "speed cause 65 % de dist", correct: false, feedback: "R² ne décompose pas une causalité et ne s’interprète pas comme un pourcentage de cause." },
      ],
    },
    {
      prompt: "Le graphique des résidus montre une courbure nette. Quelle réaction est la plus pertinente ?",
      answers: [
        { id: "ignore", label: "Conserver le modèle puisque la pente est positive", correct: false, feedback: "Le signe de la pente ne garantit pas que la forme linéaire soit adaptée." },
        { id: "question", label: "Remettre en question la forme linéaire et examiner une autre spécification", correct: true, feedback: "Oui. Une structure dans les résidus indique que le modèle laisse une information systématique inexpliquée." },
        { id: "delete", label: "Supprimer automatiquement les points éloignés", correct: false, feedback: "Une observation ne se retire pas sans raison documentée. Il faut d’abord vérifier sa qualité et son influence." },
      ],
    },
  ],
  references: [
    { label: "Documentation officielle de lm()", url: "https://stat.ethz.ch/R-manual/R-devel/library/stats/html/lm.html" },
    { label: "Documentation officielle du jeu cars", url: "https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/cars.html" },
    { label: "Graphiques de diagnostic des modèles lm", url: "https://stat.ethz.ch/R-manual/R-devel/library/stats/html/plot.lm.html" },
  ],
} as const;

export const sessionFiveApplication = {
  title: "Réinvestir la régression sur les communes",
  duration: "55 minutes environ",
  objectives: [
    "importer dans R le GeoPackage déjà utilisé avec Magrit ;",
    "préparer deux variables communales en documentant les valeurs manquantes ;",
    "ajuster et diagnostiquer une régression portant sur des indicateurs agrégés ;",
    "distinguer résultat statistique communal et relation entre mutations individuelles.",
  ],
  question:
    "Les communes où la surface bâtie médiane des mutations est plus élevée présentent-elles aussi une valeur foncière médiane plus élevée ?",
  dataset: {
    file: "donnees_commune_mutation_76.gpkg",
    layer: "spatial",
    totalRows: 708,
    completeRows: 688,
    x: { name: "surface_reelle_bati_med", label: "surface réelle bâtie médiane", unit: "m²" },
    y: { name: "valeur_fonciere_med", label: "valeur foncière médiane", unit: "€" },
  },
  workflow: [
    {
      title: "Charger l’extension et choisir le fichier",
      code: "library(sf)\n\nchemin <- file.choose()\ncommunes_sf <- st_read(\n  chemin, layer = \"spatial\", quiet = TRUE\n)",
      instruction: "Sélectionnez le GeoPackage utilisé pendant la séance 2. La boîte de dialogue évite de supposer que tout le monde l’a enregistré au même endroit.",
    },
    {
      title: "Contrôler la couche importée",
      code: "nrow(communes_sf)\nnames(communes_sf)\nst_geometry_type(communes_sf)\nst_crs(communes_sf)",
      instruction: "Vous devez retrouver 708 lignes, une géométrie multipolygonale, l’identifiant id et les indicateurs de mutations foncières.",
    },
    {
      title: "Préparer la table d’analyse",
      code: "communes <- st_drop_geometry(communes_sf)\n\nvariables <- communes[c(\n  \"id\",\n  \"surface_reelle_bati_med\",\n  \"valeur_fonciere_med\"\n)]\n\nanalyse <- variables[complete.cases(variables), ]\nnrow(analyse)",
      instruction: "La géométrie reste disponible dans communes_sf, mais n’est pas nécessaire au calcul. complete.cases() conserve ici les communes renseignées pour les deux indicateurs : 688 lignes sont attendues.",
    },
    {
      title: "Observer avant de modéliser",
      code: "summary(analyse)\n\nplot(\n  valeur_fonciere_med ~ surface_reelle_bati_med,\n  data = analyse, pch = 19, col = \"#6d28d980\",\n  xlab = \"Surface bâtie médiane (m²)\",\n  ylab = \"Valeur foncière médiane (€)\"\n)",
      instruction: "Décrivez la forme du nuage et repérez les valeurs très élevées. Une valeur surprenante doit être vérifiée, pas supprimée automatiquement.",
    },
    {
      title: "Ajuster la régression communale",
      code: "modele_communes <- lm(\n  valeur_fonciere_med ~ surface_reelle_bati_med,\n  data = analyse\n)\n\nsummary(modele_communes)\ncor(\n  analyse$surface_reelle_bati_med,\n  analyse$valeur_fonciere_med\n)",
      instruction: "Comparez le signe de la pente à celui de la corrélation, puis examinez R². Ces trois résultats doivent raconter une histoire cohérente.",
    },
    {
      title: "Ajouter la droite et examiner les résidus",
      code: "abline(modele_communes, col = \"#ea580c\", lwd = 2)\n\nplot(modele_communes, which = 1)\nplot(modele_communes, which = 2)",
      instruction: "La droite donne un résumé global. Les graphiques de résidus permettent de vérifier si ce résumé masque une structure, une dispersion inégale ou des observations influentes.",
    },
  ],
  expected: [
    { label: "Communes analysées", value: "688", interpretation: "20 communes ne sont pas utilisées car au moins une des deux valeurs manque." },
    { label: "Corrélation", value: "r ≈ 0,12", interpretation: "L’association linéaire brute est positive mais faible." },
    { label: "Pente", value: "≈ 1 528 €/m²", interpretation: "Une hausse de 1 m² de la surface médiane est associée à environ 1 528 € de valeur médiane prédite supplémentaire, à l’échelle communale." },
    { label: "Qualité d’ajustement", value: "R² ≈ 0,015", interpretation: "La droite rend compte d’environ 1,5 % de la variabilité communale observée de la valeur médiane." },
  ],
  quiz: [
    {
      prompt: "Quelle est l’unité d’observation du modèle ajusté ici ?",
      answers: [
        { id: "commune", label: "La commune", correct: true, feedback: "Oui. Chaque ligne associe deux indicateurs agrégés pour une commune." },
        { id: "mutation", label: "Une mutation immobilière", correct: false, feedback: "Les mutations ont été agrégées avant l’analyse. Le modèle ne contient pas une ligne par mutation." },
        { id: "building", label: "Un bâtiment", correct: false, feedback: "La surface bâtie est résumée par commune ; les bâtiments individuels ne sont pas les observations du modèle." },
      ],
    },
    {
      prompt: "R² vaut environ 0,015. Quelle conclusion est la plus adaptée ?",
      answers: [
        { id: "weak", label: "La relation linéaire brute rend compte d’une faible part de la variabilité communale", correct: true, feedback: "Oui. La surface bâtie médiane seule résume très peu les différences de valeur médiane entre communes." },
        { id: "none", label: "La surface bâtie n’a absolument aucun lien possible avec la valeur", correct: false, feedback: "Ce modèle ne met pas en évidence une relation linéaire forte entre ces deux résumés communaux ; il ne permet pas d’exclure toute relation." },
        { id: "error", label: "Le modèle est faux parce que R² n’est pas proche de 1", correct: false, feedback: "Un faible R² est un résultat à interpréter, pas une erreur de calcul automatique." },
      ],
    },
    {
      prompt: "Peut-on conclure que les logements plus grands se vendent individuellement plus cher ?",
      answers: [
        { id: "yes", label: "Oui, puisque la pente communale est positive", correct: false, feedback: "Le modèle relie des médianes communales. Il ne décrit pas directement les couples surface–valeur de chaque mutation." },
        { id: "aggregate", label: "Non : il faudrait analyser les mutations individuelles pour répondre à cette question", correct: true, feedback: "Oui. Passer d’une association entre groupes à une conclusion sur les individus constituerait une erreur écologique." },
        { id: "r2", label: "Oui, mais seulement lorsque R² dépasse 0,5", correct: false, feedback: "Même un R² élevé sur des données agrégées ne suffirait pas à établir la relation individuelle ou une causalité." },
      ],
    },
    {
      prompt: "Une commune présente une valeur médiane extrêmement élevée. Que faire en premier ?",
      answers: [
        { id: "delete", label: "La supprimer pour améliorer R²", correct: false, feedback: "Améliorer artificiellement un indicateur n’est pas une justification de suppression." },
        { id: "check", label: "Vérifier la valeur, sa source et les règles d’agrégation", correct: true, feedback: "Oui. Il faut distinguer erreur, cas réel et conséquence d’un faible nombre de mutations avant toute décision." },
        { id: "replace", label: "La remplacer par la moyenne des autres communes", correct: false, feedback: "Cette modification inventerait une donnée et réduirait artificiellement la dispersion." },
      ],
    },
  ],
  bonus: [
    {
      title: "Comparer avec la surface du terrain",
      code: "modele_terrain <- lm(\n  valeur_fonciere_med ~ surface_terrain_med,\n  data = communes\n)\nsummary(modele_terrain)",
      prompt: "Le signe, la force de la relation et les diagnostics changent-ils ? Comparez sans décider qu’un modèle est meilleur à partir du seul R².",
    },
    {
      title: "Tester une transformation logarithmique",
      code: "analyse_positive <- subset(\n  analyse, valeur_fonciere_med > 0 &\n    surface_reelle_bati_med > 0\n)\nmodele_log <- lm(\n  log10(valeur_fonciere_med) ~\n    log10(surface_reelle_bati_med),\n  data = analyse_positive\n)\nplot(modele_log, which = 1)\nsummary(modele_log)",
      prompt: "La transformation modifie-t-elle la forme du nuage et la structure des résidus ? L’interprétation des coefficients n’est plus la même et devra être explicitée.",
    },
    {
      title: "Retrouver les communes les plus influentes",
      code: "analyse$residu_standardise <- rstandard(modele_communes)\nanalyse[\n  order(abs(analyse$residu_standardise),\n        decreasing = TRUE),\n][1:5, ]",
      prompt: "Documentez les communes repérées et proposez une vérification. Un grand résidu ne prouve pas une erreur.",
    },
  ],
  references: [
    { label: "Lire un GeoPackage avec sf::st_read()", url: "https://r-spatial.github.io/sf/reference/st_read.html" },
    { label: "Retirer temporairement la géométrie avec st_drop_geometry()", url: "https://r-spatial.github.io/sf/reference/st_geometry.html" },
  ],
} as const;

export const sessionFiveAnova = {
  title: "Comparer plusieurs groupes avec une ANOVA",
  duration: "55 minutes environ",
  objectives: [
    "distinguer la variable quantitative réponse du facteur qui définit les groupes ;",
    "construire et documenter des classes à partir d’un indicateur communal ;",
    "réaliser une ANOVA à un facteur dans R et mesurer la taille de l’effet ;",
    "vérifier les conditions d’interprétation avant les comparaisons deux à deux.",
  ],
  question:
    "La surface bâtie médiane des mutations diffère-t-elle selon la classe de nombre médian de pièces principales des communes ?",
  groups: [
    { label: "0 déclaré", rule: "médiane = 0", count: 80, mean: "92,9 m²" },
    { label: "1–2 pièces", rule: "0 < médiane ≤ 2", count: 148, mean: "88,5 m²" },
    { label: "3–4 pièces", rule: "2 < médiane ≤ 4", count: 394, mean: "98,7 m²" },
    { label: "5 pièces ou +", rule: "médiane > 4", count: 66, mean: "122,4 m²" },
  ],
  workflow: [
    {
      title: "Reprendre la table communale",
      code: "library(sf)\n\nchemin <- file.choose()\ncommunes_sf <- st_read(\n  chemin, layer = \"spatial\", quiet = TRUE\n)\ncommunes <- st_drop_geometry(communes_sf)",
      instruction: "Sélectionnez le GeoPackage de la séance 2, puis retirez temporairement la géométrie pour l’analyse statistique.",
    },
    {
      title: "Conserver les deux indicateurs utiles",
      code: "analyse_anova <- communes[c(\n  \"id\",\n  \"nombre_pieces_principales_med\",\n  \"surface_reelle_bati_med\"\n)]\n\nanalyse_anova <- analyse_anova[\n  complete.cases(analyse_anova),\n]\nnrow(analyse_anova)",
      instruction: "Les deux variables sont renseignées pour 688 communes. Gardez l’identifiant pour pouvoir revenir aux observations si nécessaire.",
    },
    {
      title: "Construire le facteur",
      code: "stopifnot(\n  all(analyse_anova$nombre_pieces_principales_med >= 0)\n)\n\nanalyse_anova$classe_pieces <- cut(\n  analyse_anova$nombre_pieces_principales_med,\n  breaks = c(-Inf, 0, 2, 4, Inf),\n  labels = c(\"0 déclaré\", \"1–2\", \"3–4\", \"5 ou +\")\n)\n\ntable(analyse_anova$classe_pieces)",
      instruction: "Les seuils regroupent les niveaux rares et évitent des groupes minuscules. Ils constituent un choix pédagogique, pas une nomenclature officielle.",
    },
    {
      title: "Comparer graphiquement les distributions",
      code: "boxplot(\n  surface_reelle_bati_med ~ classe_pieces,\n  data = analyse_anova,\n  xlab = \"Classe du nombre médian de pièces\",\n  ylab = \"Surface bâtie médiane (m²)\",\n  col = \"#dbeafe\"\n)\n\naggregate(\n  surface_reelle_bati_med ~ classe_pieces,\n  data = analyse_anova,\n  FUN = mean\n)",
      instruction: "Comparez les centres, la dispersion, le recouvrement des groupes et les valeurs atypiques avant de lancer le test.",
    },
    {
      title: "Ajuster l’ANOVA à un facteur",
      code: "modele_anova <- aov(\n  surface_reelle_bati_med ~ classe_pieces,\n  data = analyse_anova\n)\nsummary(modele_anova)",
      instruction: "L’hypothèse nulle affirme que les quatre moyennes de surface bâtie médiane sont égales. Le test F évalue l’écart entre groupes relativement à la variabilité interne aux groupes.",
    },
    {
      title: "Calculer une taille d’effet",
      code: "table_anova <- summary(modele_anova)[[1]]\neta2 <- table_anova[\"classe_pieces\", \"Sum Sq\"] /\n  sum(table_anova[, \"Sum Sq\"])\neta2",
      instruction: "La p-valeur répond à une question de compatibilité avec l’hypothèse nulle ; η² décrit la part de variabilité associée aux groupes dans ces données.",
    },
  ],
  expected: [
    { label: "Effectif analysé", value: "688 communes", interpretation: "Les groupes sont déséquilibrés : de 66 à 394 communes." },
    { label: "Statistique globale", value: "F ≈ 31,2", interpretation: "La variabilité entre les moyennes de groupes est importante relativement à la variabilité interne." },
    { label: "Test global", value: "p < 2 × 10⁻¹⁶", interpretation: "Les données sont très peu compatibles avec l’égalité exacte des quatre moyennes sous les hypothèses du test." },
    { label: "Taille d’effet", value: "η² ≈ 0,12", interpretation: "Environ 12 % de la variabilité observée de la surface médiane est associée aux quatre classes construites." },
  ],
  diagnostics: [
    {
      title: "Forme des résidus",
      code: "plot(modele_anova, which = 2)",
      question: "Le graphique quantile-quantile montre-t-il des écarts importants, notamment dans les extrémités ?",
    },
    {
      title: "Homogénéité des variances",
      code: "plot(modele_anova, which = 1)\nfligner.test(\n  surface_reelle_bati_med ~ classe_pieces,\n  data = analyse_anova\n)",
      question: "La dispersion semble-t-elle comparable entre groupes ? Le test de Fligner-Killeen complète le graphique sans remplacer son examen.",
    },
    {
      title: "Indépendance des observations",
      code: "# À discuter à partir de la carte :\n# des communes voisines sont-elles vraiment indépendantes ?",
      question: "La proximité spatiale pourrait-elle produire des ressemblances entre communes voisines et fragiliser l’hypothèse d’indépendance ?",
    },
  ],
  quiz: [
    {
      prompt: "Dans cette ANOVA, quelles sont la réponse et le facteur ?",
      answers: [
        { id: "right", label: "La surface bâtie médiane est la réponse ; la classe de pièces est le facteur", correct: true, feedback: "Oui. On compare la moyenne d’une variable quantitative entre les niveaux d’un facteur." },
        { id: "reverse", label: "La classe de pièces est la réponse ; la surface est le facteur", correct: false, feedback: "Une ANOVA à un facteur compare ici une mesure quantitative entre plusieurs groupes." },
        { id: "id", label: "L’identifiant communal est le facteur", correct: false, feedback: "id sert à retrouver une commune, pas à constituer des groupes comparables." },
      ],
    },
    {
      prompt: "Le test global est significatif. Que sait-on immédiatement ?",
      answers: [
        { id: "all", label: "Toutes les paires de groupes diffèrent", correct: false, feedback: "Le test global n’identifie pas les groupes concernés et n’affirme pas que toutes les paires diffèrent." },
        { id: "one", label: "Au moins une moyenne diffère des autres, sous les hypothèses du modèle", correct: true, feedback: "Oui. Des comparaisons post-hoc sont nécessaires pour localiser plus précisément les différences." },
        { id: "cause", label: "Le nombre de pièces cause les différences de surface", correct: false, feedback: "Le test met en évidence une association entre groupes construits ; il ne démontre pas un mécanisme causal." },
      ],
    },
    {
      prompt: "Pourquoi ne pas découper les classes jusqu’à obtenir la p-valeur souhaitée ?",
      answers: [
        { id: "transparent", label: "Parce que les seuils doivent être justifiés avant le test et leur effet sur les résultats doit rester transparent", correct: true, feedback: "Oui. Modifier les groupes en fonction du résultat favoriserait une conclusion artificielle et difficilement reproductible." },
        { id: "forbidden", label: "Parce que R interdit de créer un facteur à partir d’une variable numérique", correct: false, feedback: "R le permet avec cut(), mais la pertinence scientifique du découpage doit être défendue." },
        { id: "balanced", label: "Parce que tous les groupes doivent obligatoirement avoir le même effectif", correct: false, feedback: "Un équilibre parfait n’est pas obligatoire, mais un fort déséquilibre demande davantage de prudence." },
      ],
    },
    {
      prompt: "Que signifie η² ≈ 0,12 ici ?",
      answers: [
        { id: "variance", label: "Environ 12 % de la variabilité observée est associée aux quatre classes", correct: true, feedback: "Oui, dans ce jeu de données et avec ce découpage précis." },
        { id: "correct", label: "12 % des communes sont correctement classées", correct: false, feedback: "η² est une proportion de variabilité, pas un taux de classement." },
        { id: "cause", label: "Les pièces causent exactement 12 % de la surface", correct: false, feedback: "Une taille d’effet descriptive ne mesure pas une part de causalité." },
      ],
    },
  ],
  postHoc: {
    code: "comparaisons <- TukeyHSD(\n  modele_anova, \"classe_pieces\"\n)\ncomparaisons\nplot(comparaisons)",
    instruction: "Utilisez ces comparaisons seulement après le test global et l’examen des hypothèses. Lisez la différence estimée, son intervalle et la p-valeur ajustée ; ne conservez pas uniquement les lignes significatives.",
  },
  bonusRegression: {
    title: "Pourquoi la régression précédente racontait peu de choses",
    text: "La relation entre surface bâtie médiane et valeur foncière médiane reste disponible comme contre-exemple utile : un modèle peut être correctement calculé et pourtant peu informatif.",
  },
  references: [
    { label: "Documentation officielle de aov()", url: "https://stat.ethz.ch/R-manual/R-devel/library/stats/html/aov.html" },
    { label: "Comparaisons multiples avec TukeyHSD()", url: "https://stat.ethz.ch/R-manual/R-devel/library/stats/html/TukeyHSD.html" },
    { label: "Test de Fligner-Killeen", url: "https://stat.ethz.ch/R-manual/R-devel/library/stats/html/fligner.test.html" },
  ],
} as const;

export const sessionFiveSpatial = {
  title: "Mesurer l’autocorrélation spatiale",
  duration: "50 minutes environ",
  objectives: [
    "construire un voisinage communal par contiguïté et en expliciter la règle ;",
    "transformer ce voisinage en poids spatiaux standardisés ;",
    "calculer et interpréter un indice global de Moran par permutations ;",
    "distinguer une structure spatiale globale de regroupements locaux.",
  ],
  question: "Les communes proches géographiquement présentent-elles des surfaces bâties médianes plus semblables que ce que produirait une répartition aléatoire des valeurs ?",
  concepts: [
    { title: "Voisinage", text: "Deux communes sont voisines si leurs polygones partagent au moins un point de frontière dans la définition principale retenue ici." },
    { title: "Poids spatiaux", text: "La matrice de poids traduit cette relation : chaque commune est reliée à ses voisines, puis les poids sont standardisés par ligne." },
    { title: "Décalage spatial", text: "Pour une commune, le décalage spatial résume les valeurs observées dans son voisinage selon les poids choisis." },
    { title: "Indice de Moran", text: "Il compare les écarts à la moyenne d’une commune à ceux de ses voisines pour mesurer une ressemblance spatiale globale." },
  ],
  workflow: [
    {
      title: "Préparer les communes analysées",
      code: "library(sf)\nlibrary(spdep)\n\nchemin <- file.choose()\ncommunes_sf <- st_read(\n  chemin, layer = \"spatial\", quiet = TRUE\n)\n\ncommunes_spatiales <- communes_sf[\n  complete.cases(\n    communes_sf$surface_reelle_bati_med,\n    communes_sf$nombre_pieces_principales_med\n  ),\n]\ncommunes_spatiales <- st_transform(\n  st_make_valid(communes_spatiales), 2154\n)\nnrow(communes_spatiales)",
      instruction: "Vous retrouvez les 688 communes de l’ANOVA. Le graphe de voisinage portera donc sur ces seules communes ; la projection Lambert-93 convient aux opérations réalisées ici en France métropolitaine.",
    },
    {
      title: "Définir les voisines par contiguïté",
      code: "voisines <- poly2nb(\n  communes_spatiales,\n  row.names = communes_spatiales$id,\n  queen = TRUE\n)\n\nsummary(voisines)\ntable(card(voisines))\ncommunes_spatiales$id[card(voisines) == 0]",
      instruction: "Avec queen = TRUE, un point de contact suffit. Vérifiez le nombre de voisines et recherchez les communes isolées avant de calculer l’indice.",
    },
    {
      title: "Dessiner le graphe de voisinage",
      code: "centres <- st_coordinates(\n  st_point_on_surface(st_geometry(communes_spatiales))\n)\n\nplot(st_geometry(communes_spatiales),\n  border = \"#94a3b8\", col = \"white\")\nplot(voisines, centres, add = TRUE,\n  col = \"#6d28d9\", lwd = 0.5, pch = 19, cex = 0.3)",
      instruction: "Le graphe rend la matrice de voisinage visible. Repérez les zones très connectées, les effets de bord et les liaisons qui vous semblent surprenantes.",
    },
    {
      title: "Construire les poids spatiaux",
      code: "poids <- nb2listw(\n  voisines, style = \"W\", zero.policy = TRUE\n)\npoids",
      instruction: "Le style W standardise chaque ligne : pour une commune non isolée, la somme des poids accordés à ses voisines vaut 1. zero.policy traite explicitement d’éventuelles communes sans voisine.",
    },
    {
      title: "Observer le diagramme de Moran",
      code: "x <- communes_spatiales$surface_reelle_bati_med\n\nmoran.plot(\n  x, poids, zero.policy = TRUE,\n  labels = communes_spatiales$id,\n  xlab = \"Surface bâtie médiane\",\n  ylab = \"Décalage spatial\"\n)",
      instruction: "Les quadrants opposent valeurs fortes entourées de fortes, faibles entourées de faibles et discordances locales. Ce graphique reste exploratoire.",
    },
    {
      title: "Tester l’indice par permutations",
      code: "set.seed(2026)\n\nmoran_global <- moran.mc(\n  x, poids, nsim = 999,\n  alternative = \"two.sided\",\n  zero.policy = TRUE\n)\nmoran_global\nplot(moran_global)",
      instruction: "Les permutations redistribuent les valeurs entre les communes tout en conservant le voisinage. Comparez l’indice observé à cette distribution de référence.",
    },
  ],
  readingGuide: [
    { sign: "I > 0", title: "Ressemblance spatiale", text: "Les valeurs proches tendent à se trouver près les unes des autres : fortes avec fortes et faibles avec faibles." },
    { sign: "I ≈ 0", title: "Pas de structure globale nette", text: "La configuration ressemble davantage à une répartition spatiale aléatoire pour le voisinage choisi." },
    { sign: "I < 0", title: "Contraste spatial", text: "Des communes voisines tendent à porter des valeurs différentes, comme dans une organisation en damier." },
  ],
  resultTrace: "« Avec un voisinage de contiguïté de type queen et des poids standardisés par ligne, l’indice global de Moran vaut… La p-valeur par 999 permutations vaut… Ces résultats indiquent… pour la surface bâtie médiane des communes analysées. Ils ne localisent pas, à eux seuls, les regroupements. »",
  quiz: [
    {
      prompt: "Pourquoi faut-il annoncer la définition du voisinage avec le résultat ?",
      answers: [
        { id: "depends", label: "Parce que l’indice dépend des relations spatiales retenues", correct: true, feedback: "Oui. Modifier la définition des voisines peut modifier les poids, puis l’indice et son interprétation." },
        { id: "cosmetic", label: "Uniquement pour rendre la carte plus jolie", correct: false, feedback: "Le voisinage entre dans le calcul ; il ne s’agit pas d’un choix graphique." },
        { id: "same", label: "Ce n’est pas nécessaire : tous les voisinages donnent le même indice", correct: false, feedback: "Des matrices de poids différentes peuvent conduire à des résultats différents." },
      ],
    },
    {
      prompt: "Que suggèrent un I positif et une faible p-valeur de permutation ?",
      answers: [
        { id: "cluster", label: "Une ressemblance spatiale globale plus marquée qu’attendu sous permutation", correct: true, feedback: "Oui, pour la variable, les communes et le voisinage étudiés." },
        { id: "cause", label: "La proximité géographique cause les valeurs observées", correct: false, feedback: "Une autocorrélation décrit une organisation spatiale ; elle ne démontre pas un mécanisme causal." },
        { id: "local", label: "Toutes les communes appartiennent à un regroupement significatif", correct: false, feedback: "L’indice global ne localise pas les regroupements et ne teste pas chaque commune." },
      ],
    },
    {
      prompt: "À quoi sert set.seed(2026) avant moran.mc() ?",
      answers: [
        { id: "repeat", label: "À rendre la simulation reproductible", correct: true, feedback: "Oui. Les mêmes permutations aléatoires pourront être retrouvées." },
        { id: "increase", label: "À augmenter l’indice de Moran", correct: false, feedback: "La graine contrôle le tirage pseudo-aléatoire, pas la valeur observée de l’indice." },
        { id: "neighbors", label: "À déterminer quelles communes sont voisines", correct: false, feedback: "Les voisines sont définies par poly2nb(), indépendamment de la graine." },
      ],
    },
    {
      prompt: "Quel point devient crucial si l’on calcule un Moran local pour chaque commune ?",
      answers: [
        { id: "multiple", label: "Le grand nombre de tests et l’ajustement des p-valeurs", correct: true, feedback: "Oui. Multiplier les tests augmente le risque de repérer des résultats extrêmes par hasard." },
        { id: "causal", label: "Chaque regroupement devient automatiquement causal", correct: false, feedback: "Un indicateur local reste descriptif et dépend du voisinage choisi." },
        { id: "matrix", label: "La matrice de poids n’a plus d’importance", correct: false, feedback: "Les indicateurs locaux reposent eux aussi sur les relations de voisinage." },
      ],
    },
  ],
  localBonus: {
    code: "set.seed(2026)\nmoran_local <- localmoran_perm(\n  x, poids, nsim = 999,\n  alternative = \"two.sided\",\n  zero.policy = TRUE, iseed = 2026\n)\n\ncommunes_spatiales$Ii <- moran_local[, \"Ii\"]\ncommunes_spatiales$p_ajustee <- p.adjust(\n  moran_local[, \"Pr(folded) Sim\"],\n  method = \"BH\"\n)\nplot(communes_spatiales[\"Ii\"])",
    warning: "Une carte de Ii seule ne suffit pas. Croisez le signe de l’indicateur, le quadrant du diagramme de Moran, la valeur d’origine et la p-valeur ajustée ; documentez aussi les choix de voisinage.",
  },
  residualBonus: {
    code: "communes_spatiales$classe_pieces <- cut(\n  communes_spatiales$nombre_pieces_principales_med,\n  breaks = c(-Inf, 0, 2, 4, Inf),\n  labels = c(\"0 déclaré\", \"1–2\", \"3–4\", \"5 ou +\")\n)\nmodele_anova_spatial <- aov(\n  surface_reelle_bati_med ~ classe_pieces,\n  data = communes_spatiales\n)\n\nset.seed(2026)\nmoran.mc(\n  residuals(modele_anova_spatial), poids,\n  nsim = 999, alternative = \"two.sided\",\n  zero.policy = TRUE\n)",
    question: "Les résidus restent-ils spatialement structurés après la prise en compte des classes ? Si oui, que devient l’hypothèse d’indépendance de l’ANOVA ?",
  },
  references: [
    { label: "Construire un voisinage avec poly2nb()", url: "https://r-spatial.github.io/spdep/reference/poly2nb.html" },
    { label: "Créer des poids avec nb2listw()", url: "https://r-spatial.github.io/spdep/reference/nb2listw.html" },
    { label: "Test de Moran par permutations avec moran.mc()", url: "https://r-spatial.github.io/spdep/reference/moran.mc.html" },
    { label: "Indicateurs locaux avec localmoran()", url: "https://r-spatial.github.io/spdep/reference/localmoran.html" },
  ],
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
  firstGestures: [
    {
      label: "Déplier un panneau",
      action: "Cliquez sur le titre « Import des données », puis sur « Gestion des couches ».",
      purpose: "Les panneaux du menu latéral organisent les étapes du travail. Vous pouvez les ouvrir et les refermer sans modifier les données.",
    },
    {
      label: "Lire avant d’agir",
      action: "Ouvrez la fenêtre d’import et repérez les formats proposés, puis fermez-la sans sélectionner de fichier.",
      purpose: "Cette première visite permet de distinguer une commande, une fenêtre de réglage et le résultat visible sur la carte.",
    },
    {
      label: "Revenir à la vue d’ensemble",
      action: "Repérez les commandes de navigation placées sous la carte, sans chercher à mémoriser toutes les icônes.",
      purpose: "Après un zoom ou un déplacement, la commande de recentrage permet de retrouver l’ensemble du territoire affiché.",
    },
    {
      label: "Sauvegarder au bon moment",
      action: "Repérez l’icône d’enregistrement dans la barre supérieure. Vous l’utiliserez après l’import.",
      purpose: "Enregistrer un projet Magrit conserve un état de travail ; exporter une carte produit un document final. Ce ne sont pas les mêmes opérations.",
    },
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
      text: "Dans la fenêtre d’import, vérifiez le nom de la couche proposée. Relevez, lorsqu’ils sont affichés, le nombre d’entités, le type de géométrie et le système de coordonnées de référence (SCR).",
    },
    {
      title: "Validez et observez la carte",
      text: "Lancez l’import, puis attendez que les communes remplacent le planisphère. Un affichage cartographique confirme que la géométrie a été reconnue ; il ne suffit pas encore à valider les attributs.",
    },
    {
      title: "Retrouvez la couche",
      text: "Dépliez « Gestion des couches ». Vérifiez que la couche communale est listée et repérez la commande qui permet d’ouvrir ses données attributaires.",
    },
    {
      title: "Ouvrez le tableau",
      text: "Dans le tableau de données, repérez les lignes, les noms de colonnes et la colonne id. Faites défiler horizontalement si nécessaire, sans choisir encore de représentation.",
    },
  ],
  readingGuide: [
    { term: "Entité", definition: "un objet géographique ; ici, une commune." },
    { term: "Géométrie", definition: "la forme et la position de l’objet ; ici, un polygone communal." },
    { term: "Attribut", definition: "une information décrivant l’objet, rangée dans une colonne du tableau." },
    { term: "Couche", definition: "l’ensemble des entités géographiques et de leurs attributs." },
    { term: "SCR", definition: "le système qui permet de situer correctement les géométries dans l’espace." },
  ],
  verificationItems: [
    "Je vois la couche spatiale dans le gestionnaire.",
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
    "finaliser une carte lisible, correctement légendée et documentée.",
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
  finalMap: {
    introduction:
      "Reprenez la carte de la valeur foncière médiane et préparez-la pour une personne qui ne connaît ni le fichier ni la consigne. Une carte propre n’est pas nécessairement sophistiquée : chaque élément doit aider à comprendre ou à vérifier le message.",
    checks: [
      {
        category: "Message",
        label: "Le titre indique le phénomène, la mesure résumée et le territoire, sans annoncer une conclusion.",
      },
      {
        category: "Légende",
        label: "La légende nomme la variable, précise l’unité (€) et présente les classes dans un ordre logique.",
      },
      {
        category: "Sémiologie",
        label: "La palette est ordonnée, les contrastes restent lisibles et les valeurs manquantes ne ressemblent pas aux valeurs faibles.",
      },
      {
        category: "Repérage",
        label: "Une échelle graphique est présente et lisible ; l’orientation reste immédiatement compréhensible.",
      },
      {
        category: "Traçabilité",
        label: "Les sources des données, leur millésime connu et la mention de préparation sont indiqués sans inventer la période couverte.",
      },
      {
        category: "Responsabilité",
        label: "Le nom de l’auteur ou de l’autrice et la date de réalisation figurent sur la carte.",
      },
      {
        category: "Composition",
        label: "La carte, le titre et la légende sont hiérarchisés, alignés et suffisamment espacés ; aucun élément ne se chevauche.",
      },
      {
        category: "Export",
        label: "Le fichier exporté s’ouvre correctement et les textes restent lisibles à la taille prévue pour le rendu.",
      },
    ],
    peerReview:
      "Échangez votre carte avec un binôme pendant une minute. Sans explication orale, la personne doit pouvoir dire : quel phénomène est représenté, où, avec quelle unité et d’après quelles sources. Corrigez ensuite un seul élément prioritaire.",
    bonus: [
      "Allégez les éléments secondaires et renforcez la hiérarchie entre titre, carte, légende et sources.",
      "Testez la lisibilité en niveaux de gris ou avec un simulateur de déficience de vision des couleurs.",
      "Ajoutez un petit repère de localisation seulement s’il aide réellement une personne qui connaît mal la Seine-Maritime.",
      "Comparez deux formats ou résolutions d’export et choisissez celui qui convient au support prévu.",
    ],
  },
} as const;
