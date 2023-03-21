import React from "react";
import MyProyect from "../HomeElements/MyProyect";
import { BaseContainer, SubTitle, Title } from "./PageBase";
import SideBar from "./SideBarFix";
function HomeFeed(props) {
  return (
    <>
      <SideBar />
      <Title text="HomeFeed" />
      <SubTitle text="Mis Proyectos" />
      <BaseContainer
        child={
          <span className="soleybox">
            <MyProyect
              nombre="Kanoa"
              descripcion="Respositorio de software libre con utilidad para recompensas"
              publickey="0x936a1F1d74F3FA60eE4044488011328f2E68dC88"
            />
          </span>
        }
      />
    </>
  );
}

export default HomeFeed;
