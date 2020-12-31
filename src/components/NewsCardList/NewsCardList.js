import React, { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardsList(props) {
  const articles = props.articles;
  const limit = 3;
  const length = articles.length;
  const [index, setIndex] = useState(3);
  const [articlesToShow, setArticlesToShow] = useState(articles.slice(0, limit));  
  const updateArray = (start, end) => {
    const newArticles = articles.slice(start, end);
    setArticlesToShow([...articlesToShow, ...newArticles]);
  }
  const handleShowMore = () => {
    updateArray(index, index + limit);
    setIndex(index + limit);
  }
 
  return (
    <section className="newsCardList">
      <h3 className="newsCardList__title">Search results</h3>
      <ul className="newsCardList__gallery">
        {articlesToShow.map((article, id) => (
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
      {index <= length && <button className="newsCardList__btn" type="button" onClick={handleShowMore}>Show more</button>}
    </section>
  );
}

export default NewsCardsList;
