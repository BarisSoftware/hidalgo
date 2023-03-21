import React from "react";
import MiniContainer from "./MiniContainer";
function ProfilePicInput(props) {
  return (
    <MiniContainer
      title="Foto de Perfil"
      child={<input className="formital" type="file" accept=".png"></input>}
    ></MiniContainer>
  );
}

export default ProfilePicInput;
