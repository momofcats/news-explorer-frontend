import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className={`nav ${props.isOpen ? "nav_active" : ""}`}>
      <NavLink className="nav__item nav__item_type_menu" to="/">
        Home
      </NavLink>

      <button className="nav__item nav__item_type_button" onClick={props.onClick}>
        Sign in
      </button>
    </nav>
  );
}

export default Nav;
