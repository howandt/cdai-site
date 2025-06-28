import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <nav style={{ background: "#1a202c", padding: "1rem" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", color: "#fff" }}>
        <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Forside</Link></li>
        <li><Link to="/cases" style={{ color: "#fff", textDecoration: "none" }}>Cases</Link></li>
        <li><Link to="/templates" style={{ color: "#fff", textDecoration: "none" }}>Skabeloner</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
