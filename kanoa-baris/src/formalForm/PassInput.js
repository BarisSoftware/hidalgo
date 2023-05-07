import React from "react";

function PassInput(props) {
  return (
    <input
    className="pas"
      type="password"
      id="pass"
      name="pass"
      placeholder="Contraseña"
      required
    ></input>
  );
}

export default PassInput;
