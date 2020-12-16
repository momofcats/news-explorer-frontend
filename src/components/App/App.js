import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCardsList from "../NewsCardList/NewsCardList";
import InfoToolTip from '../InfoToolTip/InfoToolTip';
const App = () => {
    return (
        <>
        {/* <Main />
        <Footer /> */}
        <InfoToolTip />
        </>
    )
};

export default withRouter(App);