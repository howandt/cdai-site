import React from "react";

const RoleplayPerspective = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">Rollespil: Perspektivskifte</h1>
      <p className="mb-4">Vælg en rolle og oplev situationen fra deres synspunkt.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            🧒 Barnets Perspektiv
          </h2>
          <p>
            "Jeg prøvede at sige noget, men de grinte. Jeg føler mig dum og vil bare være usynlig."
          </p>
        </div>

        <div className="bg-green-100 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            👩‍🏫 Lærerens Perspektiv
          </h2>
          <p>
            "Han afbryder hele tiden. Jeg ved ikke, hvordan jeg får kontakt uden konflikt."
          </p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            👨‍🦱 Pædagogens Perspektiv
          </h2>
          <p>
            "Hun trækker sig, så snart der er mange andre. Vi prøver med små grupper, men det er stadig svært."
          </p>
        </div>

        <div className="bg-purple-100 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            👩‍🎓 Forælderens Perspektiv
          </h2>
          <p>
            "Derhjemme fungerer det faktisk. Det er som om skolen gør hende mere usikker."
          </p>
        </div>

        <div className="bg-red-100 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            🧑‍🔬 Fagpersonens Perspektiv
          </h2>
          <p>
            "Det virker som social overbelastning. Hun har brug for tydelige rammer og forudsigelighed."
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleplayPerspective;
