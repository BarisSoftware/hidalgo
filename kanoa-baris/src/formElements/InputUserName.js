import React from "react";

function InputUserName(props) {
  return (
    <div className="elem funform">
      <label htmlFor="username">Nombre de Usuario</label>
      <div className="input">
        <input type="text" id="username" name="username" required></input>
      </div>
    </div>
  );
}

export default InputUserName;
