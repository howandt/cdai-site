import React, { useState } from "react";

const perspectives = {
  Barn: "Jeg prøvede at sige noget, men de grinte. Jeg føler mig dum og vil bare være usynlig.",
  Lærer: "Han afbryder hele tiden. Jeg ved ikke, hvordan jeg får kontakt uden konflikt.",
  Pædagog: "Hun trækker sig, så snart der er mange andre. Vi prøver med små grupper, men det er stadig svært.",
  Forælder: "Derhjemme fungerer det faktisk. Det er som om skolen gør hende mere usikker.",
  Fagperson: "Det virker som social overbelastning. Hun har brug for tydelige rammer og forudsigelighed."
};

const RoleplayPerspective = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  # CD AI Systems

**Et digitalt værktøjssystem til fagpersoner og forældre, der arbejder med børn med særlige behov.**

Denne app demonstrerer funktionerne i:

- **CDA** – Children Diagnosis Adviser: Relationel vejledning og støtteprofiler
- **CDT** – Children Diagnosis Tutor: Interaktiv fagbog og læringsmodul
- **Ann CDF** – Children Diagnosis Friend: Spejlings- og forståelsessystem til børn

## Funktioner

- Realistiske cases med elevperspektiv
- Skabelonbaseret støtte: handleplaner, visuelle dagsplaner, m.m.
- PBL-projekter til klasseundervisning
- Klar til demonstration for skoler, fagteams og studerende

## Teknologi

Bygget med React + Vite. Hostet via Vercel.

## Kontakt

For demo, oplæg eller samarbejde: kontakt@cdaisystems.com

---

### Rollespil: Frikvarter – Perspektivskifte

**Situation:** En gruppe børn leger med fangeleg. Et barn bliver ikke taget med og reagerer ved at gå ind igen uden at sige noget.

**🧒 Barnets Perspektiv:**  
"Jeg stod lige ved siden af, men de kiggede ikke på mig. Jeg sagde ikke noget, for det hjælper alligevel ikke."

**👩‍🏫 Lærerens Perspektiv:**  
"Han gik bare ind uden at sige noget. Jeg kan ikke gætte, hvad der er galt, når han ikke fortæller det."

      {selectedRole && (
        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f9f9f9", borderRadius: "8px" }}>
          <strong>{selectedRole}s Perspektiv:</strong>
          <p>{perspectives[selectedRole]}</p>
        </div>
      )}
    </div>
  );
};

export default RoleplayPerspective;
