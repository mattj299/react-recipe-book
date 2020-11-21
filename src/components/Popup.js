import React from "react";

function Popup(props) {
  const { popupText } = props;

  return (
    <div className="popup-container hide">
      <div className="popup">
        <p>{popupText}</p>
      </div>
    </div>
  );
}

export default Popup;
