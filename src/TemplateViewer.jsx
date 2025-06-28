import React from "react";

const templates = [
  {
    id: "struktur_visuel_dag",
    title: "Visuel dagsstruktur",
    description: "Skaber ro og forudsigelighed ved visuelt overblik over dagens aktiviteter.",
    suitable: ["ADHD", "autisme", "angst"]
  },
  {
    id: "mikropauser_skole",
    title: "Mikropauser i skoledagen",
    description: "Korte planlagte pauser med valgmuligheder for barnet uden sanktion.",
    suitable: ["ADHD", "sensoriske udfordringer"]
  },
  {
    id: "skolevaegring_handlingsplan",
    title: "Handleplan ved skolevægring",
    description: "Støtter relation, kontakt og fleksibel mødedeltagelse ved emotionel modstand.",
    suitable: ["angst", "stressreaktioner", "tilknytningsforstyrrelser"]
  }
];

const TemplateViewer = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Støtteskabeloner</h2>
      {templates.map((t) => (
        <div key={t.id} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <p><strong>Anbefales ved:</strong> {t.suitable.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default TemplateViewer;
