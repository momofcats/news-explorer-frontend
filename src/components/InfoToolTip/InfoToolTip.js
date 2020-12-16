import React from "react";
import "./InfoToolTip.css";
import Popup from "../Popup/Popup";

function InfoToolTip() {
  return (
    <div className="infoToolTip">
      <Popup>
        <p className="infoToolTip__text">
          Registration successfully completed!
        </p>
        <button className="infoToolTip__btn" type="button">
          Sign in
        </button>
      </Popup>
    </div>
  );
}

export default InfoToolTip;
