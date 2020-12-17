import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="searchForm">
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchForm__input-wrapper">
        <input className="searchForm__input" placeholder="Enter topic"/>
        <button className="button button_type_primary searchForm__button">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
