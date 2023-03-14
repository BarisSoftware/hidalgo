import React from "react";
import SideBar from "./SideBarFix";
import { Title, BaseContainer } from "./PageBase";
function CreateProyect(params) {
   return(
      <>
      <SideBar/>
      <Title text="Crear Proyecto"></Title>
      <BaseContainer child={<p>sdfgh</p>}>
      </BaseContainer>
      </>
   )
   
}

export default CreateProyect;
