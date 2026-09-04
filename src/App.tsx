import { useEffect, useState } from "react";
import { course, magritApplication, magritIntroduction, sessionTwo } from "./content";

type Choice = "areas" | "symbols";
type DataKind = "stock" | "ratio";
type InterfaceZone = "topbar" | "sidebar" | "canvas";
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
        <article className="session-card pending">
          <span className="session-number">05</span>
          <div><p>3 heures</p><h2>Relations entre variables quantitatives</h2><span>En préparation</span></div>
        </article>
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
            <div className="note"><strong>Pause avant de valider.</strong> Un nom de fichier ne suffit pas à décrire une donnée. Notez le nombre d’entités, la géométrie et le SCR lorsque Magrit les affiche.</div>
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
  const questions = magritApplication.questions;
  const questionEntries = Object.entries(questions) as [keyof typeof questions, (typeof questions)[keyof typeof questions]][];
  const correctAnswers = questionEntries.filter(([key, question]) => question.answers.find((answer) => answer.id === answers[key])?.correct).length;
  const checksDone = magritApplication.productionChecks.every((_, index) => checks[index]);
  const progress = 20 + correctAnswers * 20 + (checksDone ? 20 : 0);

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
  return route.startsWith("#/seance-2") ? <SessionTwo /> : <Home />;
}
