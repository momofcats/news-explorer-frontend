import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Search from '../Search/Search';

function Main() {
  return (
    <section className="main">
      <div className="main__overlay">
        <Header />
        <Search />
      </div>
    </section>
  );
}
export default Main;
