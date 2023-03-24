import React from "react";

function InputLastName(props) {
  return (
    <div className="elem funform">
      <label htmlFor="lastName">Apellidos</label>
      <div className="input">
        <input type="text" id="lastName" name="lastName" required></input>
      </div>
    </div>
  );
}

export default InputLastName;
