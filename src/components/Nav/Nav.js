import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logout from '../../images/logout.svg';

function Nav(props) {
  return (
    <nav className={`nav ${props.isOpen ? "nav_active" : ""}`}>
      <NavLink
        className={`nav__link ${
          !props.isLoggedIn ? "nav__link_active-light" : ""
        }`}
        to="/"
      >
        Home
      </NavLink>
      {props.isLoggedIn && (
        <NavLink
          className="nav__link nav__link_active-dark"
          to="/saved-news"
        >
          Saved Articles
        </NavLink>
      )}
      {!props.isLoggedIn ? (
        <button
          className="nav__button nav__button_type_sign-in"
          onClick={props.onSignIn}
        >
          Sign in
        </button>
      ) : (
        <button
          className="nav__button nav__button_type_sign-out"
          onClick={props.onSignUp}
        >
          Elise<img className="nav__icon" src={logout} alt="icon"/>
        </button>
      )}
    </nav>
  );
}

export default Nav;
