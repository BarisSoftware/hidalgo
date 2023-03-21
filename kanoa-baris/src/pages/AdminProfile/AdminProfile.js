import React from "react";
import EmailInput from "../../formalForm/EmailInput";
import BaseForm from "../../formElements/BaseForm";
import InputEmails from "../../formElements/InputEmail";
import LlavesPublicas from "../../formElements/InputPublicKeys";
import InputNombre from "../../formElements/InputNombre";
import { BaseContainer, Title } from "../PageBase";
import SideBar from "../SideBarFix";
function AdminProfile(props) {
  return (
    <>
      <SideBar />
      <Title text="Configuración" />
      <BaseContainer
        child={
          <BaseForm
            child={
              <>
                <InputNombre />
                <InputEmails />
                <LlavesPublicas />
              </>
            }
          ></BaseForm>
        }
      />
    </>
  );
}

export default AdminProfile;
