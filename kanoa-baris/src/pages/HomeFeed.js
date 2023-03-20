import React from "react";
import { BaseContainer, SubTitle, Title } from "./PageBase";
import SideBar from "./SideBarFix";
function HomeFeed(props) {
  return (
    <>
      <SideBar />
      <Title text="HomeFeed" />
      <SubTitle text="Mis Proyectos" />
      <BaseContainer child={<span className="soleybox">Dude</span>} />
    </>
  );
}

export default HomeFeed;
