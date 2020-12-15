import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
function Main() {
  const article = {
    image:
      "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg",
    date: "December 14, 2020",
    title: "Tabby Cat",
    keyword: "cats",
    text:
      "Sasha is a brave old cat. He has the most soft fur. He enjoys being ouside. His favorite food is chicken",
    source: "The Cat Post",
  };
  return (
    <>
      <section className="main">
        <div className="main__overlay">
          <Header />
          <SearchForm />
        </div>
      </section>
      <About />
      <NewsCard
        isLoggedIn="true"
        image={article.image}
        keyword={article.keyword}
        date={article.date}
        title={article.title}
        text={article.text}
        source={article.source}
      />
    </>
  );
}
export default Main;
