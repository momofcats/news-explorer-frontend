import React from "react";
import "./SignInPopup.css";
import Popup from "../Popup/Popup";

function SignInPopup(props) {
    return (
        <Popup>
            <form className="form">
                <h2 className="form__title">
                    Sign in
                </h2>
                <label className="form__input-label" for="email">Email</label>
                <input id="email" className="form__input" type="email" placeholder="Enter email"/>
                <label className="form__input-label" for="password">Password</label>
                <input id="password" className="form__input" type="password" placeholder="Enter password" />
                <button className="form__btn-submit"type="submit">Sign in</button>
            </form>
            <div className="form__wrapper"><p>or</p>
            <button className="button button_type_link" type="button">Sign up</button></div>
        </Popup>
    )
}

export default SignInPopup;