import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';

function Main() {
  return (
    <section className="main">
      <div className="main__overlay">
        <Header />
        <SearchForm />
      </div>
    </section>
  );
}
export default Main;
