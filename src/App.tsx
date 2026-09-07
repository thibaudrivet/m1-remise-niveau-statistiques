import { useEffect, useState } from "react";
import { course, magritApplication, magritIntroduction, sessionFiveAnova, sessionFiveApplication, sessionFiveBasics, sessionFiveRegression, sessionFiveRelations, sessionFiveSpatial, sessionTwo } from "./content";

type Choice = "areas" | "symbols";
type DataKind = "stock" | "ratio";
type InterfaceZone = "topbar" | "sidebar" | "canvas";
type RelationPattern = "positive" | "negative" | "none";
type BonusContent = {
  title: string;
  introduction: string;
  challenges: readonly {
    id: string;
    label: string;
    title: string;
    prompt: string;
    tasks: readonly string[];
    answer: string;
    hint: string;
  }[];
  sharePrompt: string;
};

const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView();

const territories = [
  { d: "M10 14 L94 8 L105 70 L68 100 L12 78 Z", cx: 57, cy: 51, value: 18, fill: "#dbeafe" },
  { d: "M109 8 L183 17 L180 90 L110 69 Z", cx: 145, cy: 47, value: 50, fill: "#60a5fa" },
  { d: "M12 83 L68 105 L88 177 L14 183 Z", cx: 50, cy: 138, value: 34, fill: "#93c5fd" },
  { d: "M72 104 L110 74 L180 94 L173 179 L92 178 Z", cx: 130, cy: 133, value: 72, fill: "#1d4ed8" },
];

function MiniMap({ mode }: { mode: Choice }) {
  return (
    <svg viewBox="0 0 195 195" role="img" aria-label={mode === "areas" ? "Carte fictive en plages de couleurs" : "Carte fictive en symboles proportionnels"} className="mini-map">
      {territories.map((territory, index) => (
        <path key={index} d={territory.d} fill={mode === "areas" ? territory.fill : "#e8eef5"} stroke="#17324d" strokeWidth="2" />
      ))}
      {mode === "symbols" && territories.map((territory, index) => (
        <circle key={index} cx={territory.cx} cy={territory.cy} r={Math.sqrt(territory.value) * 2.2} fill="#f97316" fillOpacity="0.74" stroke="#9a3412" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

function BonusSection({ id, bonus }: { id: string; bonus: BonusContent }) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className="bonus-section" aria-labelledby={titleId}>
      <p className="eyebrow">Facultatif · Pour aller plus loin</p>
      <h2 id={titleId}>{bonus.title}</h2>
      <p className="lead">{bonus.introduction}</p>
      <div className="bonus-grid">
        {bonus.challenges.map((challenge) => (
          <article className="bonus-card" key={challenge.id}>
            <p className="bonus-label">{challenge.label}</p>
            <h3>{challenge.title}</h3>
            <p>{challenge.prompt}</p>
            <ul>{challenge.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            <p className="bonus-answer"><strong>Votre trace :</strong> {challenge.answer}</p>
            <details>
              <summary>Besoin d’une piste ?</summary>
              <p>{challenge.hint}</p>
            </details>
          </article>
        ))}
      </div>
      <div className="bonus-share"><span aria-hidden="true">?</span><div><strong>À partager si le temps le permet</strong><p>{bonus.sharePrompt}</p></div></div>
    </section>
  );
}

function Home() {
  return (
    <main className="home-shell">
      <div className="home-heading">
        <p className="eyebrow">Supports étudiants</p>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </div>
      <div className="session-grid">
        <a className="session-card available" href="#/seance-2">
          <span className="session-number">02</span>
          <div><p>3 heures</p><h2>{sessionTwo.title}</h2><span>Commencer le parcours →</span></div>
        </a>
        <a className="session-card available" href="#/seance-5">
          <span className="session-number">05</span>
          <div><p>3 heures</p><h2>{sessionFiveBasics.title}</h2><span>Commencer les rappels →</span></div>
        </a>
      </div>
    </main>
  );
}

function SessionFiveBasics() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const correctAnswers = sessionFiveBasics.quiz.filter((question, index) => question.answers.find((answer) => answer.id === answers[index])?.correct).length;
  const quizComplete = correctAnswers === sessionFiveBasics.quiz.length;
  const progress = 25 + correctAnswers * 25;

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">∿</span><span>Relations quantitatives</span></a><span className="duration">◷ {sessionFiveBasics.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/" className="back-link">← Toutes les séances</a>
          <p className="eyebrow">Séance {sessionFiveBasics.number} · Rappels</p>
          <h1>{sessionFiveBasics.pageTitle}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire">
            <button type="button" onClick={() => scrollToSection("stats-objectifs")}>1. Objectifs</button>
            <button type="button" onClick={() => scrollToSection("stats-vocabulaire")}>2. Vocabulaire</button>
            <button type="button" onClick={() => scrollToSection("stats-mesures")}>3. Mesures</button>
            <button type="button" onClick={() => scrollToSection("stats-controle")}>4. Point de contrôle</button>
          </nav>
        </aside>

        <div className="lesson-content">
          <section id="stats-objectifs" className="content-card stats-hero">
            <p className="eyebrow">Votre cap</p>
            <h2>Retrouver les bons mots avant de calculer</h2>
            <p className="lead">Ces rappels servent de vocabulaire commun pour la suite. L’objectif n’est pas de réciter des formules, mais de savoir ce que résume chaque mesure et d’en contrôler l’ordre de grandeur.</p>
            <ul className="objectives">{sessionFiveBasics.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
            <p className="privacy-note"><span aria-hidden="true">◇</span><span><strong>Autocorrection formative.</strong> Vos réponses restent dans cette page et ne sont ni envoyées ni enregistrées.</span></p>
          </section>

          <section id="stats-vocabulaire">
            <p className="eyebrow">01 · Vocabulaire</p>
            <h2>De qui parle-t-on, et qu’observe-t-on ?</h2>
            <p className="lead">Pour chaque étude, commencez par nommer l’unité observée et la caractéristique mesurée. Une variable n’existe pas indépendamment des individus sur lesquels elle est renseignée.</p>
            <div className="stats-vocabulary-grid">{sessionFiveBasics.vocabulary.map((item) => <article key={item.term}><h3>{item.term}</h3><p>{item.definition}</p><small><strong>Exemple :</strong> {item.example}</small></article>)}</div>
            <details><summary>Variable quantitative ou qualitative ?</summary><p>Une variable <strong>quantitative</strong> prend des valeurs numériques sur lesquelles des opérations comme une différence ont un sens. Une variable <strong>qualitative</strong> décrit des catégories, même lorsque celles-ci sont codées par des nombres. Un code postal reste par exemple qualitatif.</p></details>
          </section>

          <section id="stats-mesures">
            <p className="eyebrow">02 · Position et dispersion</p>
            <h2>Un même exemple, cinq résumés</h2>
            <p className="lead">Considérez la série ordonnée suivante. Les valeurs sont volontairement simples afin de concentrer l’attention sur le sens des indicateurs.</p>
            <div className="number-strip" aria-label={`Série de valeurs : ${sessionFiveBasics.example.values.join(", ")}`}>{sessionFiveBasics.example.values.map((value, index) => <span key={`${value}-${index}`}>{value}</span>)}</div>
            <dl className="measure-results">
              <div><dt>Moyenne</dt><dd>{sessionFiveBasics.example.mean}</dd></div>
              <div><dt>Médiane</dt><dd>{sessionFiveBasics.example.median}</dd></div>
              <div><dt>Étendue</dt><dd>{sessionFiveBasics.example.range}</dd></div>
              <div><dt>Variance descriptive</dt><dd>{sessionFiveBasics.example.variance}</dd></div>
              <div><dt>Écart-type</dt><dd>{sessionFiveBasics.example.standardDeviation}</dd></div>
            </dl>
            <div className="measure-grid">{sessionFiveBasics.measures.map((measure) => <article key={measure.name}><span>{measure.symbol}</span><h3>{measure.name}</h3><p>{measure.role}</p><small>{measure.reading}</small><p className="measure-warning"><strong>Attention :</strong> {measure.warning}</p></article>)}</div>
            <details><summary>Voir le calcul de la variance et de l’écart-type</summary><p>La moyenne vaut 5. Les écarts à la moyenne sont −3, −1, −1, 0, 0, 1 et 4 ; leurs carrés ont pour somme 28. Pour décrire cette série complète, la variance vaut donc <code>28 ÷ 7 = 4</code>, puis l’écart-type vaut <code>√4 = 2</code>.</p></details>
            <details><summary>Pourquoi certains logiciels divisent-ils par n − 1 ?</summary><p>Pour décrire exactement les valeurs observées, on peut diviser par <code>n</code>. Lorsqu’un échantillon sert à estimer la variance d’une population plus large, de nombreux logiciels utilisent la variance corrigée et divisent par <code>n − 1</code>. Il faut donc identifier la convention employée avant de comparer deux résultats.</p></details>
            <div className="note"><strong>Contrôle rapide.</strong> La moyenne et la médiane doivent rester comprises entre le minimum et le maximum. La variance et l’écart-type ne peuvent pas être négatifs ; si toutes les valeurs sont égales, ils valent zéro.</div>
          </section>

          <section id="stats-controle">
            <p className="eyebrow">03 · Point de contrôle</p>
            <h2>Vérifier le sens avant la formule</h2>
            <p className="lead">Choisissez une réponse pour chaque situation. Vous pouvez revenir sur vos choix autant de fois que nécessaire.</p>
            <div className="stats-quiz">{sessionFiveBasics.quiz.map((question, index) => {
              const selected = question.answers.find((answer) => answer.id === answers[index]);
              return <article key={question.prompt}><h3>{question.prompt}</h3><div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setAnswers({ ...answers, [index]: answer.id })} className={answers[index] === answer.id ? "selected" : ""} aria-pressed={answers[index] === answer.id}>{answer.label}</button>)}</div>{selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}</article>;
            })}</div>
            {quizComplete && <div className="sync-card"><span aria-hidden="true">✓</span><div><strong>Les repères essentiels sont acquis.</strong><p>Pour la suite, retenez surtout qu’une mesure de position ne suffit pas : deux séries peuvent avoir le même centre et des dispersions très différentes.</p></div></div>}
          </section>

          <a className="next-card" href="#/seance-5/relations"><div><p className="eyebrow">Prochaine étape</p><h2>Étudier la relation entre deux variables quantitatives</h2><p>Lire un nuage de points, puis relier covariance, corrélation et interprétation.</p></div><strong>Continuer →</strong></a>
        </div>
      </div>
    </main>
  );
}

