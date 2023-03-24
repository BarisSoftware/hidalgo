import React from "react";

import avatar1 from "../imagenes/avatar1.png";
import avatar2 from "../imagenes/avatar2.png";
import avatar3 from "../imagenes/avatar3.png";
import avatar4 from "../imagenes/avatar4.png";
import avatar5 from "../imagenes/avatar5.png";
import avatar6 from "../imagenes/avatar6.png";

function InputPersonas(props) {
  //En el div imagen va la imagen de las personas (avatar)

  let imaginis = <div className="people-container"></div>;

  if (props.demo == true) {
    imaginis = (
      <div className="people-container">
        <img src={avatar1} />
        <img src={avatar2} />
        <img src={avatar3} />
      </div>
    );
  }

  return (
    <div className="elem">
      <label htmlFor={props.type}>{props.type}</label>
      {imaginis}
      <div className="button">
        <input
          id={props.butid}
          className="clasic"
          name={props.buttype}
          type="button"
          value="+"
        ></input>
      </div>
    </div>
  );
}

export default InputPersonas;
