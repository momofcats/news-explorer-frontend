import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import image from '../../images/card-img.png';

function Main() {
 
  const articles = [
    {
      image: image,
      date: "December 14, 2020",
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      keyword: "nature",
      text:
        "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
      source: "National parks traveler",
    },
    {
      image: image,
      date: "December 14, 2020",
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      keyword: "nature",
      text:
        "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
      source: "National parks traveler",
    },
    {
      image: image,
      date: "December 14, 2020",
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      keyword: "nature",
      text:
        "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
      source: "National parks traveler",
    },
    {
      image: image,
      date: "December 14, 2020",
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      keyword: "nature",
      text:
        "The cybersecurity landscape changed dramatically in 2020. As organizations scrambled to keep employees connected in a world of remote everything, threat actors capitalized on the chaos. Between January and October, 36 billion records were exposed in data brea…",
      source: "National parks traveler",
    }
  ]
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          <Header />
          <SearchForm />
        </div>
      </section>
      <About />
      <ul className="gallery">
				{articles.map((article) => (
					<NewsCard
            article={article}
            isLoggedIn="true"
					/>
				))}
			</ul>
    </>
  );
}
export default Main;
