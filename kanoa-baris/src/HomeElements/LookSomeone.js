import React from "react";

function PersonaInProyect(props) {
  return (
    <div className="persona-proyect">
      <img src="..." alt="Persona aatar" />
      <p>{props.username}</p>
    </div>
  );
}

function LookSomeone(props) {
  return (
    <div className="look-someone">
      <h3>{props.title}</h3>
      <input type="text" placeholder="nombre de usuario" />
      <input type="submit" name={props.type} value="Buscar" />
      <div className="someone-result">{props.personas}</div>
    </div>
  );
}

export default LookSomeone;
