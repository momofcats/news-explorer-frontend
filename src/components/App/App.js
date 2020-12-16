import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NewsCardsList from "../NewsCardList/NewsCardList";
import Popup from '../Popup/Popup';

const App = () => {
    return (
        <>
        {/* <Main />
        <Footer /> */}
        <Popup />
        </>
    )
};

export default withRouter(App);