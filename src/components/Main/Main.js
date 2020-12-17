import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SavedNews from '../SavedNews/SavedNews';
import NewsCardsList from '../NewsCardList/NewsCardList';



function Main(props) {
 
  
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          <Header onClick={props.onClick}/>
          <SearchForm />
        </div>
      </section>
      {/* <About />
      <SavedNews /> */}
      
    </>
  );
}
export default Main;
