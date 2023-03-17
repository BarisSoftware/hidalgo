import React from "react";

function PublicKeyInput(props) {
  return (
    <div className="formalFormContainer">
      <h3 align="left">Llaves públicas</h3>
      <input type="text" placeholder="Últimas 10 letras" required></input>
      <input type="button" value="+"></input>
    </div>
  );
}

export default PublicKeyInput;
