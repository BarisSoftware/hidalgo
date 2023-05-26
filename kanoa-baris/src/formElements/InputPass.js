import React from "react";

function InputPass(props) {
  return (
    <div className="elem funform">
      <label htmlFor="correo">Contraseña</label>
      <div className="input">
        <input type="password" id="pass" name="pass" required></input>
      </div>
    </div>
  );
}

export default InputPass;
