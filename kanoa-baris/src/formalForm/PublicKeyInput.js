import React from "react";

function PublicKeyInput(props) {
  return (
    <div className="formalFormContainer">
      <h3 align="left">Llaves públicas</h3>
      <input
      className="kay"
        type="text"
        id="publickey"
        name="publickey"
        placeholder="Últimas 10 letras"
        required
      ></input>
       <input className="add" type="button" value="+"></input>
     
    </div>
  );
}

export default PublicKeyInput;
