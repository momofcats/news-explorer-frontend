import React, {useState} from "react";
import Popup from "../Popup/Popup";

function SignInPopup(props) {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const resetForm = () => {
		setEmail("");
		setPassword("");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return;
		}
		props.onLogin({email, password});
		resetForm();
	}
  return (
    <Popup onClose={props.onClose} isOpen={props.isOpen}>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Sign in</h2>
        <label className="form__input-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}

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
          required
          value={password}
					onChange={(e) => setPassword(e.target.value)}
        />
        <span className="form__input-error">Some error</span>
        <button className="button button_type_primary" type="submit">
          Sign in
        </button>
      </form>
      <div className="form__wrapper">
        <p>or</p>
        <button
          className="button-link"
          type="button"
          onClick={props.onSignUpClick}
        >
          Sign up
        </button>
      </div>
    </Popup>
  );
}

export default SignInPopup;
