import React from "react";

const RoleplayPerspective = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Rollespil: Perspektivskifte</h2>
      <p>Vælg en rolle og oplev situationen fra deres synspunkt.</p>

      <div style={{ marginTop: "2rem" }}>
        <h3>🧒 Barnets Perspektiv</h3>
        <blockquote>
          “Jeg prøvede at sige noget, men de grinte. Jeg føler mig dum og vil bare være usynlig.”
        </blockquote>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>👩‍🏫 Lærerens Perspektiv</h3>
        <blockquote>
          “Han afbryder hele tiden. Jeg ved ikke, hvordan jeg får kontakt uden konflikt.”
        </blockquote>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>👨‍👩‍👧 Forældrenes Perspektiv</h3>
        <blockquote>
          “Vi gør alt, hvad vi kan derhjemme, men vi føler os magtesløse, når vi ikke bliver forstået.”
        </blockquote>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>👩‍🍼 Pædagogens Perspektiv</h3>
        <blockquote>
          “Han trækker sig i sociale lege. Jeg ser noget, men ved ikke altid, hvordan jeg hjælper ham bedst.”
        </blockquote>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>🧑‍⚕️ Fagpersonens Perspektiv</h3>
        <blockquote>
          “Systemisk forståelse er vigtig – men det skal give mening for barnet og dem omkring det.”
        </blockquote>
      </div>
    </div>
  );
};

export default RoleplayPerspective;
