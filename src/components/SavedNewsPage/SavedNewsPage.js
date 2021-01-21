import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SavedArticles from "../SavedArticles/SavedArticles";

function SavedNewsPage(props) {
  return (
    <>
      <SavedNewsHeader
        onLogOut={props.onLogOut}
        menuButtonVisible={props.menuButtonVisible}
        isLoggedIn={props.isLoggedIn}
      />
      <SavedArticles savedNews={props.savedNews} />
      <SavedNews savedNews={props.savedNews} onDelete={props.onDelete} />
    </>
  );
}

export default SavedNewsPage;
