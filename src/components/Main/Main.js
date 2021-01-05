import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardsList from "../NewsCardList/NewsCardList";
import NotFound from '../NotFound/NotFound';
import Preloader from "../Preloader/Preloader";

function Main(props) {
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          {props.loggedIn ? (
            <SavedNewsHeader
              onSignIn={props.onSignIn}
              menuButtonVisible={props.menuButtonVisible}
            />
          ) : (
            <Header
              onSignIn={props.onSignIn}
              menuButtonVisible={props.menuButtonVisible}
            />
          )}
          <SearchForm onSearch={props.onSearch}/>
        </div>
      </section>
      {props.isLoading && <Preloader />}
      {props.isSearching && <NewsCardsList errorMessage={props.errorMessage} articles={props.articles} isShowMoreVisible={props.isShowMoreVisible} onShowMore={props.onShowMore}/> }
      {props.isNothingFound && <NotFound />}
      
      <About />
    </>
  );
}
export default Main;
