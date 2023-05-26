import React from "react";

function UserNameInput(props) {
  return (
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Nombre de Usuario"
      required
    ></input>
  );
}

export default UserNameInput;
