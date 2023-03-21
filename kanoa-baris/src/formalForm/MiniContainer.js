import React from "react";

function MiniContainer(props) {
  return (
    <div className="formalFormContainer">
      <h3 align="left">{props.title}</h3>
      {props.child}
    </div>
  );
}

export default MiniContainer;
