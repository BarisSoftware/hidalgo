import React from "react";
import MiniContainer from "./MiniContainer";
function LandsPicInput(props) {
  return (
    <MiniContainer
      title="Foto de Fondo"
      child={
        <input
          className="formital"
          type="file"
          id="lanpic"
          name="lanpic"
          accept=".png"
        ></input>
      }
    ></MiniContainer>
  );
}

export default LandsPicInput;
