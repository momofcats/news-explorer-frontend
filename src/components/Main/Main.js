import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardsList from '../NewsCardList/NewsCardList';



function Main(props) { 
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          <Header onSignIn={props.onSignIn} menuButtonVisible={props.menuButtonVisible} />
          <SearchForm />
        </div>
      </section>
      <NewsCardsList />
      <About />
    </>
  );
}
export default Main;
