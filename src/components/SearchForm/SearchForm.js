import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const [keyword, setKeyword] = useState("");
  const resetForm = () => {
    setKeyword("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      return;
    }
    props.onSearch(keyword);
    resetForm();
  };
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchForm__input-wrapper">
        <input className="searchForm__input" placeholder="Enter topic" onChange={(e) => setKeyword(e.target.value)}/>
        <button
          type="submit"
          className="searchForm__button button button_type_primary"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
