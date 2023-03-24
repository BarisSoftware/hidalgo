import React from "react";
import MyProyect from "../HomeElements/MyProyect";
import { BaseContainer, SubTitle, Title } from "./PageBase";
import SideBar from "./SideBarFix";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

const bringMine = async () => {
  await client.post("/myProjectsreq").then((response) => {
    console.log(response);
  });
};

function HomeFeed(props) {
  bringMine();
  return (
    <>
      <SideBar />
      <Title text="HomeFeed" />
      <SubTitle text="Mis Proyectos" />
      <BaseContainer
        child={
          <MyProyect
            nombre="Kanoa"
            descripcion="Respositorio de software libre con utilidad para recompensas"
            publickey="0x936a1F1d74F3FA60eE4044488011328f2E68dC88"
          />
        }
      />
    </>
  );
}

export default HomeFeed;
