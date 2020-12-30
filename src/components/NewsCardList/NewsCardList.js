import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import image from "../../images/card-img.png";

function NewsCardsList(props) {
  // const articles = [
  //   {
  //     image: image,
  //     date: "December 14, 2020",
  //     title: "Nostalgic Photos of Tourists in U.S. National Parks",
  //     keyword: "nature",
  //     text:
  //       "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
  //     source: "National parks traveler",
  //   },
  //   {
  //     image: image,
  //     date: "December 14, 2020",
  //     title: "Nostalgic Photos of Tourists in U.S. National Parks",
  //     keyword: "nature",
  //     text:
  //       "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
  //     source: "National parks traveler",
  //   },
  //   {
  //     image: image,
  //     date: "December 14, 2020",
  //     title: "Nostalgic Photos of Tourists in U.S. National Parks",
  //     keyword: "nature",
  //     text:
  //       "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
  //     source: "National parks traveler",
  //   },
  // ];
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
      <button className="newsCardList__btn">Show more</button>
    </section>
  );
}

export default NewsCardsList;