function ScatterPlot({ pattern }: { pattern: (typeof sessionFiveRelations.patterns)[number] }) {
  return (
    <svg className="scatter-plot" viewBox="0 0 520 330" role="img" aria-labelledby="scatter-title scatter-description">
      <title id="scatter-title">{pattern.label}</title>
      <desc id="scatter-description">{pattern.description} Nuage fictif de dix observations.</desc>
      <g className="scatter-grid" aria-hidden="true">
        {[25, 50, 75].map((value) => <line key={`v-${value}`} x1={55 + value * 4.2} x2={55 + value * 4.2} y1="25" y2="275" />)}
        {[25, 50, 75].map((value) => <line key={`h-${value}`} x1="55" x2="475" y1={275 - value * 2.5} y2={275 - value * 2.5} />)}
      </g>
      <g className="scatter-axes" aria-hidden="true"><line x1="55" x2="482" y1="275" y2="275" /><line x1="55" x2="55" y1="18" y2="275" /></g>
      <text x="470" y="307" className="scatter-label">Variable X</text>
      <text x="20" y="25" className="scatter-label">Variable Y</text>
      <g>{pattern.points.map(([x, y], index) => <circle key={index} cx={55 + x * 4.2} cy={275 - y * 2.5} r="7" aria-label={`Observation ${index + 1} : X ${x}, Y ${y}`}><title>{`Observation ${index + 1} : X ${x}, Y ${y}`}</title></circle>)}</g>
    </svg>
  );
}

function RCodeBlock({ code }: { code: string }) {
  return <pre className="r-code" tabIndex={0} aria-label="Code R"><code>{code}</code></pre>;
}

function SessionFiveRelations() {
  const [activePattern, setActivePattern] = useState<RelationPattern>("positive");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const pattern = sessionFiveRelations.patterns.find((item) => item.id === activePattern) ?? sessionFiveRelations.patterns[0];
  const correctAnswers = sessionFiveRelations.quiz.filter((question, index) => question.answers.find((answer) => answer.id === answers[index])?.correct).length;
  const quizComplete = correctAnswers === sessionFiveRelations.quiz.length;
  const progress = 25 + correctAnswers * 25;

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">∿</span><span>Relations quantitatives</span></a><span className="duration">◷ {sessionFiveRelations.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-5" className="back-link">← Revenir aux rappels</a>
          <p className="eyebrow">Séance 5 · Deuxième partie</p>
          <h1>{sessionFiveRelations.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire">
            <button type="button" onClick={() => scrollToSection("relations-objectifs")}>1. Objectifs</button>
            <button type="button" onClick={() => scrollToSection("nuage-points")}>2. Nuage de points</button>
            <button type="button" onClick={() => scrollToSection("lire-relation")}>3. Méthode de lecture</button>
            <button type="button" onClick={() => scrollToSection("covariance-correlation")}>4. Deux résumés</button>
            <button type="button" onClick={() => scrollToSection("relations-controle")}>5. Point de contrôle</button>
          </nav>
        </aside>

        <div className="lesson-content">
          <section id="relations-objectifs" className="content-card stats-hero">
            <p className="eyebrow">Votre cap</p><h2>Voir la relation avant de la résumer</h2>
            <p className="lead">Deux variables mesurées sur les mêmes individus peuvent varier ensemble. Le nuage de points montre cette organisation ; la covariance et la corrélation en proposent ensuite des résumés numériques.</p>
            <ul className="objectives">{sessionFiveRelations.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
            <p className="privacy-note"><span aria-hidden="true">◇</span><span><strong>Exemples fictifs.</strong> Les points de cette page servent uniquement à comprendre la lecture d’un nuage. Le jeu de données de la séance reste à confirmer.</span></p>
          </section>

          <section id="nuage-points">
            <p className="eyebrow">01 · Exploration visuelle</p><h2>Trois nuages, trois lectures</h2>
            <p className="lead">Chaque point représente un même individu décrit par deux valeurs : sa position horizontale donne X et sa position verticale donne Y.</p>
            <div className="pattern-switcher" role="group" aria-label="Choisir une forme de relation">{sessionFiveRelations.patterns.map((item) => <button key={item.id} type="button" onClick={() => setActivePattern(item.id)} className={activePattern === item.id ? "active" : ""} aria-pressed={activePattern === item.id}>{item.label}</button>)}</div>
            <div className="scatter-card"><ScatterPlot pattern={pattern} /><div className="scatter-reading" aria-live="polite"><p className="eyebrow">Ce que l’on peut dire</p><h3>{pattern.label}</h3><p>{pattern.description}</p></div></div>
            <details><summary>Pourquoi placer la variable explicative sur l’axe horizontal ?</summary><p>C’est une convention fréquente lorsque la question distingue une variable susceptible d’aider à comprendre ou prédire l’autre. Mais le graphique seul ne prouve pas que X cause Y, et certaines analyses ne donnent aucun rôle privilégié aux deux variables.</p></details>
          </section>

          <section id="lire-relation">
            <p className="eyebrow">02 · Méthode</p><h2>Cinq questions avant tout coefficient</h2>
            <div className="relation-reading-grid">{sessionFiveRelations.readingSteps.map((step, index) => <article key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
            <div className="note"><strong>Ordre utile :</strong> décrivez d’abord ce qui est visible, puis calculez un résumé adapté, et seulement ensuite proposez une interprétation. Une association ne constitue pas une explication.</div>
          </section>

          <section id="covariance-correlation">
            <p className="eyebrow">03 · Résumer</p><h2>De la covariance à la corrélation</h2>
            <p className="lead">Les deux indicateurs décrivent la variation conjointe, mais ils ne se lisent pas de la même manière.</p>
            <div className="relation-concepts">{sessionFiveRelations.concepts.map((concept) => <article key={concept.name}><h3>{concept.name}</h3><code>{concept.formula}</code><p>{concept.meaning}</p><div><strong>Limite :</strong> {concept.limit}</div></article>)}</div>
            <div className="correlation-scale" aria-label="Échelle du coefficient de corrélation de moins un à plus un"><span>−1<strong>linéaire négative parfaite</strong></span><span>0<strong>pas de tendance linéaire</strong></span><span>+1<strong>linéaire positive parfaite</strong></span></div>
            <details><summary>Une corrélation de 0,7 est-elle toujours « forte » ?</summary><p>Il n’existe pas de seuil universel. L’appréciation dépend du domaine, de la qualité des mesures, de l’effectif, de la forme du nuage et de l’objectif de l’analyse. Décrivez la valeur et son contexte plutôt que d’appliquer automatiquement une étiquette.</p></details>
          </section>

          <section id="relations-controle">
            <p className="eyebrow">04 · Point de contrôle</p><h2>Interpréter sans aller trop vite</h2>
            <div className="stats-quiz">{sessionFiveRelations.quiz.map((question, index) => {
              const selected = question.answers.find((answer) => answer.id === answers[index]);
              return <article key={question.prompt}><h3>{question.prompt}</h3><div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setAnswers({ ...answers, [index]: answer.id })} className={answers[index] === answer.id ? "selected" : ""} aria-pressed={answers[index] === answer.id}>{answer.label}</button>)}</div>{selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}</article>;
            })}</div>
            {quizComplete && <div className="sync-card"><span aria-hidden="true">✓</span><div><strong>Lecture validée.</strong><p>Vous pouvez décrire le nuage, compléter cette lecture par r et maintenir la distinction entre association observée et explication.</p></div></div>}
            <details><summary>Approfondissement facultatif : mettre r à l’épreuve</summary><p>Imaginez un point très éloigné du reste du nuage, puis demandez-vous comment il pourrait modifier la direction et la valeur de r. Comparez le coefficient avec et sans ce point, si le logiciel retenu pour la séance le permet.</p></details>
          </section>

          <a className="next-card" href="#/seance-5/regression"><div><p className="eyebrow">Prochaine étape</p><h2>Passer du constat au modèle dans R</h2><p>Ajuster une droite, interpréter ses coefficients et examiner les résidus.</p></div><strong>Continuer →</strong></a>
        </div>
      </div>
    </main>
  );
}

