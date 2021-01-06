import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, useHistory  } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import Footer from "../Footer/Footer";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const App = () => {
  const limit = 3;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = useState(false);
  const [isSignInPopUpOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(true);
  const [articles, setArticles] = useState([]);
  const length = articles.length;
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [articlesToShow, setArticlesToShow] = useState([]);
  const [index, setIndex] = useState(limit);
  const [isShowMoreVisible, setIsShowMoreVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});

  function handleRegister(credentials) {
    mainApi
      .register(credentials)
      .then(() => {
        closeAllPopups();
        handleSignUpSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(credentials) {
    mainApi.authorize(credentials)
    .then((data) => {
      localStorage.setItem("jwt", data.token);
    })
    .then(() => {
      setIsLoggedIn(true);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    history.push("/");
  }

  function closeAllPopups() {
    setIsInfoToolTipPopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsMenuButtonVisible(true);
  }
  function handleNewsSearch(keyword) {
    localStorage.clear();
    setIsNothingFound(false);
    setIsShowMoreVisible(true);
    setIsloading(true);
    setIndex(limit);
    newsApi
      .searchNews(keyword)
      .then((res) => {
        const data = res.articles;
        if (data.length === 0) {
          setIsloading(false);
          setIsNothingFound(true);
          setIsSearching(false);
        } else {
          setArticles(data);
          setArticlesToShow(data.slice(0, limit));
          localStorage.setItem("storedArticles", JSON.stringify(data));
          setIsloading(false);
          setIsSearching(true);
        }
      })
      .catch((err) => {
        setIsloading(false);
        setIsShowMoreVisible(false);
        setIsSearching(true);
        setErrorMessage(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later"
        );
      });
  }

  function updateArticlesToShow(start, end) {
    const newArticles = articles.slice(start, end);
    setArticlesToShow([...articlesToShow, ...newArticles]);
  }

  function handleShowMore() {
    updateArticlesToShow(index, index + limit);
    setIndex(index + limit);
    if (index >= length - 1) {
      setIsShowMoreVisible(false);
    }
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
    closeAllPopups();
    setIsSignInPopupOpen(true);
  }

  function handleEscKey(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("storedArticles"));
    if (storedArticles) {
      setArticles(storedArticles);
      setArticlesToShow(storedArticles.slice(0, limit));
      setIsSearching(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/saved-news" exact>
          <SavedNewsPage
            onSignIn={handleSignInClick}
            menuButtonVisible={isMenuButtonVisible}
            isLoggedIn={() => setIsLoggedIn(true)}
            onLogOut={handleLogOut}
          />
        </Route>
        <Route path="/">
          <Main
            errorMessage={errorMessage}
            isShowMoreVisible={isShowMoreVisible}
            onShowMore={handleShowMore}
            isNothingFound={isNothingFound}
            onSearch={handleNewsSearch}
            onSignIn={handleSignInClick}
            menuButtonVisible={isMenuButtonVisible}
            isLoggedIn={isLoggedIn}
            articles={articlesToShow}
            isSearching={isSearching}
            isLoading={isLoading}
            onLogOut={handleLogOut}
          />
        </Route>
      </Switch>
      </CurrentUserContext.Provider>
      <Footer />
      <SignInPopup
        onClose={closeAllPopups}
        isOpen={isSignInPopUpOpen}
        onSignUpClick={handleSignUpClick}
        onLogin={handleLogin}
      />
      <SignUpPopup
        onClose={closeAllPopups}
        isOpen={isSignUpPopupOpen}
        onSignInClick={handleSignInClick}
        onRegister={handleRegister}
      />
      <InfoToolTip
        onClose={closeAllPopups}
        isOpen={isInfoToolTipPopupOpen}
        onSignInClick={handleSignInClick}
      />
    </>
  );
};

export default withRouter(App);
