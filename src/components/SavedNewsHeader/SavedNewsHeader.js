import React, { useState, useCallback } from "react";
import Nav from "../Nav/Nav";
import "../Header/Header.css";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ onSignIn,menuButtonVisible,isLoggedIn }) {
  const [expanded, setExpanded] = useState(false);
  function toggleMenu() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  const handleSignIn = useCallback(() => {
    setExpanded(false); 
    onSignIn();
  }, [onSignIn]);
  return (
    
    <header
      className={`header header_theme_light ${
        expanded ? "header_active-light" : ""
      }`}
    >
      <div className="header__wrapper header__wrapper_light">
        <div className="header__logo">NewsExplorer</div>
        {menuButtonVisible && <button
          className={`header__button ${
            expanded
              ? "header__button-dark_type_expanded"
              : "header__button-dark_type_closed"
          }`}
          onClick={toggleMenu}
        ></button>}
      </div>
      <Nav isOpen={expanded} onSignIn={handleSignIn} isLoggedIn={isLoggedIn} />
      {expanded && <div className="header__overlay"></div>}
    </header>
  );
}

export default SavedNewsHeader;