function SessionFiveRegression() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const correctAnswers = sessionFiveRegression.quiz.filter((question, index) => question.answers.find((answer) => answer.id === answers[index])?.correct).length;
  const diagnosticsDone = sessionFiveRegression.diagnostics.every((_, index) => checks[index]);
  const quizComplete = correctAnswers === sessionFiveRegression.quiz.length;
  const progress = 15 + correctAnswers * 15 + (diagnosticsDone ? 25 : 0);

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">R</span><span>Régression linéaire</span></a><span className="duration">◷ {sessionFiveRegression.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-5/relations" className="back-link">← Revenir à la corrélation</a>
          <p className="eyebrow">Séance 5 · Troisième partie</p>
          <h1>{sessionFiveRegression.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire">
            <button type="button" onClick={() => scrollToSection("regression-objectifs")}>1. Objectifs</button>
            <button type="button" onClick={() => scrollToSection("regression-donnees")}>2. Jeu d’essai</button>
            <button type="button" onClick={() => scrollToSection("regression-r")}>3. Manipulation R</button>
            <button type="button" onClick={() => scrollToSection("regression-lire")}>4. Interpréter</button>
            <button type="button" onClick={() => scrollToSection("regression-diagnostic")}>5. Diagnostiquer</button>
            <button type="button" onClick={() => scrollToSection("regression-controle")}>6. Point de contrôle</button>
          </nav>
        </aside>

        <div className="lesson-content">
          <section id="regression-objectifs" className="content-card regression-hero">
            <p className="eyebrow">Votre cap</p><h2>Une droite est un modèle, pas la réalité</h2>
            <p className="lead">Vous allez ajuster une régression linéaire simple dans R, traduire la sortie en phrases et vérifier si la droite constitue un résumé acceptable des données.</p>
            <ul className="objectives">{sessionFiveRegression.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
            <p className="privacy-note"><span aria-hidden="true">◇</span><span><strong>Travail dans R.</strong> Exécutez chaque bloc dans votre console ou votre script. Les cases cochées sur cette page restent locales et ne prouvent pas que le code a été exécuté.</span></p>
          </section>

          <section id="regression-donnees">
            <p className="eyebrow">01 · Jeu d’essai</p><h2>Commencer avec un jeu disponible dans R</h2>
            <p className="lead"><code>{sessionFiveRegression.dataset.name}</code> est {sessionFiveRegression.dataset.description}. Aucun téléchargement ni aucune extension n’est nécessaire.</p>
            <div className="regression-variables">{sessionFiveRegression.dataset.variables.map((variable) => <article key={variable.name}><code>{variable.name}</code><strong>{variable.role}</strong><span>{variable.unit}</span></article>)}</div>
            <div className="note"><strong>Limite de l’exemple.</strong> {sessionFiveRegression.dataset.warning}</div>
            <details><summary>Pourquoi commencer par un jeu intégré à R ?</summary><p>Il permet à tout le groupe de reproduire immédiatement les mêmes commandes. Le passage au jeu d’étude de la séance demandera ensuite de remplacer les noms de variables et de refaire tous les contrôles ; il ne s’agira pas d’un simple copier-coller.</p></details>
          </section>

          <section id="regression-r">
            <p className="eyebrow">02 · Manipulation guidée</p><h2>Du tableau à la droite ajustée</h2>
            <p className="lead">Exécutez les blocs dans l’ordre. Après chaque bloc, observez le résultat avant de poursuivre.</p>
            <ol className="r-workflow">{sessionFiveRegression.workflow.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.instruction}</p><RCodeBlock code={step.code} /></div></li>)}</ol>
            <details><summary>Le message « object not found » apparaît</summary><p>Vérifiez la casse et l’orthographe de <code>cars</code>, <code>dist</code>, <code>speed</code> et <code>modele</code>. R distingue les majuscules des minuscules. Exécutez aussi la ligne qui crée <code>modele</code> avant les commandes qui l’utilisent.</p></details>
          </section>

          <section id="regression-lire">
            <p className="eyebrow">03 · Interprétation</p><h2>Transformer la sortie R en phrases</h2>
            <div className="equation-card"><span>ŷ = a + bx</span><strong>{sessionFiveRegression.expected.equation}</strong></div>
            <div className="coefficient-grid"><article><p className="eyebrow">Ordonnée à l’origine</p><h3>−17,58</h3><p>{sessionFiveRegression.expected.intercept}</p></article><article><p className="eyebrow">Pente</p><h3>+3,93 ft par mph</h3><p>{sessionFiveRegression.expected.slope}</p></article><article><p className="eyebrow">Qualité d’ajustement</p><h3>R² ≈ 0,65</h3><p>{sessionFiveRegression.expected.rSquared}</p></article></div>
            <div className="note"><strong>Trois formulations à éviter :</strong> « X explique Y » sans préciser qu’il s’agit d’un modèle, « X cause Y » sans dispositif causal, et « R² % des observations sont correctes ».</div>
            <details><summary>Que représente un résidu ?</summary><p>Pour une observation, le résidu vaut <code>valeur observée − valeur prédite</code>. Il est positif si le point se situe au-dessus de la droite et négatif s’il se situe en dessous. Les résidus montrent ce que le modèle linéaire n’a pas résumé.</p></details>
          </section>

          <section id="regression-diagnostic">
            <p className="eyebrow">04 · Diagnostic</p><h2>Contrôler ce que la droite laisse de côté</h2>
            <p className="lead">R propose plusieurs graphiques pour un objet créé par <code>lm()</code>. Affichez-les un par un et cochez seulement après avoir répondu à la question associée.</p>
            <div className="diagnostic-grid">{sessionFiveRegression.diagnostics.map((diagnostic, index) => <article key={diagnostic.title} className={checks[index] ? "checked" : ""}><h3>{diagnostic.title}</h3><RCodeBlock code={diagnostic.code} /><p>{diagnostic.question}</p><label><input type="checkbox" checked={Boolean(checks[index])} onChange={(event) => setChecks({ ...checks, [index]: event.target.checked })} /><span>J’ai observé le graphique et formulé une réponse.</span></label></article>)}</div>
            <div className="check-summary" aria-live="polite"><strong>{Object.values(checks).filter(Boolean).length} / {sessionFiveRegression.diagnostics.length}</strong><span>{diagnosticsDone ? "diagnostics examinés" : "graphiques examinés"}</span></div>
            <details><summary>Bonus : afficher les quatre graphiques ensemble</summary><RCodeBlock code={'ancienne_disposition <- par(mfrow = c(2, 2))\nplot(modele)\npar(ancienne_disposition)'} /></details>
          </section>

          <section id="regression-controle">
            <p className="eyebrow">05 · Point de contrôle</p><h2>Lire un modèle sans surinterpréter</h2>
            <div className="stats-quiz">{sessionFiveRegression.quiz.map((question, index) => {
              const selected = question.answers.find((answer) => answer.id === answers[index]);
              return <article key={question.prompt}><h3>{question.prompt}</h3><div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setAnswers({ ...answers, [index]: answer.id })} className={answers[index] === answer.id ? "selected" : ""} aria-pressed={answers[index] === answer.id}>{answer.label}</button>)}</div>{selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}</article>;
            })}</div>
            {quizComplete && diagnosticsDone && <div className="sync-card"><span aria-hidden="true">✓</span><div><strong>Modèle ajusté et contrôlé.</strong><p>Préparez trois phrases : une pour la pente, une pour R² et une pour la principale limite révélée par les diagnostics.</p></div></div>}
            <details><summary>Documentation R consultée pour cette activité</summary><ul className="reference-list">{sessionFiveRegression.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label} ↗</a></li>)}</ul></details>
          </section>

          <a className="next-card" href="#/seance-5/anova"><div><p className="eyebrow">Prochaine étape</p><h2>Comparer des groupes de communes</h2><p>Importer le GeoPackage de la séance 2 et réaliser une ANOVA à un facteur dans R.</p></div><strong>Continuer →</strong></a>
        </div>
      </div>
    </main>
  );
}

