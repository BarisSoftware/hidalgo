import React from "react";

function InputNombre(props) {
  return (
    <div className="elem funform">
      <label htmlFor="nombre">Nombre</label>
      <div className="input">
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={props.value}
          required
        ></input>
      </div>
    </div>
  );
}

export default InputNombre;
