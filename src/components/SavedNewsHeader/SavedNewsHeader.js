import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "../Header/Header.css";
import "./SavedNewsHeader.css";

function SavedNewsHeader(props) {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    
    <header
      className={`header header_theme_light ${
        expanded ? "header_active-light" : ""
      }`}
    >
      <div className="header__wrapper header__wrapper_light">
        <div className="header__logo">NewsExplorer</div>
        <button
          className={`header__button ${
            expanded
              ? "header__button-dark_type_expanded"
              : "header__button-dark_type_closed"
          }`}
          onClick={handleClick}
        ></button>
      </div>
      <Nav isOpen={expanded} onClick={props.onClick} isLoggedIn={true} />
      {expanded && <div className="header__overlay"></div>}
    </header>
  );
}

export default SavedNewsHeader;
