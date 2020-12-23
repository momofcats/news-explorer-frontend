import React from "react";
import "./NewsCard.css";

function NewsCard(props) {
  const article = props.article;
  return (
    <li className="card">
      <img className="card__img" src={article.image} alt="article" />
      {props.children}
      <div className="card__description-wrapper">
        <p className="card__date">{article.date}</p>
        <h2 className="card__title">{article.title}</h2>
        <p className="card__text">{article.text}</p>
        <p className="card__source">{article.source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