function SessionFiveApplication() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const correctAnswers = sessionFiveApplication.quiz.filter((question, index) => question.answers.find((answer) => answer.id === answers[index])?.correct).length;
  const quizComplete = correctAnswers === sessionFiveApplication.quiz.length;
  const progress = 20 + correctAnswers * 20;

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">R</span><span>Régression communale</span></a><span className="duration">◷ {sessionFiveApplication.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-5/regression" className="back-link">← Revenir à l’exemple cars</a>
          <p className="eyebrow">Séance 5 · Quatrième partie</p>
          <h1>{sessionFiveApplication.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire">
            <button type="button" onClick={() => scrollToSection("application-r-objectifs")}>1. Objectifs</button>
            <button type="button" onClick={() => scrollToSection("question-communale")}>2. Question</button>
            <button type="button" onClick={() => scrollToSection("application-r")}>3. Manipulation R</button>
            <button type="button" onClick={() => scrollToSection("resultats-communaux")}>4. Résultats</button>
            <button type="button" onClick={() => scrollToSection("application-r-controle")}>5. Point de contrôle</button>
            <button type="button" onClick={() => scrollToSection("application-r-bonus")}>6. Bonus</button>
          </nav>
        </aside>

        <div className="lesson-content">
          <section id="application-r-objectifs" className="content-card regression-hero">
            <p className="eyebrow">Votre cap</p><h2>Revenir aux données sans oublier leur géographie</h2>
            <p className="lead">Vous reprenez le fichier cartographié avec Magrit. Cette fois, chaque commune devient un point du nuage et la régression résume une relation entre deux indicateurs communaux.</p>
            <ul className="objectives">{sessionFiveApplication.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
          </section>

          <section id="question-communale">
            <p className="eyebrow">01 · Question statistique</p><h2>Une relation plausible, mais à vérifier</h2>
            <blockquote className="research-question">{sessionFiveApplication.question}</blockquote>
            <div className="variable-pair"><article><span>X · Variable explicative</span><code>{sessionFiveApplication.dataset.x.name}</code><strong>{sessionFiveApplication.dataset.x.label}</strong><small>{sessionFiveApplication.dataset.x.unit}, par commune</small></article><span aria-hidden="true">→</span><article><span>Y · Variable expliquée</span><code>{sessionFiveApplication.dataset.y.name}</code><strong>{sessionFiveApplication.dataset.y.label}</strong><small>{sessionFiveApplication.dataset.y.unit}, par commune</small></article></div>
            <div className="note"><strong>Hypothèse de travail, pas résultat attendu.</strong> Une relation plausible peut être faible, non linéaire ou dominée par quelques observations. L’objectif est d’examiner ce que montrent réellement les données.</div>
          </section>

          <section id="application-r">
            <p className="eyebrow">02 · Manipulation guidée</p><h2>Du GeoPackage au modèle</h2>
            <p className="lead">Conservez le script complet : les contrôles, le traitement des valeurs manquantes et les graphiques font partie de l’analyse.</p>
            <ol className="r-workflow">{sessionFiveApplication.workflow.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.instruction}</p><RCodeBlock code={step.code} /></div></li>)}</ol>
            <details><summary>Installer sf si l’extension n’est pas disponible</summary><RCodeBlock code={'install.packages("sf")'} /><p>Cette commande ne s’exécute qu’une fois sur votre installation de R. Sur une machine institutionnelle, vérifiez d’abord si <code>library(sf)</code> fonctionne déjà.</p></details>
            <details><summary>Utiliser un chemin écrit dans le script</summary><RCodeBlock code={'chemin <- "data/donnees_commune_mutation_76.gpkg"'} /><p>Ce chemin relatif fonctionne seulement si le dossier de travail de R est la racine du dépôt. Contrôlez-le avec <code>getwd()</code> ; évitez un chemin absolu propre à votre ordinateur dans un script destiné à être partagé.</p></details>
          </section>

          <section id="resultats-communaux">
            <p className="eyebrow">03 · Résultats à confronter</p><h2>Une droite positive, un ajustement très faible</h2>
            <p className="lead">Comparez votre sortie aux ordres de grandeur ci-dessous. Un écart important doit conduire à vérifier le fichier, les variables sélectionnées et le traitement des valeurs manquantes.</p>
            <div className="communal-results">{sessionFiveApplication.expected.map((result) => <article key={result.label}><p>{result.label}</p><strong>{result.value}</strong><span>{result.interpretation}</span></article>)}</div>
            <div className="trace-card"><strong>Trace attendue</strong><p>« Sur les 688 communes renseignées, la relation linéaire entre surface bâtie médiane et valeur foncière médiane est positive mais faible (<em>r</em> ≈ 0,12 ; R² ≈ 0,015). La surface médiane seule résume donc peu les écarts communaux de valeur médiane. »</p></div>
            <details><summary>Pourquoi la pente peut-elle sembler grande alors que R² est faible ?</summary><p>La pente dépend des unités : elle exprime ici des euros par mètre carré supplémentaire de surface médiane. R² décrit autre chose, la part de variabilité rendue compte par la droite. Une pente numériquement élevée ne garantit donc pas un bon ajustement.</p></details>
            <details><summary>Pourquoi rester prudent avec les valeurs extrêmes ?</summary><p>Le fichier ne contient pas le nombre de mutations utilisé pour chaque médiane communale. Une valeur très élevée peut refléter un cas réel, une erreur ou un petit effectif. La documentation détaillée de l’agrégation et la période couverte restent à confirmer avant toute explication.</p></details>
          </section>

          <section id="application-r-controle">
            <p className="eyebrow">04 · Point de contrôle</p><h2>Changer d’échelle sans changer de conclusion</h2>
            <div className="stats-quiz">{sessionFiveApplication.quiz.map((question, index) => {
              const selected = question.answers.find((answer) => answer.id === answers[index]);
              return <article key={question.prompt}><h3>{question.prompt}</h3><div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setAnswers({ ...answers, [index]: answer.id })} className={answers[index] === answer.id ? "selected" : ""} aria-pressed={answers[index] === answer.id}>{answer.label}</button>)}</div>{selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}</article>;
            })}</div>
            {quizComplete && <div className="sync-card"><span aria-hidden="true">✓</span><div><strong>Interprétation communale validée.</strong><p>Présentez au groupe le résultat, sa faiblesse et la principale donnée manquante pour aller plus loin.</p></div></div>}
          </section>

          <section id="application-r-bonus" className="bonus-section">
            <p className="eyebrow">Facultatif · Pour aller plus loin</p><h2>Mettre le modèle à l’épreuve</h2>
            <p className="lead">Choisissez un seul prolongement. Chaque essai doit commencer par une question et se terminer par une comparaison avec le modèle principal.</p>
            <div className="application-bonus-grid">{sessionFiveApplication.bonus.map((bonus) => <article key={bonus.title}><h3>{bonus.title}</h3><p>{bonus.prompt}</p><details><summary>Afficher le code proposé</summary><RCodeBlock code={bonus.code} /></details></article>)}</div>
            <details><summary>Documentation de l’extension sf</summary><ul className="reference-list">{sessionFiveApplication.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label} ↗</a></li>)}</ul></details>
          </section>

          <div className="next-card muted-next"><div><p className="eyebrow">Fin du parcours actuel</p><h2>Une analyse reproductible et discutable</h2><p>Le livrable éventuel, la durée définitive et les règles détaillées d’agrégation restent à confirmer avec l’équipe enseignante.</p></div><strong>À confirmer</strong></div>
        </div>
      </div>
    </main>
  );
}

function SessionFiveAnova() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const correctAnswers = sessionFiveAnova.quiz.filter((question, index) => question.answers.find((answer) => answer.id === answers[index])?.correct).length;
  const diagnosticsDone = sessionFiveAnova.diagnostics.every((_, index) => checks[index]);
  const quizComplete = correctAnswers === sessionFiveAnova.quiz.length;
  const progress = 15 + correctAnswers * 15 + (diagnosticsDone ? 25 : 0);

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">F</span><span>Analyse de variance</span></a><span className="duration">◷ {sessionFiveAnova.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-5/regression" className="back-link">← Revenir à la régression</a>
          <p className="eyebrow">Séance 5 · Quatrième partie</p><h1>{sessionFiveAnova.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire"><button type="button" onClick={() => scrollToSection("anova-objectifs")}>1. Objectifs</button><button type="button" onClick={() => scrollToSection("anova-question")}>2. Question et groupes</button><button type="button" onClick={() => scrollToSection("anova-r")}>3. Manipulation R</button><button type="button" onClick={() => scrollToSection("anova-resultats")}>4. Résultats</button><button type="button" onClick={() => scrollToSection("anova-diagnostics")}>5. Diagnostics</button><button type="button" onClick={() => scrollToSection("anova-controle")}>6. Point de contrôle</button></nav>
        </aside>

        <div className="lesson-content">
          <section id="anova-objectifs" className="content-card anova-hero"><p className="eyebrow">Votre cap</p><h2>Comparer des moyennes sans oublier les groupes</h2><p className="lead">Vous allez comparer la surface bâtie médiane de quatre groupes de communes. Le graphique, le test F, la taille d’effet et les diagnostics répondent à des questions complémentaires.</p><ul className="objectives">{sessionFiveAnova.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul></section>

          <section id="anova-question"><p className="eyebrow">01 · Construire la comparaison</p><h2>Une variable quantitative, un facteur</h2><blockquote className="research-question">{sessionFiveAnova.question}</blockquote><div className="anova-roles"><article><span>Réponse quantitative</span><code>surface_reelle_bati_med</code><strong>Surface bâtie médiane, en m²</strong></article><article><span>Facteur construit</span><code>classe_pieces</code><strong>Quatre groupes de communes</strong></article></div><div className="anova-groups">{sessionFiveAnova.groups.map((group) => <article key={group.label}><strong>{group.label}</strong><span>{group.rule}</span><small>{group.count} communes · moyenne {group.mean}</small></article>)}</div><div className="note"><strong>Choix à défendre.</strong> Le fichier ne contient pas de catégorie native adaptée à cette ANOVA. Les quatre classes regroupent donc un indicateur numérique. Elles facilitent l’apprentissage, mais font perdre de l’information et ne constituent pas une nomenclature officielle.</div><details><summary>Que signifie la valeur 0 pour le nombre de pièces ?</summary><p>Le fichier ne permet pas, à lui seul, de savoir si elle correspond à certaines catégories de biens, à une règle d’agrégation ou à une autre situation. Conservez le libellé prudent « 0 déclaré » et évitez de l’interpréter comme une commune sans logement. Ce point dépend de la documentation détaillée encore à confirmer.</p></details></section>

          <section id="anova-r"><p className="eyebrow">02 · Manipulation guidée</p><h2>Du GeoPackage au test F</h2><ol className="r-workflow">{sessionFiveAnova.workflow.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.instruction}</p><RCodeBlock code={step.code} /></div></li>)}</ol></section>

          <section id="anova-resultats"><p className="eyebrow">03 · Lecture des résultats</p><h2>Un écart visible entre les groupes</h2><p className="lead">Confrontez votre sortie aux ordres de grandeur attendus. Ne passez pas directement de la p-valeur à une conclusion substantielle.</p><div className="communal-results">{sessionFiveAnova.expected.map((result) => <article key={result.label}><p>{result.label}</p><strong>{result.value}</strong><span>{result.interpretation}</span></article>)}</div><div className="trace-card"><strong>Trace attendue</strong><p>« La surface bâtie médiane diffère entre au moins deux des quatre classes construites (<em>F</em> ≈ 31,2 ; <em>p</em> &lt; 2 × 10⁻¹⁶). L’appartenance aux groupes est associée à environ 12 % de la variabilité observée, mais les classes sont déséquilibrées et construites à partir d’un indicateur communal. »</p></div><details><summary>Qu’apporte η² en plus de la p-valeur ?</summary><p>Avec 688 observations, un test peut détecter un écart limité. La taille d’effet décrit l’ampleur de la variabilité associée au facteur dans les données ; elle ne transforme pas cette association en causalité.</p></details></section>

          <section id="anova-diagnostics"><p className="eyebrow">04 · Conditions d’interprétation</p><h2>Examiner avant de comparer les paires</h2><div className="diagnostic-grid">{sessionFiveAnova.diagnostics.map((diagnostic, index) => <article key={diagnostic.title} className={checks[index] ? "checked" : ""}><h3>{diagnostic.title}</h3><RCodeBlock code={diagnostic.code} /><p>{diagnostic.question}</p><label><input type="checkbox" checked={Boolean(checks[index])} onChange={(event) => setChecks({ ...checks, [index]: event.target.checked })} /><span>J’ai examiné ce point et formulé une limite.</span></label></article>)}</div><div className="check-summary" aria-live="polite"><strong>{Object.values(checks).filter(Boolean).length} / {sessionFiveAnova.diagnostics.length}</strong><span>{diagnosticsDone ? "conditions examinées" : "contrôles effectués"}</span></div><details><summary>Comparer ensuite les groupes deux à deux</summary><p>{sessionFiveAnova.postHoc.instruction}</p><RCodeBlock code={sessionFiveAnova.postHoc.code} /></details><div className="note"><strong>Attention au déséquilibre.</strong> Les groupes vont de 66 à 394 communes. Les comparaisons post-hoc et leurs intervalles doivent être lues avec les diagnostics ; une ligne « significative » ne suffit pas.</div></section>

          <section id="anova-controle"><p className="eyebrow">05 · Point de contrôle</p><h2>Interpréter le test sans lui faire dire davantage</h2><div className="stats-quiz">{sessionFiveAnova.quiz.map((question, index) => { const selected = question.answers.find((answer) => answer.id === answers[index]); return <article key={question.prompt}><h3>{question.prompt}</h3><div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setAnswers({ ...answers, [index]: answer.id })} className={answers[index] === answer.id ? "selected" : ""} aria-pressed={answers[index] === answer.id}>{answer.label}</button>)}</div>{selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}</article>; })}</div>{quizComplete && diagnosticsDone && <div className="sync-card"><span aria-hidden="true">✓</span><div><strong>ANOVA réalisée et discutée.</strong><p>Présentez la différence globale, la taille d’effet et deux limites : le découpage en classes et la possible dépendance spatiale.</p></div></div>}<details><summary>Bonus critique : retrouver la faible régression communale</summary><p>{sessionFiveAnova.bonusRegression.text}</p><a className="inline-link" href="#/seance-5/regression-communes">Ouvrir le contre-exemple de régression →</a></details><details><summary>Documentation R consultée</summary><ul className="reference-list">{sessionFiveAnova.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label} ↗</a></li>)}</ul></details></section>

          <a className="next-card" href="#/seance-5/spatial"><div><p className="eyebrow">Prochaine étape</p><h2>La proximité géographique change-t-elle la lecture ?</h2><p>Construire un voisinage communal et mesurer l’autocorrélation spatiale avec l’indice de Moran.</p></div><strong>Continuer →</strong></a>
        </div>
      </div>
    </main>
  );
}

