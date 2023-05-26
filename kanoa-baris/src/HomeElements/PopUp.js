import React from "react";

function PopUp(props) {
  if (props.trigger) {
    return (
      <div className="popup">
        <div className="inside-popup">
          <button className="close-popup" onClick={() => props.setClose(false)}>
            Cerrar
          </button>
          {props.children}
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default PopUp;
