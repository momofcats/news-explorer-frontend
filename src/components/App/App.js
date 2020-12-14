import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <>
        <Main />
        <Footer />
        </>
    )
};

export default withRouter(App);