import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logout from '../../images/logout.svg';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Nav(props) {
  const handleClick = () =>{
    props.onLogOut();
  }
  const currentUser = React.useContext(CurrentUserContext);
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
          onClick={handleClick}
        >
          {currentUser.name}<img className="nav__icon" src={logout} alt="icon" />
        </button>
      )}
    </nav>
  );
}

export default Nav;
