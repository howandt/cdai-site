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

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Rollespil: Perspektivskifte</h2>
      <p>Vælg en rolle og oplev situationen fra deres synspunkt.</p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {Object.keys(perspectives).map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid #ccc" }}
          >
            {role}
          </button>
        ))}
      </div>
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
