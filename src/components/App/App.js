import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCardsList from "../NewsCardList/NewsCardList";
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';


const App = () => {
    const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = useState(false);
    const [isSignInPopUpOpen, setIsSignInPopupOpen] = useState(false);
    const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
    function closeAllPopups() {
        setIsInfoToolTipPopupOpen(false);
        setIsSignInPopupOpen(false);
        setIsSignUpPopupOpen(false);
    }
    function handleSignUpSuccess() {
        setIsInfoToolTipPopupOpen(true);
    }

    function handleSignUpClick() {
        setIsSignInPopupOpen(false);
        setIsSignUpPopupOpen(true);
    }

    function handleSignInClick() {
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
        <Main onClick={handleSignInClick}/>
        <NewsCardsList />
        <Footer />
        <SignInPopup onClose={closeAllPopups} isOpen={isSignInPopUpOpen} onSignUpClick={handleSignUpClick}/>
        <SignUpPopup onClose={closeAllPopups} isOpen={isSignUpPopupOpen} onSignInClick={handleSignInClick}/>
        <InfoToolTip onClose={closeAllPopups} isOpen={isInfoToolTipPopupOpen} />
        </>
    )
};

export default withRouter(App);