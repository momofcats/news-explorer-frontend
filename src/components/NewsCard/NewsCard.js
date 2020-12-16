import React from "react";
import "./NewsCard.css";

function NewsCard(props) {
    const article = props.article;
  return (
    <li className="card">
      <img
        className="card__img"
        src={article.image}
        alt="article"
      />
      {props.isLoggedIn ? (
        <div className="card__buttons-wrapper">
          <p className="card__keyword">{article.keyword}</p>
          <button type="button" className="card__button">
            <svg
              className="card__button-trash"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 3H9v2H3v2h18V5h-6V3zM5 9v11a2 2 0 002 2h10a2 2 0 002-2V9h-2v11H7V9H5zm4 0v9h2V9H9zm4 0v9h2V9h-2z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button type="button" className="card__button">
          <svg
            className="card__button-bookmark"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.382 15.714L6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486z" />
          </svg>
        </button>
      )}
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
