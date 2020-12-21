import React from "react";
import Popup from "../Popup/Popup";

function SignUpPopup(props) {
  return (
    <Popup onClose={props.onClose} isOpen={props.isOpen}>
      <form className="form">
        <h2 className="form__title">Sign up</h2>
        <label className="form__input-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="Enter email"
        />
        <span className="form__input-error">Some error</span>
        <label className="form__input-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          placeholder="Enter password"
        />
        <span className="form__input-error">Some error</span>
        <label className="form__input-label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          className="form__input"
          type="text"
          placeholder="Enter your username"
        />
        <span className="form__input-error">Some error</span>
        <button className="button button_type_primary" type="submit">
          Sign up
        </button>
      </form>
      <div className="form__wrapper">
        <p>or</p>
        <button className="button-link" type="button" onClick={props.onSignInClick}>
          Sign in
        </button>
      </div>
    </Popup>
  );
}

export default SignUpPopup;