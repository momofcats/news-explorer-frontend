import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SavedArticles from "../SavedArticles/SavedArticles";

function SavedNewsPage(props) {
  return (
    <>
      <SavedNewsHeader onSignIn={props.onSignIn} menuButtonVisible={props.menuButtonVisible} isLoggedIn={props.isLoggedIn} />
      <SavedArticles />
      <SavedNews />
    </>
  );
}

export default SavedNewsPage;
