import React from "react";

function InputNombre(props) {
  return (
    <div className="elem">
      <label htmlFor="nombre">Nombre</label>
      <div className="input">
        <input type="text" id="nombre" name="nombre" required></input>
      </div>
    </div>
  );
}

export default InputNombre;
