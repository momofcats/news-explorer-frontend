import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <button
          className="popup__btn"
          type="button"
          onClick={props.onClose}
        ></button>
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
