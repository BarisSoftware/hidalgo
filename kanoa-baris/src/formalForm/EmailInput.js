import React from "react";

function EmailInput(props) {
  return (
    <input
      className="form"
      type="email"
      id="correo"
      name="correo"
      placeholder="Email"
      required
    ></input>
  );
}

export default EmailInput;
