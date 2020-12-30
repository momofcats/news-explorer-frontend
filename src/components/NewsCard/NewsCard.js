import React from "react";
import "./NewsCard.css";

function NewsCard(props) {
  const article = props.article;
  return (
    <li className="card">
      <img className="card__img" src={article.urlToImage} alt="article" />
      {props.children}
      <div className="card__description-wrapper">
        <p className="card__date">{article.publishedAt}</p>
        <h2 className="card__title">{article.title}</h2>
        <p className="card__text">{article.description}</p>
        <p className="card__source">{article.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
