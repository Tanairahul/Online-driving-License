import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LangContext } from "./LanguageContext";
import "./App.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [search, setSearch] = useState("");

  const { translations, toggleLang, lang } = useContext(LangContext);
  const navigate = useNavigate();

  const handleSkip = () => {
    setShowNavbar(false);
  };

  // ================= SEARCH REDIRECT =================
  const handleSearch = () => {
    const value = search.toLowerCase().trim();

    if (value === "learner" || value === "learner license") {
      navigate("/learner-license");   // 👈 learner form page
    } 
    else if (value === "license" || value === "driving license") {
      navigate("/dashboard");         // 👈 license create page
    } 
    else {
      alert("❌ Invalid search");
    }

    setSearch("");
  };

  return (
    <>
      {showNavbar && (
        <nav className="navbar">
          <ul className="navbar-list">

            <li className="navbar-item">
              <Link to="/home" style={{ color: "white" }}>
                {translations.home}
              </Link>
            </li>

            <li className="navbar-item" onClick={handleSkip}>
              {translations.skip}
            </li>

            <div className="language-switcher">
              <button className="navbar-button" onClick={toggleLang}>
                {lang === "en" ? "Hindi" : "English"}
              </button>
            </div>

            {/* SEARCH */}
            <div className="form-control">
              <input
                type="text"
                placeholder={translations.search}
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="search-button" onClick={handleSearch}>
                🔍
              </button>
            </div>

          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