function SessionFiveSpatial() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [steps, setSteps] = useState<Record<number, boolean>>({});
  const correctAnswers = sessionFiveSpatial.quiz.filter((question, index) => question.answers.find((answer) => answer.id === answers[index])?.correct).length;
  const workflowDone = sessionFiveSpatial.workflow.every((_, index) => steps[index]);
  const complete = correctAnswers === sessionFiveSpatial.quiz.length && workflowDone;
  const progress = Math.min(100, 15 + correctAnswers * 15 + (workflowDone ? 25 : 0));

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">I</span><span>Statistiques spatiales</span></a><span className="duration">◷ {sessionFiveSpatial.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-5/anova" className="back-link">← Revenir à l’ANOVA</a>
          <p className="eyebrow">Séance 5 · Cinquième partie</p><h1>{sessionFiveSpatial.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire"><button type="button" onClick={() => scrollToSection("spatial-objectifs")}>1. Objectifs</button><button type="button" onClick={() => scrollToSection("spatial-concepts")}>2. Repères</button><button type="button" onClick={() => scrollToSection("spatial-r")}>3. Manipulation R</button><button type="button" onClick={() => scrollToSection("spatial-lecture")}>4. Interprétation</button><button type="button" onClick={() => scrollToSection("spatial-controle")}>5. Point de contrôle</button><button type="button" onClick={() => scrollToSection("spatial-bonus")}>6. Approfondir</button></nav>
        </aside>

        <div className="lesson-content">
          <section id="spatial-objectifs" className="content-card spatial-hero"><p className="eyebrow">Votre cap</p><h2>Faire entrer la proximité dans l’analyse</h2><p className="lead">Deux communes voisines ne sont pas nécessairement indépendantes. Vous allez traduire leur proximité en poids spatiaux, puis tester si les surfaces bâties médianes sont organisées dans l’espace.</p><ul className="objectives">{sessionFiveSpatial.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul></section>

          <section id="spatial-concepts"><p className="eyebrow">01 · Partir d’une question géographique</p><h2>De la carte à une hypothèse testable</h2><blockquote className="research-question">{sessionFiveSpatial.question}</blockquote><div className="spatial-concepts">{sessionFiveSpatial.concepts.map((concept) => <article key={concept.title}><h3>{concept.title}</h3><p>{concept.text}</p></article>)}</div><div className="note"><strong>Un choix substantiel.</strong> Une contiguïté de type « queen » considère comme voisines deux communes qui partagent au moins un point. Une contiguïté « rook » exigerait un segment de frontière commun. Le choix doit être annoncé et discuté.</div></section>

          <section id="spatial-r"><p className="eyebrow">02 · Manipulation guidée</p><h2>Construire, voir, puis tester le voisinage</h2><div className="spatial-workflow">{sessionFiveSpatial.workflow.map((step, index) => <article key={step.title} className={steps[index] ? "checked" : ""}><div className="spatial-step-heading"><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3></div><p>{step.instruction}</p><RCodeBlock code={step.code} /><label><input type="checkbox" checked={Boolean(steps[index])} onChange={(event) => setSteps({ ...steps, [index]: event.target.checked })} /><span>Étape exécutée et sortie examinée</span></label></article>)}</div><div className="check-summary" aria-live="polite"><strong>{Object.values(steps).filter(Boolean).length} / {sessionFiveSpatial.workflow.length}</strong><span>{workflowDone ? "étapes examinées" : "étapes effectuées"}</span></div></section>

          <section id="spatial-lecture"><p className="eyebrow">03 · Lecture des résultats</p><h2>Le signe ne suffit pas : il faut une référence aléatoire</h2><div className="moran-reading">{sessionFiveSpatial.readingGuide.map((item) => <article key={item.sign}><span>{item.sign}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="trace-card"><strong>Trace attendue à compléter avec votre sortie R</strong><p>{sessionFiveSpatial.resultTrace}</p></div><details><summary>Pourquoi ne pas fournir une valeur attendue de I ?</summary><p>Le résultat dépend notamment des communes conservées, de leur géométrie et de la définition du voisinage. Commencez par vérifier le graphe réellement construit dans R ; une valeur préremplie masquerait précisément cette étape de contrôle.</p></details></section>

          <section id="spatial-controle"><p className="eyebrow">04 · Point de contrôle</p><h2>Interpréter sans confondre structure et explication</h2><div className="stats-quiz">{sessionFiveSpatial.quiz.map((question, index) => { const selected = question.answers.find((answer) => answer.id === answers[index]); return <article key={question.prompt}><h3>{question.prompt}</h3><div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setAnswers({ ...answers, [index]: answer.id })} className={answers[index] === answer.id ? "selected" : ""} aria-pressed={answers[index] === answer.id}>{answer.label}</button>)}</div>{selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}</article>; })}</div>{complete && <div className="sync-card"><span aria-hidden="true">✓</span><div><strong>Analyse globale terminée.</strong><p>Vous pouvez présenter ensemble la variable, les communes incluses, le voisinage, l’indice observé, le protocole de permutation et les limites de l’interprétation.</p></div></div>}</section>

          <section id="spatial-bonus"><p className="eyebrow">05 · Approfondissement facultatif</p><h2>Localiser prudemment ou revenir au modèle</h2><div className="spatial-bonus-grid"><article><h3>Bonus A · Moran local</h3><p>Explorez les contributions locales, sans transformer automatiquement chaque valeur élevée en « cluster significatif ».</p><RCodeBlock code={sessionFiveSpatial.localBonus.code} /><div className="note"><strong>Lecture prudente.</strong> {sessionFiveSpatial.localBonus.warning}</div></article><article><h3>Bonus B · Résidus de l’ANOVA</h3><p>Testez directement la limite repérée à l’étape précédente : les erreurs du modèle sont-elles spatialement indépendantes ?</p><RCodeBlock code={sessionFiveSpatial.residualBonus.code} /><p><strong>Question :</strong> {sessionFiveSpatial.residualBonus.question}</p></article></div><details><summary>Documentation R consultée</summary><ul className="reference-list">{sessionFiveSpatial.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label} ↗</a></li>)}</ul></details></section>

          <div className="next-card muted-next"><div><p className="eyebrow">Fin du parcours principal</p><h2>Une structure spatiale n’est pas encore un modèle spatial</h2><p>La régression spatiale et le choix comparé de plusieurs matrices de poids peuvent constituer un prolongement, selon le niveau et le temps finalement retenus.</p></div><strong>Approfondissement</strong></div>
        </div>
      </div>
    </main>
  );
}

