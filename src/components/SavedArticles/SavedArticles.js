import React from "react";
import "./SavedArticles.css";

function SavedArticles() {
  return (
    <section className="savedArticles">
      <h1 className="savedArticles__title">Saved Articles</h1>
      <p className="savedArticles__text">Elise, you have 5 saved articles</p>
      <p>
        By keywords:{" "}
        <span className="savedArticles__accent">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
}

export default SavedArticles;
