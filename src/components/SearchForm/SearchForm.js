import React, { useState } from "react";
import "./SearchForm.css";
import useForm from "../Validation/useForm";

function SearchForm(props) {
  // const [values, setValues] = useState({ keyword: "" });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(values.keyword);
  //   props.onSearch(values.keyword);
  // };
  const { handleSubmit, handleChange, values } = useForm(props.onSearch);

  return (
    <form className="searchForm" onSubmit={handleSubmit} noValidate>
      <h1 className="searchForm__title">What's going on in the world?</h1>
      <p className="searchForm__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchForm__input-wrapper">
        <input
          className="searchForm__input"
          placeholder="Enter topic"
          onChange={handleChange}
          value={values.keyword}
          name="keyword"
        />
        <span className="form__input-error">Some error</span>
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
