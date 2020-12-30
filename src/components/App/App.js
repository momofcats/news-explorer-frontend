import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import Footer from "../Footer/Footer";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import newsApi from "../../utils/NewsApi";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = useState(false);
  const [isSignInPopUpOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(true);
  const [articles, setArticles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  function closeAllPopups() {
    setIsInfoToolTipPopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsMenuButtonVisible(true);
  }
  function handleNewsSearch(keyword) {
    setIsloading(true);
    newsApi
      .searchNews(keyword)
      .then((res) => {
        setArticles(res.articles);
        localStorage.setItem("storedArticles", JSON.stringify(articles));
        console.log(articles);
        setIsloading(false);
        setIsSearching(true);
      })
      .catch((err) => {
        console.log(err);
      });
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
            onSearch={handleNewsSearch}
            onSignIn={handleSignInClick}
            menuButtonVisible={isMenuButtonVisible}
            isLoggedIn={false}
            articles={articles}
            isSearching={isSearching}
            isLoading={isLoading}
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
