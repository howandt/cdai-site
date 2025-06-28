import React from "react";

const cases = [
  {
    id: "case_frikvarter",
    title: "Konflikt i frikvarteret",
    diagnosis: "ADHD",
    quote: "De skubber mig altid først!",
    strategy: "Visuel pauseplan og tydelige overgangssignaler",
    outcome: "Mindre uro, bedre relationer i frikvarteret"
  },
  {
    id: "case_kantine",
    title: "Uro i kantinen",
    diagnosis: "Autisme og sensoriske udfordringer",
    quote: "Det larmer for meget, jeg kan ikke spise",
    strategy: "Stillezone og social historie",
    outcome: "Barnet vælger roligt tidspunkt og sidder roligt med én voksen"
  },
  {
    id: "case_gruppearbejde",
    title: "Sammenbrud i gruppearbejde",
    diagnosis: "Angst og lavt selvbillede",
    quote: "De bestemmer alt, jeg er dum",
    strategy: "Tydelige roller og individuel forventningsafstemning",
    outcome: "Deltagelse i delopgave, senere fuld deltagelse"
  }
];

const CaseViewer = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Cases</h2>
      {cases.map((c) => (
        <div key={c.id} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h3>{c.title}</h3>
          <p><strong>Diagnose:</strong> {c.diagnosis}</p>
          <p><strong>Elevcitat:</strong> “{c.quote}”</p>
          <p><strong>Strategi:</strong> {c.strategy}</p>
          <p><strong>Resultat:</strong> {c.outcome}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseViewer;
