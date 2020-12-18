import React from "react";
import "./NotFound.css";
import notFound from "../../images/not-found.svg";

function NotFound() {
  return (
    <div className="notFound">
      <img className="notFound__icon"src={notFound} alt="icon"></img>
      <h2 className="notFound__title">Nothing found</h2>
      <p className="notFound__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}
export default NotFound;
