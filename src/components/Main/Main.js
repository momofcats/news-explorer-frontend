import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardsList from "../NewsCardList/NewsCardList";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function Main(props) {
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          <Header
            onSignIn={props.onSignIn}
            menuButtonVisible={props.menuButtonVisible}
            isLoggedIn={props.isLoggedIn}
            onLogOut={props.onLogOut}
          />
          <SearchForm onSearch={props.onSearch} />
        </div>
      </section>
      {props.isNothingFound && <NotFound>{props.errorMessage}</NotFound>}
      {props.isLoading && <Preloader />}
      {props.isSearching && (
        <NewsCardsList
          articles={props.articles}
          isShowMoreVisible={props.isShowMoreVisible}
          onShowMore={props.onShowMore}
          isLoggedIn={props.isLoggedIn}
          onBookmarkClick={props.onBookmarkClick}
        />
      )}
      
      <About />
    </>
  );
}
export default Main;
