import React from "react";
import SideBar from "./SideBarFix";
import { Title, BaseContainer } from "./PageBase";
import BaseForm from "../formElements/BaseForm";
import InputNombre from "../formElements/InputNombre";
import InputDescripcion from "../formElements/InputDescripcion";
import InputPersonas from "../formElements/InputPersona";
import InputLicencia from "../formElements/InputLicencia";
import InputSubmit from "../formElements/InputSubmit";
import LlavesPublicas from "../formElements/InputPublicKeys";
import InputFileZip from "../formElements/InputFileZip";

function CreateProyect(params) {
  return (
    <>
      <SideBar />
      <Title text="Crear Proyecto"></Title>
      <BaseContainer
        child={
          <BaseForm
            method="POST"
            action="/createProjectreq"
            child={
              <span className="solybox">
                <InputNombre></InputNombre>
                <InputFileZip></InputFileZip>
                <InputDescripcion></InputDescripcion>
                <LlavesPublicas></LlavesPublicas>
                <InputLicencia></InputLicencia>
                <InputPersonas
                  type="Administradores"
                  butid="addA"
                  buttype="addA"
                  demo={true}
                ></InputPersonas>
                <InputPersonas
                  type="Colaboradores"
                  butid="addC"
                  buttype="addC"
                  demo={true}
                ></InputPersonas>
                <InputSubmit
                  text="Crear Proyecto"
                  id="Crear Proyecto"
                  name="Crear Proyecto"
                ></InputSubmit>
              </span>
            }
          ></BaseForm>
        }
      ></BaseContainer>
    </>
  );
}

export default CreateProyect;
