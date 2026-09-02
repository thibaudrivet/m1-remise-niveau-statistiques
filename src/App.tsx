import { useEffect, useState } from "react";
import { course, sessionTwo } from "./content";

type Choice = "areas" | "symbols";
type DataKind = "stock" | "ratio";

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
          <nav aria-label="Sommaire"><a href="#objectifs">1. Objectifs</a><a href="#diagnostic">2. Diagnostic</a><a href="#repere">3. Stock ou ratio ?</a><a href="#controle">4. Point de contrôle</a></nav>
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

          <section className="next-card"><div><p className="eyebrow">Prochaine étape</p><h2>Prendre en main Magrit</h2><p>Importer les fichiers, identifier les couches et explorer les données avant de produire une première carte.</p></div><strong>À construire →</strong></section>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");
  useEffect(() => { const update = () => setRoute(window.location.hash || "#/"); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  return route.startsWith("#/seance-2") ? <SessionTwo /> : <Home />;
}
