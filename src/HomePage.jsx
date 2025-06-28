import React from "react";

const HomePage = () => {
  return (
    <div className="p-8 font-sans text-center">
      <h1 className="text-4xl font-bold mb-4">Velkommen til CD AI Systems</h1>
      <p className="text-lg max-w-2xl mx-auto">
        Et intelligent digitalt vejledningssystem, der kombinerer psykologisk viden og AI for at støtte børn med særlige behov, deres voksne og fagfolk. Udforsk CDA, CDT og CDF – og se hvordan vi skaber forandring.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">CDA</h2>
          <p>Children Diagnosis Adviser – system til støtteprofiler og handleplaner.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">CDT</h2>
          <p>Children Diagnosis Tutor – en interaktiv fagbog om børns diagnoser og adfærd.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">CDF</h2>
          <p>Children Diagnosis Friend – barnets egen indgang til forståelse og mestring.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
HomePage.jsx
