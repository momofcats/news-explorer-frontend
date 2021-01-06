import React, {useState} from "react";
import Popup from "../Popup/Popup";

function SignUpPopup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

	const resetForm = () => {
		setEmail("");
    setPassword("");
    setName("");
	}

  const handleSubmit = (e) => {
    e.preventDefault();
		props.onRegister({ email, password, name });
		resetForm();
  }
  return (
    <Popup onClose={props.onClose} isOpen={props.isOpen}>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Sign up</h2>
        <label className="form__input-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <label className="form__input-label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          className="form__input"
          type="text"
          placeholder="Enter your username"
          required
          minLength="2"
          maxLength="30"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="form__input-error">Some error</span>
        <button className="button button_type_primary" type="submit">
          Sign up
        </button>
      </form>
      <div className="form__wrapper">
        <p>or</p>
        <button
          className="button-link"
          type="button"
          onClick={props.onSignInClick}
        >
          Sign in
        </button>
      </div>
    </Popup>
  );
}

export default SignUpPopup;
