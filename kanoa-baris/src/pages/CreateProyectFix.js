import React from "react";
import SideBar from "./SideBarFix";
import { Title, BaseContainer } from "./PageBase";
import BaseForm from "../formElements/BaseForm";
import InputNombre from "../formElements/InputNombre";
import InputDescripcion from "../formElements/InputDescripcion";
import InputPersonas from "../formElements/InputPersona";
import InputLicencia from "../formElements/InputLicencia";
import InputSubmit from "../formElements/InputSubmit";

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
                <InputDescripcion></InputDescripcion>
                <InputLicencia></InputLicencia>
                <InputPersonas></InputPersonas>
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
