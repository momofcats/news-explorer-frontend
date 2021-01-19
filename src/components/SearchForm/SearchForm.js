import React, { useCallback } from "react";
import "./SearchForm.css";
import useForm from "../Validation/useForm.js"
import { required } from "../Validation/rules";

function SearchForm(props) {
  const { handleSubmit, handleChange, handleInvalid, values, errors } = useForm({
    onSubmit: submit
  });

  function submit(values) {
    props.onSearch(values.keyword);
  }
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
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
          onInvalid={handleInvalid}
          value={values.keyword ?? ""}
          name="keyword"
          required
        />
        {errors.keyword && <span className="form__input-error">{errors.keyword}</span>}
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
