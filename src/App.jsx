import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import HomePage from "./HomePage";
import CaseViewer from "./CaseViewer";
import TemplateViewer from "./TemplateViewer";

const App = () => {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases" element={<CaseViewer />} />
        <Route path="/templates" element={<TemplateViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
