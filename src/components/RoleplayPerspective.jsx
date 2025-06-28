import React from "react";

const RoleplayPerspective = () => {
  return (
    <div style={{ padding: "1.5rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Rollespil: Perspektivskifte</h2>
      <p style={{ marginBottom: "1.5rem", fontSize: "1rem", lineHeight: "1.5" }}>
        Vælg en rolle og oplev en situation fra deres synsvinkel. Dette hjælper med at forstå, hvordan adfærd og reaktioner kan opleves forskelligt – og skabe større empati i hverdagen.
      </p>

      <div style={{ marginBottom: "2rem" }}>
        <h3>🧒 Barnets Perspektiv</h3>
        <ul>
          <li>“Jeg prøvede at sige noget, men de grinte. Jeg føler mig dum og vil bare være usynlig.”</li>
          <li>“Læreren siger jeg larmer, men jeg bliver bare urolig, når jeg ikke ved, hvad vi skal.”</li>
          <li>“Det er svært at være med, når alle råber – så jeg går bare min vej.”</li>
        </ul>
      </div>

      <div>
        <h3>👩‍🏫 Lærerens Perspektiv</h3>
        <ul>
          <li>“Han afbryder hele tiden. Jeg ved ikke, hvordan jeg får kontakt uden konflikt.”</li>
          <li>“Når jeg prøver at støtte hende, råber hun, og de andre elever reagerer også.”</li>
          <li>“Jeg vil så gerne hjælpe – men jeg føler mig utilstrækkelig og alene med det.”</li>
        </ul>
      </div>
    </div>
  );
};

export default RoleplayPerspective;
