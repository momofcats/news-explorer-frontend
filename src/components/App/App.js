import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import Footer from "../Footer/Footer";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = useState(false);
  const [isSignInPopUpOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(true);
  function closeAllPopups() {
    setIsInfoToolTipPopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsMenuButtonVisible(true);
  }
  function handleSignUpSuccess() {
    setIsInfoToolTipPopupOpen(true);
  }

  function handleSignUpClick() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(true);
  }

  function handleSignInClick() {
    setIsMenuButtonVisible(false);
    setIsSignUpPopupOpen(false);
    setIsSignInPopupOpen(true);
  }
  function handleEscKey(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <>
      <Switch>
        <Route path="/saved-news" exact>
          <SavedNewsPage
            onSignIn={handleSignInClick}
            menuButtonVisible={isMenuButtonVisible}
            isLoggedIn={() => setIsLoggedIn(true)}
          />
        </Route>
        <Route path="/">
          <Main
            onSignIn={handleSignInClick}
            menuButtonVisible={isMenuButtonVisible}
            isLoggedIn={false}
          />
        </Route>
      </Switch>
      <Footer />
      <SignInPopup
        onClose={closeAllPopups}
        isOpen={isSignInPopUpOpen}
        onSignUpClick={handleSignUpClick}
      />
      <SignUpPopup
        onClose={closeAllPopups}
        isOpen={isSignUpPopupOpen}
        onSignInClick={handleSignInClick}
      />
      <InfoToolTip onClose={closeAllPopups} isOpen={isInfoToolTipPopupOpen} />
    </>
  );
};

export default withRouter(App);
