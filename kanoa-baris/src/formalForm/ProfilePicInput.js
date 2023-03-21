import React from "react";
import MiniContainer from "./MiniContainer";
function ProfilePicInput(props) {
  /*  return (
    <MiniContainer
      title="Foto de Perfil"
      child={
        <input
          className="formital"
          type="file"
          id="propic"
          name="propic"
          accept=".png"
        ></input>
      }
    ></MiniContainer>
  );*/

  return (
    <input
      className="formital"
      type="file"
      id="propic"
      name="propic"
      accept=".png"
    ></input>
  );
}

export default ProfilePicInput;
