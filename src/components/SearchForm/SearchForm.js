import React, { useState } from "react";
import "./SearchForm.css";
import useForm from "../Validation/useForm.js"
import { required } from "../Validation/rules";

function SearchForm(props) {
  const { handleSubmit, handleChange, values, errors } = useForm({
    onSubmit: submit,
    validationRules: {
      keyword: [required],
      // keyword: [required]
      // email: [required, validEmail]
    }
  });

  function submit(values) {
    props.onSearch(values.keyword);
  }
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
          value={values.keyword ?? ""}
          name="keyword"
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
