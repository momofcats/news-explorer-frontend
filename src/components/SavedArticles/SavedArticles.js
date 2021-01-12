import React from "react";
import "./SavedArticles.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {MAXITEMS, TRUNCATEDITEMS} from "../../utils/constants";

function sortByFrequency(array) {
  let frequency = {};

  array.forEach(function (value) {
    frequency[value] = 0;
  });

  const uniques = array.filter(function (value) {
    return ++frequency[value] === 1;
  });

  return uniques.sort(function (a, b) {
    return frequency[b] - frequency[a];
  });
}

function SavedArticles({ savedNews }) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const keywords = savedNews
    .map((item) => item.keyword)
    .reduce((a, e) => {
      a.push(e.charAt(0).toUpperCase() + e.substr(1));
      return a;
    }, []);
  const sortedKeywords = sortByFrequency(keywords);
  const firstKeyword = sortedKeywords[0];
  const secondKeyword = sortedKeywords[1]
  const thirdKeyword =
    sortedKeywords.length > MAXITEMS
      ? `and ${sortedKeywords.length - TRUNCATEDITEMS} more`
      : sortedKeywords[2];

  return (
    <section className="savedArticles">
      <h1 className="savedArticles__title">Saved Articles</h1>
      <p className="savedArticles__text">
        {currentUser.name}, you have {savedNews.length} saved articles
      </p>
      <p>
        By keywords:{" "}
        <span className="savedArticles__accent">
          {firstKeyword}, {secondKeyword}{thirdKeyword !== undefined && ", "}{thirdKeyword}.
        </span>
      </p>
    </section>
  );
}

export default SavedArticles;
