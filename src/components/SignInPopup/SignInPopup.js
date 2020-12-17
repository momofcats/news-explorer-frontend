import React from "react";
import "./SignInPopup.css";
import Popup from "../Popup/Popup";

function SignInPopup(props) {
  return (
    <Popup onClose={props.onClose} isOpen={props.isOpen}>
      <form className="form">
        <h2 className="form__title">Sign in</h2>
        <label className="form__input-label" for="email">
          Email
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="Enter email"
        />
        <span className="form__input-error">Some error</span>
        <label className="form__input-label" for="password">
          Password
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          placeholder="Enter password"
        />
        <span className="form__input-error">Some error</span>
        <button className="button button_type_primary" type="submit">
          Sign in
        </button>
      </form>
      <div className="form__wrapper">
        <p>or</p>
        <button className="button-link" type="button" onClick={props.onSignUpClick}>
          Sign up
        </button>
      </div>
    </Popup>
  );
}

export default SignInPopup;
