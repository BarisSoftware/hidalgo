import React from "react";
import SideBar from "./SideBarFix";
import { Title, BaseContainer } from "./PageBase";
import InputNombre from "../formElements/InputNombre";
import InputDescripcion from "../formElements/InputDescripcion";
import InputPersonas from "../formElements/InputPersona";
import InputLicencia from "../formElements/InputLicencia";
import InputSubmit from "../formElements/InputSubmit";
import LlavesPublicas from "../formElements/InputPublicKeys";
import InputFileZip from "../formElements/InputFileZip";
import InputCategory from "../formElements/InputCategory";
import InputOSReqs from "../formElements/InputOSReqs";
import PopUp from "../HomeElements/PopUp";
import LookSomeone from "../HomeElements/LookSomeone";
import { useState } from "react";

function CreateProyect(params) {
  const [tiggerAdmin, setTriggerAdmin] = useState(false);
  const [tiggerColab, setTriggerColab] = useState(false);
  return (
    <>
      <SideBar />
      <Title text="Crear Proyecto"></Title>
      <BaseContainer
        child={
          <form
            method="POST"
            action="/createProjectreq"
            encType="multipart/form-data"
          >
            <InputNombre></InputNombre>
            <InputFileZip></InputFileZip>
            <InputDescripcion></InputDescripcion>
            <LlavesPublicas></LlavesPublicas>
            <InputLicencia></InputLicencia>
            <hr />
            <h3>Avanzado</h3>
            <hr />
            {/* <InputPersonas
              type="Administradores"
              butid="addA"
              buttype="addA"
              setOpen={setTriggerAdmin}
              demo={true}
            ></InputPersonas>
            <InputPersonas
              type="Colaboradores"
              butid="addC"
              buttype="addC"
              setOpen={setTriggerColab}
              demo={true}
            ></InputPersonas> */}
            <InputCategory />
            <InputOSReqs />
            <InputSubmit
              text="Crear Proyecto"
              id="submit"
              name="submit"
            ></InputSubmit>
          </form>
        }
      ></BaseContainer>
      <PopUp trigger={tiggerAdmin} setClose={setTriggerAdmin}>
        <LookSomeone title="Administradores" type="admin"></LookSomeone>
      </PopUp>
      <PopUp trigger={tiggerColab} setClose={setTriggerColab}>
        <LookSomeone title="Colaboradores" type="colab"></LookSomeone>
      </PopUp>
    </>
  );
}

export default CreateProyect;
