import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';

const App = () => {
    return (
        <>
        <Header />
        </>
    )
};

export default withRouter(App);