import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardsList(props) {
  return (
    <section className="newsCardList">
      <h3 className="newsCardList__title">Search results</h3>
      <ul className="newsCardList__gallery">
        {props.articles.map((article, id) => (
          <NewsCard article={article} key={id}>
            <div className="card__buttons-wrapper card__buttons-wrapper_placement_right">
              <button type="button" className="card__button">
                <svg
                  className="card__button-bookmark"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.382 15.714L6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486z" />
                </svg>
                <span className="card__tooltip-text">Sign in to save articles</span>
              </button>
            </div>
          </NewsCard>
        ))}
      </ul>
      {props.isShowMoreVisible && <button className="newsCardList__btn" type="button" onClick={props.onShowMore}>Show more</button>}
    </section>
  );
}

export default NewsCardsList;
