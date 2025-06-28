import React from "react";

const pblProjects = [
  {
    id: "relation_pbl",
    title: "Hvordan skaber vi trygge relationer?",
    target: "0.-3. klasse",
    format: "PBL-forløb med interviews, klasseregler og følelseskort"
  },
  {
    id: "angst_pbl",
    title: "Hvorfor bliver nogle bange i skolen?",
    target: "4.-6. klasse",
    format: "Film, logbog og fælles strategiøvelser"
  },
  {
    id: "diagnose_pbl",
    title: "Hvad betyder det at have en diagnose?",
    target: "7.-9. klasse",
    format: "Podcast-projekt, debat og systemkort"
  }
];

const PBLViewer = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>PBL-Projekter (Problem-baseret læring)</h2>
      {pblProjects.map((p) => (
        <div key={p.id} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h3>{p.title}</h3>
          <p><strong>Målgruppe:</strong> {p.target}</p>
          <p><strong>Format:</strong> {p.format}</p>
        </div>
      ))}
    </div>
  );
};

export default PBLViewer;
