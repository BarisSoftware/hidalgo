import React from "react";

function InputNombre(props) {
  return (
    <div className="elem funform">
      <label htmlFor="cantidad">Cantidad</label>
      <div className="input">
        <input type="number" id="cantidad" name="cantidad" required></input>
      </div>
    </div>
  );
}

export default InputNombre;