function SessionTwo() {
  const [mapAnswer, setMapAnswer] = useState<Choice | null>(null);
  const [classifications, setClassifications] = useState<Record<number, DataKind>>({});
  const quizDone = sessionTwo.quiz.every((_, index) => classifications[index]);
  const quizCorrect = sessionTwo.quiz.every((question, index) => classifications[index] === question.answer);
  const progress = mapAnswer ? (quizDone ? 100 : 62) : 28;

  return (
    <main>
      <header className="topbar"><a href="#/" className="brand"><span className="brand-icon">⌖</span><span>Cartographie thématique</span></a><span className="duration">◷ {sessionTwo.duration}</span></header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/" className="back-link">← Toutes les séances</a>
          <p className="eyebrow">Séance {sessionTwo.number} · Première partie</p>
          <h1>{sessionTwo.introductionTitle}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire"><button type="button" onClick={() => scrollToSection("objectifs")}>1. Objectifs</button><button type="button" onClick={() => scrollToSection("diagnostic")}>2. Diagnostic</button><button type="button" onClick={() => scrollToSection("repere")}>3. Stock ou ratio ?</button><button type="button" onClick={() => scrollToSection("controle")}>4. Point de contrôle</button><button type="button" onClick={() => scrollToSection("bonus-choisir")}>5. Questions bonus</button></nav>
        </aside>

        <div className="lesson-content">
          <section id="objectifs" className="content-card">
            <p className="eyebrow">Votre cap</p><h2>À la fin de cette étape, vous saurez…</h2>
            <ul className="objectives">{sessionTwo.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
          </section>

          <section id="diagnostic">
            <p className="eyebrow">01 · Diagnostic</p><h2>{sessionTwo.diagnostic.title}</h2><p className="lead">{sessionTwo.diagnostic.prompt} Observez-les avant d’afficher l’aide.</p>
            <div className="map-grid">
              <button onClick={() => setMapAnswer("areas")} aria-pressed={mapAnswer === "areas"} className={`map-choice ${mapAnswer === "areas" ? "selected" : ""}`}><span>Carte A · Plages de couleurs</span><MiniMap mode="areas" /></button>
              <button onClick={() => setMapAnswer("symbols")} aria-pressed={mapAnswer === "symbols"} className={`map-choice ${mapAnswer === "symbols" ? "selected" : ""}`}><span>Carte B · Symboles proportionnels</span><MiniMap mode="symbols" /></button>
            </div>
            <div className="feedback-space" aria-live="polite">
              {mapAnswer === "symbols" && <div className="feedback correct"><strong>Choix pertinent.</strong> {sessionTwo.diagnostic.correct}</div>}
              {mapAnswer === "areas" && <div className="feedback retry"><strong>Regardez encore.</strong> {sessionTwo.diagnostic.retry}</div>}
            </div>
            <details><summary>Besoin d’un indice ?</summary><p>{sessionTwo.diagnostic.hint}</p></details>
            <details><summary>Question à discuter en binôme</summary><p>Quelle information faudrait-il calculer pour qu’une carte en plages de couleurs devienne pertinente ? Donnez au moins deux possibilités et précisez leur dénominateur.</p></details>
          </section>

          <section id="repere">
            <p className="eyebrow">02 · Repère</p><h2>Stock ou indicateur relatif ?</h2><p className="lead">Avant de choisir les couleurs ou la taille des symboles, identifiez ce que mesure réellement la variable.</p>
            <div className="concept-grid">
              <article className="concept-card stock"><span className="concept-icon">●</span><h3>Stock ou effectif</h3><p>Une quantité totale comptée dans chaque territoire.</p><code>Nombre de logements sociaux</code><p><strong>Réflexe :</strong> faire varier la taille d’un symbole.</p></article>
              <article className="concept-card ratio"><span className="concept-icon">▤</span><h3>Ratio, taux ou densité</h3><p>Une quantité rapportée à une autre quantité pertinente.</p><code>logements sociaux ÷ logements × 100</code><p><strong>Réflexe :</strong> utiliser des plages de couleurs ordonnées.</p></article>
            </div>
            <div className="note"><strong>Ce sont des règles générales, pas des recettes.</strong> Le choix dépend aussi de la question posée, de la distribution et du message recherché.</div>
          </section>

          <section id="controle">
            <p className="eyebrow">03 · Point de contrôle</p><h2>Classez chaque variable</h2><p className="lead">Choisissez « stock » ou « ratio ». Vous pouvez modifier vos réponses avant de les vérifier.</p>
            <div className="quiz">{sessionTwo.quiz.map((question, index) => <div className="quiz-row" key={question.label}><span>{question.label}</span><div>{(["stock", "ratio"] as const).map((choice) => <button key={choice} onClick={() => setClassifications({ ...classifications, [index]: choice })} className={classifications[index] === choice ? `active ${choice}` : ""}>{choice === "stock" ? "Stock" : "Ratio"}</button>)}</div></div>)}</div>
            {quizDone && <div className={`feedback ${quizCorrect ? "correct" : "retry"}`} aria-live="polite">{quizCorrect ? <><strong>Tout est juste.</strong> Formulez maintenant la règle avec vos propres mots.</> : <><strong>Une réponse est à revoir.</strong> Cherchez si la variable contient explicitement ou implicitement un dénominateur.</>}</div>}
            <details><summary>Afficher l’explication détaillée</summary><p><strong>Habitants</strong> et <strong>établissements</strong> sont des effectifs comptés. La <strong>part des 65 ans ou plus</strong> rapporte leur nombre à la population totale. La <strong>densité</strong> rapporte la population à une superficie.</p></details>
          </section>

          <BonusSection id="bonus-choisir" bonus={sessionTwo.bonus} />

          <a className="next-card" href="#/seance-2/magrit"><div><p className="eyebrow">Prochaine étape</p><h2>Prendre en main Magrit</h2><p>Importer les fichiers, identifier les couches et explorer les données avant de produire une première carte.</p></div><strong>Continuer →</strong></a>
        </div>
      </div>
    </main>
  );
}

function MagritWorkspace({ activeZone, onSelectZone }: { activeZone: InterfaceZone; onSelectZone: (zone: InterfaceZone) => void }) {
  return (
    <div className="magrit-workspace" aria-label="Schéma interactif simplifié de l’interface de Magrit">
      <button type="button" onClick={() => onSelectZone("topbar")} className={`workspace-zone workspace-topbar ${activeZone === "topbar" ? "active" : ""}`} aria-pressed={activeZone === "topbar"}>
        <span className="workspace-logo"><span aria-hidden="true">⌗</span> magrit</span>
        <span className="workspace-actions" aria-hidden="true"><i>▤</i><i>▰</i><i>▣</i><i>?</i><i>A⌄</i><i>◉</i></span>
        <strong className="workspace-marker">01</strong>
      </button>
      <button type="button" onClick={() => onSelectZone("sidebar")} className={`workspace-zone workspace-sidebar ${activeZone === "sidebar" ? "active" : ""}`} aria-pressed={activeZone === "sidebar"}>
        <strong className="workspace-marker">02</strong>
        <span className="workspace-section open"><b>⇩</b><span>Import des données</span><i>⌃</i></span>
        <span className="workspace-import-action">Ouvrir la fenêtre d’import…</span>
        <span className="workspace-import-action">Explorer les jeux de données…</span>
        <span className="workspace-section"><b>▣</b><span>Configuration de la carte</span><i>⌄</i></span>
        <span className="workspace-section"><b>▥</b><span>Projection cartographique</span><i>⌄</i></span>
        <span className="workspace-section"><b>◈</b><span>Gestion des couches</span><i>⌄</i></span>
        <span className="workspace-section"><b>▤</b><span>Mise en page et habillage</span><i>⌄</i></span>
        <span className="workspace-section"><b>⇧</b><span>Export des données</span><i>⌄</i></span>
      </button>
      <button type="button" onClick={() => onSelectZone("canvas")} className={`workspace-zone workspace-canvas ${activeZone === "canvas" ? "active" : ""}`} aria-pressed={activeZone === "canvas"}>
        <strong className="workspace-marker">03</strong>
        <span className="workspace-map-frame">
          <svg viewBox="0 0 720 360" aria-hidden="true">
            <defs><clipPath id="world-clip"><ellipse cx="360" cy="180" rx="276" ry="146" /></clipPath></defs>
            <ellipse cx="360" cy="180" rx="276" ry="146" fill="#f0effa" stroke="#aab0bb" strokeWidth="2" />
            <g clipPath="url(#world-clip)" className="world-grid">
              <path d="M84 180H636 M360 34V326 M105 115H615 M105 245H615" />
              <ellipse cx="360" cy="180" rx="210" ry="146" /><ellipse cx="360" cy="180" rx="120" ry="146" />
            </g>
            <g className="world-land">
              <path d="M113 91l32-29 70-14 51 18 33 33-17 21-35 4-22 35-31 7-20-25-38-15z" />
              <path d="M245 171l34 10 19 35-8 42-24 61-18-27 9-42-22-41z" />
              <path d="M352 82l29-14 34 12 20 23-28 13-19-8-22 15-25-10z" />
              <path d="M378 129l53 7 34 42-16 82-35 43-23-36 9-48-27-37z" />
              <path d="M426 89l67-35 89 11 50 35-21 31-55 9-28 34-44-17-28-35z" />
              <path d="M542 235l35-17 44 23-13 32-42 5-25-20z" />
            </g>
          </svg>
          <span>Glisser-déposer vos jeux de données ici !</span>
        </span>
        <span className="workspace-map-controls" aria-hidden="true">＋　−　⌂　ⓘ</span>
      </button>
    </div>
  );
}

function MagritIntroduction() {
  const [activeZone, setActiveZone] = useState<InterfaceZone>("sidebar");
  const [zoneAnswers, setZoneAnswers] = useState<Record<number, InterfaceZone>>({});
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [checkpoint, setCheckpoint] = useState<string | null>(null);
  const zoneQuizDone = magritIntroduction.interfaceQuiz.every((_, index) => zoneAnswers[index]);
  const zoneQuizCorrect = magritIntroduction.interfaceQuiz.every((question, index) => zoneAnswers[index] === question.answer);
  const checksDone = magritIntroduction.verificationItems.every((_, index) => checks[index]);
  const selectedCheckpoint = magritIntroduction.checkpoint.answers.find((answer) => answer.id === checkpoint);
  const completedParts = [zoneQuizCorrect, checksDone, selectedCheckpoint?.correct].filter(Boolean).length;
  const progress = 25 + completedParts * 25;

  return (
    <main>
      <header className="topbar">
        <a href="#/" className="brand"><span className="brand-icon">⌖</span><span>Cartographie thématique</span></a>
        <span className="duration">◷ {magritIntroduction.duration}</span>
      </header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-2" className="back-link">← Revenir aux choix cartographiques</a>
          <p className="eyebrow">Séance {sessionTwo.number} · Deuxième partie</p>
          <h1>{magritIntroduction.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire">
            <button type="button" onClick={() => scrollToSection("objectifs-magrit")}>1. Objectifs</button>
            <button type="button" onClick={() => scrollToSection("interface")}>2. Se repérer</button>
            <button type="button" onClick={() => scrollToSection("importer")}>3. Importer</button>
            <button type="button" onClick={() => scrollToSection("verifier")}>4. Vérifier</button>
            <button type="button" onClick={() => scrollToSection("controle-magrit")}>5. Point de contrôle</button>
            <button type="button" onClick={() => scrollToSection("bonus-magrit")}>6. Questions bonus</button>
          </nav>
        </aside>

        <div className="lesson-content">
          <section id="objectifs-magrit" className="content-card magrit-hero">
            <div>
              <p className="eyebrow">Votre cap</p>
              <h2>Explorer avant de représenter</h2>
              <p className="lead">Dans cette étape, vous travaillez dans Magrit. Le support vous aide à savoir quoi observer et à expliquer vos contrôles.</p>
            </div>
            <a className="launch-button" href="https://magrit.cnrs.fr/app/" target="_blank" rel="noreferrer">Ouvrir Magrit <span aria-hidden="true">↗</span></a>
            <ul className="objectives">{magritIntroduction.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
            <p className="privacy-note"><span aria-hidden="true">◇</span><span><strong>Deux onglets, deux rôles.</strong> Vos manipulations ont lieu dans Magrit ; vos réponses sur ce support restent locales et ne sont ni envoyées ni enregistrées.</span></p>
          </section>

          <section id="interface">
            <p className="eyebrow">01 · Se repérer</p>
            <h2>Une interface, trois zones</h2>
            <p className="lead">Sélectionnez chaque repère pour comprendre son rôle, puis associez les trois actions à la bonne zone.</p>
            <MagritWorkspace activeZone={activeZone} onSelectZone={setActiveZone} />
            <div className="zone-tabs" role="list" aria-label="Zones de l’interface">
              {magritIntroduction.interfaceZones.map((zone) => (
                <button key={zone.id} type="button" className={activeZone === zone.id ? "active" : ""} onClick={() => setActiveZone(zone.id)} aria-pressed={activeZone === zone.id}>
                  <span>{zone.number}</span><strong>{zone.title}</strong><small>{zone.description}</small>
                </button>
              ))}
            </div>
            <div className="micro-quiz">
              <h3>À vous : localisez chaque action</h3>
              <p className="micro-quiz-instruction">Pour chaque geste, choisissez la zone correspondante dans l’interface représentée ci-dessus.</p>
              {magritIntroduction.interfaceQuiz.map((question, index) => (
                <div className="quiz-row" key={question.label}>
                  <span>{question.label}</span>
                  <div>{magritIntroduction.interfaceZones.map((zone) => (
                    <button key={zone.id} type="button" onClick={() => setZoneAnswers({ ...zoneAnswers, [index]: zone.id })} className={zoneAnswers[index] === zone.id ? "active neutral" : ""}>{zone.short}</button>
                  ))}</div>
                </div>
              ))}
              {zoneQuizDone && <div className={`feedback ${zoneQuizCorrect ? "correct" : "retry"}`} aria-live="polite">{zoneQuizCorrect ? <><strong>Les trois repères sont acquis.</strong> Vous pouvez maintenant passer à l’import.</> : <><strong>Au moins une association est à revoir.</strong> Revenez aux trois descriptions au-dessus.</>}</div>}
            </div>
            <div className="first-gestures" aria-labelledby="first-gestures-title">
              <h3 id="first-gestures-title">Quatre gestes pour prendre ses repères</h3>
              <p>Effectuez ce tour rapide dans Magrit avant d’importer le fichier. L’objectif est de comprendre la logique de l’interface, pas de mémoriser chaque bouton.</p>
              <div className="gesture-grid">
                {magritIntroduction.firstGestures.map((gesture, index) => (
                  <article key={gesture.label}>
                    <span>{index + 1}</span>
                    <div><h4>{gesture.label}</h4><p>{gesture.action}</p><small><strong>Pourquoi ?</strong> {gesture.purpose}</small></div>
                  </article>
                ))}
              </div>
            </div>
            <details><summary>Astuce pour explorer sans cliquer au hasard</summary><p>Survolez les boutons de Magrit : leurs infobulles précisent leur fonction. Repérez d’abord l’étape dans le menu latéral, puis observez les réglages qui s’ouvrent.</p></details>
          </section>

          <section id="importer">
            <p className="eyebrow">02 · Manipulation guidée</p>
            <h2>Importer sans perdre de vue les données</h2>
            <p className="lead">Utilisez le fichier <code>donnees_commune_mutation_76.gpkg</code>. Il rassemble la géométrie des communes de Seine-Maritime et les indicateurs agrégés utilisés dans la suite.</p>
            <ol className="step-list">
              {magritIntroduction.importSteps.map((step, index) => (
                <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p>{index === 0 && <a href="https://magrit.cnrs.fr/app/" target="_blank" rel="noreferrer">Accéder à l’application ↗</a>}</div></li>
              ))}
            </ol>
            <div className="note"><strong>Point de vigilance.</strong> Un nom de fichier ne suffit pas à décrire une donnée. Notez le nombre d’entités, la géométrie et le SCR lorsque Magrit les affiche.</div>
            <details><summary>Les cinq mots à connaître pour lire l’import</summary><dl className="glossary">{magritIntroduction.readingGuide.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.definition}</dd></div>)}</dl></details>
            <details><summary>Le fichier ne s’affiche pas comme prévu</summary><p>Vérifiez son format et recommencez l’import. Magrit accepte notamment les données géographiques GeoJSON, Shapefile et GeoPackage, ainsi que les tables CSV et XLSX. Pour un Shapefile, conservez ensemble les fichiers qui le composent.</p></details>
            <details><summary>Faut-il effectuer une jointure ici ?</summary><p>Non. Dans ce GeoPackage, la géométrie communale et les indicateurs statistiques se trouvent déjà dans la même couche. La colonne <code>id</code> identifie les communes.</p></details>
          </section>

          <section id="verifier">
            <p className="eyebrow">03 · Contrôle des données</p>
            <h2>Quatre vérifications avant la carte</h2>
            <p className="lead">Cochez uniquement ce que vous avez réellement contrôlé dans Magrit. Le site ne peut pas observer l’autre onglet.</p>
            <div className="checklist">
              {magritIntroduction.verificationItems.map((item, index) => (
                <label key={item} className={checks[index] ? "checked" : ""}><input type="checkbox" checked={Boolean(checks[index])} onChange={(event) => setChecks({ ...checks, [index]: event.target.checked })} /><span aria-hidden="true">✓</span><strong>{item}</strong></label>
              ))}
            </div>
            <div className="check-summary" aria-live="polite"><strong>{Object.values(checks).filter(Boolean).length} / {magritIntroduction.verificationItems.length}</strong><span>{checksDone ? "Contrôles terminés : formulez à voix haute ce que représente une ligne." : "contrôles effectués"}</span></div>
            <div className="trace-card"><strong>Trace attendue, en une phrase</strong><p>« La couche contient des communes représentées par des polygones ; chaque ligne du tableau correspond à une commune identifiée par <code>id</code>, et les autres colonnes décrivent cette commune. » Adaptez cette phrase à ce que vous avez effectivement observé.</p></div>
            <details><summary>Comment reconnaître une couche et une table ?</summary><p>Une couche géographique possède une géométrie et peut être dessinée dans la zone centrale. Une table contient des lignes et des colonnes, mais pas nécessairement de géométrie. Dans le gestionnaire, Magrit les sépare visuellement.</p></details>
          </section>

          <section id="controle-magrit">
            <p className="eyebrow">04 · Point de synchronisation</p>
            <h2>Décider de la prochaine action</h2>
            <p className="lead">{magritIntroduction.checkpoint.prompt}</p>
            <div className="choice-stack">
              {magritIntroduction.checkpoint.answers.map((answer) => <button key={answer.id} type="button" onClick={() => setCheckpoint(answer.id)} className={checkpoint === answer.id ? "selected" : ""} aria-pressed={checkpoint === answer.id}>{answer.label}</button>)}
            </div>
            {selectedCheckpoint && <div className={`feedback ${selectedCheckpoint.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selectedCheckpoint.correct ? "Choix pertinent." : "Pas encore."}</strong> {selectedCheckpoint.feedback}</div>}
            <div className="sync-card"><span aria-hidden="true">◷</span><div><strong>Attendez le signal collectif avant de poursuivre.</strong><p>Préparez une phrase : « Une ligne représente…, la couche contient…, et la prochaine opération utile est… » Si vous avez fini, choisissez une question bonus ci-dessous pendant l’attente.</p></div></div>
          </section>

          <BonusSection id="bonus-magrit" bonus={magritIntroduction.bonus} />

          <a className="next-card" href="#/seance-2/magrit/application"><div><p className="eyebrow">Étape suivante</p><h2>Cartographier les mutations foncières</h2><p>Produire une première carte communale, comparer moyenne et médiane, puis formuler une interprétation prudente.</p></div><strong>Continuer →</strong></a>
        </div>
      </div>
    </main>
  );
}

function MagritApplication() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [finalChecks, setFinalChecks] = useState<Record<number, boolean>>({});
  const questions = magritApplication.questions;
  const questionEntries = Object.entries(questions) as [keyof typeof questions, (typeof questions)[keyof typeof questions]][];
  const correctAnswers = questionEntries.filter(([key, question]) => question.answers.find((answer) => answer.id === answers[key])?.correct).length;
  const checksDone = magritApplication.productionChecks.every((_, index) => checks[index]);
  const finalChecksDone = magritApplication.finalMap.checks.every((_, index) => finalChecks[index]);
  const progress = 15 + correctAnswers * 15 + (checksDone ? 15 : 0) + (finalChecksDone ? 25 : 0);

  return (
    <main>
      <header className="topbar">
        <a href="#/" className="brand"><span className="brand-icon">⌖</span><span>Cartographie thématique</span></a>
        <span className="duration">◷ {magritApplication.duration}</span>
      </header>
      <div className="lesson-layout">
        <aside className="lesson-aside">
          <a href="#/seance-2/magrit" className="back-link">← Revenir à la prise en main</a>
          <p className="eyebrow">Séance {sessionTwo.number} · Troisième partie</p>
          <h1>{magritApplication.title}</h1>
          <div className="progress-label"><span>Progression</span><span>{progress}%</span></div>
          <div className="progress" aria-label={`Progression : ${progress} %`}><span style={{ width: `${progress}%` }} /></div>
          <nav aria-label="Sommaire">
            <button type="button" onClick={() => scrollToSection("application-objectifs")}>1. Objectifs</button>
            <button type="button" onClick={() => scrollToSection("jeu-donnees")}>2. Lire les données</button>
            <button type="button" onClick={() => scrollToSection("premiere-carte")}>3. Première carte</button>
            <button type="button" onClick={() => scrollToSection("comparer-cartes")}>4. Comparer</button>
            <button type="button" onClick={() => scrollToSection("interpreter-carte")}>5. Interpréter</button>
            <button type="button" onClick={() => scrollToSection("finaliser-carte")}>6. Finaliser</button>
          </nav>
        </aside>

        <div className="lesson-content">
          <section id="application-objectifs" className="content-card magrit-hero">
            <div><p className="eyebrow">Votre cap</p><h2>De la variable au message cartographique</h2><p className="lead">Vous allez construire dans Magrit une carte de la valeur foncière médiane par commune, puis tester ce que change le choix de la moyenne.</p></div>
            <a className="launch-button" href="https://magrit.cnrs.fr/app/" target="_blank" rel="noreferrer">Ouvrir Magrit <span aria-hidden="true">↗</span></a>
            <ul className="objectives">{magritApplication.objectives.map((objective) => <li key={objective}><span>✓</span>{objective}</li>)}</ul>
            <p className="privacy-note"><span aria-hidden="true">◇</span><span><strong>Trace formative.</strong> Les réponses cochées sur ce support restent locales et ne sont ni envoyées ni enregistrées.</span></p>
          </section>

          <section id="jeu-donnees">
            <p className="eyebrow">01 · Lire les données</p>
            <h2>Une couche, une commune par ligne</h2>
            <p className="lead">Avant de cartographier, confrontez ce que Magrit affiche aux caractéristiques attendues du fichier.</p>
            <dl className="dataset-facts">
              <div><dt>Fichier</dt><dd><code>{magritApplication.dataset.file}</code></dd></div>
              <div><dt>Couche</dt><dd><code>{magritApplication.dataset.layer}</code></dd></div>
              <div><dt>Territoire</dt><dd>{magritApplication.dataset.territory}</dd></div>
              <div><dt>Unité</dt><dd>{magritApplication.dataset.unit}</dd></div>
              <div><dt>Identifiant</dt><dd><code>{magritApplication.dataset.identifier}</code></dd></div>
              <div><dt>Contrôle attendu</dt><dd>{magritApplication.dataset.expectedFeatureCount} entités · {magritApplication.dataset.geometry} · {magritApplication.dataset.crs}</dd></div>
              <div><dt>Millésime récupéré</dt><dd>{magritApplication.dataset.vintage}</dd></div>
              <div><dt>Licence</dt><dd>{magritApplication.dataset.license}</dd></div>
              <div className="dataset-fact-wide"><dt>Sources</dt><dd>{magritApplication.dataset.sources}</dd></div>
              <div className="dataset-fact-wide"><dt>Préparation</dt><dd>{magritApplication.dataset.processing}</dd></div>
            </dl>
            <div className="variable-table" role="region" aria-label="Variables du jeu de données" tabIndex={0}>
              <table><caption>Indicateurs disponibles pour chaque commune</caption><thead><tr><th scope="col">Thème</th><th scope="col">Unité</th><th scope="col">Médiane</th><th scope="col">Moyenne</th></tr></thead><tbody>{magritApplication.dataset.indicators.map((indicator) => <tr key={indicator.theme}><th scope="row">{indicator.theme}</th><td>{indicator.unit}</td><td><code>{indicator.median}</code></td><td><code>{indicator.mean}</code></td></tr>)}</tbody></table>
            </div>
            <div className="note"><strong>Millésime et période ne sont pas synonymes.</strong> « Janvier 2025 » indique la version récupérée. Vérifiez dans la documentation quelles dates de mutation sont effectivement incluses.</div>
            <ApplicationQuestion questionKey="variable" answers={answers} onAnswer={setAnswers} />
          </section>

          <section id="premiere-carte">
            <p className="eyebrow">02 · Application guidée</p>
            <h2>Construire la carte de la valeur foncière médiane</h2>
            <ApplicationQuestion questionKey="representation" answers={answers} onAnswer={setAnswers} />
            <ol className="step-list">{magritApplication.firstMapSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{step}</p></div></li>)}</ol>
            <details><summary>Comment choisir une discrétisation ?</summary><p>Observez la forme de la distribution et comparez au moins deux méthodes proposées par Magrit. Gardez un nombre de classes lisible, puis expliquez ce que le changement de méthode rend plus ou moins visible. Le niveau attendu sur la discrétisation reste à confirmer par l’équipe enseignante.</p></details>
            <div className="checklist">{magritApplication.productionChecks.map((item, index) => <label key={item} className={checks[index] ? "checked" : ""}><input type="checkbox" checked={Boolean(checks[index])} onChange={(event) => setChecks({ ...checks, [index]: event.target.checked })} /><span aria-hidden="true">✓</span><strong>{item}</strong></label>)}</div>
            <div className="check-summary" aria-live="polite"><strong>{Object.values(checks).filter(Boolean).length} / {magritApplication.productionChecks.length}</strong><span>{checksDone ? "Carte contrôlée : vous pouvez passer à la comparaison." : "contrôles effectués"}</span></div>
          </section>

          <section id="comparer-cartes">
            <p className="eyebrow">03 · Comparaison</p>
            <h2>Remplacer la médiane par la moyenne</h2>
            <p className="lead">Dupliquez si possible la représentation, remplacez <code>valeur_fonciere_med</code> par <code>valeur_fonciere_mean</code> et conservez les autres choix aussi proches que possible. Repérez ensuite ce qui change et ce qui ne change pas.</p>
            <ApplicationQuestion questionKey="comparison" answers={answers} onAnswer={setAnswers} />
            <div className="trace-card"><strong>Votre trace</strong><p>« Avec la médiane, j’observe… Avec la moyenne… Cette différence peut venir de…, mais il faudrait vérifier… »</p></div>
          </section>

          <section id="interpreter-carte">
            <p className="eyebrow">04 · Interprétation</p>
            <h2>Dire ce que la carte montre — et seulement cela</h2>
            <div className="prompt-grid">{magritApplication.interpretationPrompts.map((prompt, index) => <article key={prompt}><span>{index + 1}</span><p>{prompt}</p></article>)}</div>
            <div className="sync-card"><span aria-hidden="true">◷</span><div><strong>Point de synchronisation collective.</strong><p>Présentez une observation, une hypothèse et une donnée manquante. Une carte de valeurs communales ne permet pas, à elle seule, d’expliquer les écarts observés.</p></div></div>
            <details><summary>Approfondissement facultatif</summary><p>Reproduisez la démarche avec <code>surface_reelle_bati_med</code> ou <code>surface_terrain_med</code>. Comparez l’organisation spatiale obtenue à celle de la valeur foncière, sans conclure à une relation causale.</p></details>
          </section>

          <section id="finaliser-carte" className="final-map-section">
            <p className="eyebrow">05 · Finalisation</p>
            <h2>Faire une carte que l’on peut transmettre</h2>
            <p className="lead">{magritApplication.finalMap.introduction}</p>
            <div className="final-map-checklist">
              {magritApplication.finalMap.checks.map((item, index) => (
                <label key={item.category} className={finalChecks[index] ? "checked" : ""}>
                  <input type="checkbox" checked={Boolean(finalChecks[index])} onChange={(event) => setFinalChecks({ ...finalChecks, [index]: event.target.checked })} />
                  <span aria-hidden="true">✓</span>
                  <span><strong>{item.category}</strong><small>{item.label}</small></span>
                </label>
              ))}
            </div>
            <div className="check-summary" aria-live="polite"><strong>{Object.values(finalChecks).filter(Boolean).length} / {magritApplication.finalMap.checks.length}</strong><span>{finalChecksDone ? "Carte prête pour une relecture extérieure." : "standards vérifiés"}</span></div>
            <div className="peer-review"><span aria-hidden="true">↔</span><div><strong>Test sans commentaire oral</strong><p>{magritApplication.finalMap.peerReview}</p></div></div>
            <details><summary>Bonus : pousser la mise en page plus loin</summary><ul className="bonus-list">{magritApplication.finalMap.bonus.map((item) => <li key={item}>{item}</li>)}</ul></details>
            <div className="note"><strong>À confirmer par l’équipe enseignante.</strong> Le format d’export attendu et l’existence éventuelle d’un livrable étudiant ne sont pas encore fixés.</div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ApplicationQuestion({ questionKey, answers, onAnswer }: { questionKey: keyof typeof magritApplication.questions; answers: Record<string, string>; onAnswer: (answers: Record<string, string>) => void }) {
  const question = magritApplication.questions[questionKey];
  const selected = question.answers.find((answer) => answer.id === answers[questionKey]);

  return (
    <div className="application-question">
      <h3>{question.prompt}</h3>
      <div className="choice-stack">{question.answers.map((answer) => <button key={answer.id} type="button" onClick={() => onAnswer({ ...answers, [questionKey]: answer.id })} className={answers[questionKey] === answer.id ? "selected" : ""} aria-pressed={answers[questionKey] === answer.id}>{answer.label}</button>)}</div>
      {selected && <div className={`feedback ${selected.correct ? "correct" : "retry"}`} aria-live="polite"><strong>{selected.correct ? "Choix pertinent." : "À revoir."}</strong> {selected.feedback}</div>}
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");
  useEffect(() => { const update = () => setRoute(window.location.hash || "#/"); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  if (route.startsWith("#/seance-2/magrit/application")) return <MagritApplication />;
  if (route.startsWith("#/seance-2/magrit")) return <MagritIntroduction />;
  if (route.startsWith("#/seance-2")) return <SessionTwo />;
  if (route.startsWith("#/seance-5/spatial")) return <SessionFiveSpatial />;
  if (route.startsWith("#/seance-5/anova")) return <SessionFiveAnova />;
  if (route.startsWith("#/seance-5/regression-communes")) return <SessionFiveApplication />;
  if (route.startsWith("#/seance-5/regression")) return <SessionFiveRegression />;
  if (route.startsWith("#/seance-5/relations")) return <SessionFiveRelations />;
  if (route.startsWith("#/seance-5")) return <SessionFiveBasics />;
  return <Home />;
}
