import React from "react";

const RoleplayPerspective = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Rollespil: Perspektivskifte</h2>
      <p>Vælg en rolle og oplev situationen fra deres synspunkt.</p>

      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", flex: 1 }}>
          <h3>🧒 Barnets Perspektiv</h3>
          <p>“Jeg prøvede at sige noget, men de grinte. Jeg føler mig dum og vil bare være usynlig.”</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", flex: 1 }}>
          <h3>👩‍🏫 Lærerens Perspektiv</h3>
          <p>“Han afbryder hele tiden. Jeg ved ikke, hvordan jeg får kontakt uden konflikt.”</p>
        </div>
      </div>
    </div>
  );
};

export default RoleplayPerspective;
