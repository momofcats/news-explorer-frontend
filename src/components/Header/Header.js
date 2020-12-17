import React, { useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
function Header(props) {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <header className={`header ${expanded ? "header_active" : ""}`}>
      <div className="header__wrapper">
        <div className="header__logo">NewsExplorer</div>
        <button
          className={`header__button ${
            expanded
              ? "header__button_type_expanded"
              : "header__button_type_closed"
          }`}
          onClick={handleClick}
        ></button>
      </div>
      <Nav isOpen={expanded} onClick={props.onClick}/>
      <div className={`${expanded ? "header__overlay" : ""}`}></div>
    </header>
  );
}

export default Header;
