import React from "react";

function InputEmails(props) {
  return (
    <div className="elem funform">
      <label htmlFor="correo">Correo</label>
      <div className="input">
        <input
          type="email"
          id="correo"
          name="correo"
          value={props.value}
          required
        ></input>
      </div>
    </div>
  );
}

export default InputEmails;
