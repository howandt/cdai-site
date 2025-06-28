import React from "react";
import HomePage from "./HomePage";
import CaseViewer from "./CaseViewer";
import TemplateViewer from "./TemplateViewer";
import CDFamilyViewer from "./CDFamilyViewer";
import PBLViewer from "./PBLViewer";
import RoleplayPerspective from "./components/RoleplayPerspective"; // 👈 tilføjet

const App = () => {
  const [page, setPage] = React.useState("home");

  const renderPage = () => {
    switch (page) {
      case "cases":
        return <CaseViewer />;
      case "templates":
        return <TemplateViewer />;
      case "cdf":
        return <CDFamilyViewer />;
      case "pbl":
        return <PBLViewer />;
      case "roleplay":
        return <RoleplayPerspective />; // 👈 tilføjet
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "#eee" }}>
        <button onClick={() => setPage("home")}>Forside</button>
        <button onClick={() => setPage("cases")}>Cases</button>
        <button onClick={() => setPage("templates")}>Skabeloner</button>
        <button onClick={() => setPage("cdf")}>CD-Familie</button>
        <button onClick={() => setPage("pbl")}>PBL</button>
        <button onClick={() => setPage("roleplay")}>Rollespil</button> {/* 👈 ny knap */}
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;

