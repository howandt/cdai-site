import React from "react";

const systems = [
  {
    id: "cda",
    name: "CDA – Children Diagnosis Adviser",
    description:
      "Et vejledningssystem, der hjælper voksne med at forstå børns emotionelle reaktioner og adfærd. Bruges til støtteplaner og relationel struktur."
  },
  {
    id: "cdt",
    name: "CDT – Children Diagnosis Tutor",
    description:
      "En levende digital fagbog, der giver lærere, pædagoger og forældre indsigt i diagnoser og pædagogiske strategier. Inkluderer visualiseringer og PBL-moduler."
  },
  {
    id: "cdf",
    name: "Ann CDF – Children Diagnosis Friend",
    description:
      "Et narrativt system designet til at hjælpe børn selv med at forstå deres følelser og reaktioner gennem historier, spejling og følelseskort."
  }
];

const CDFamilyViewer = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>CD AI Familiesystem</h2>
      {systems.map((s) => (
        <div key={s.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h3>{s.name}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CDFamilyViewer;
