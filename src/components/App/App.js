import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCardsList from "../NewsCardList/NewsCardList";
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';

const App = () => {
    return (
        <>
        <Main />
        {/* <Footer />  */}
        </>
    )
};

export default withRouter(App);