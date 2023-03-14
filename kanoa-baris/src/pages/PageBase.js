import React from "react";

function Title(props) {
  return <h1 className="titulo">{props.text}</h1>;
}

function BaseContainer(props) {
  return (
    <div className="contenedor">
      <div className="contenido">{props.child}</div>
    </div>
  );
}

export {Title, BaseContainer};