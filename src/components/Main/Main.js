import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SavedNews from '../SavedNews/SavedNews';
import NewsCardsList from "../NewsCardList/NewsCardList";


function Main() {
 
  
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          <Header />
          <SearchForm />
        </div>
      </section>
      <About />
      <SavedNews />
      <NewsCardsList />
      
    </>
  );
}
export default Main;
