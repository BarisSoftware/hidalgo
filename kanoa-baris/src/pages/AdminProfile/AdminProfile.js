import React from "react";
import BaseForm from "../../formElements/BaseForm";
import InputEmails from "../../formElements/InputEmail";
import LlavesPublicas from "../../formElements/InputPublicKeys";
import InputNombre from "../../formElements/InputNombre";
import InputPass from "../../formElements/InputPass";
import InputUserName from "../../formElements/InputUserName";
import InputLastName from "../../formElements/InputLastName";
import ProfilePicInput from "../../formalForm/ProfilePicInput";
import LandsPicInput from "../../formalForm/LandscapePicInput";
import InputSubmit from "../../formElements/InputSubmit";
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
              < form className="admins">
                <InputEmails />
                <InputUserName />
                <InputNombre />
                <InputLastName />
                <LlavesPublicas />
                <InputPass />
                <div className="elem">
                  <ProfilePicInput />
                </div>
                {/* <div className="elem">
                  <LandsPicInput />
                </div> */}
                <InputSubmit />
              </form>
            }
          ></BaseForm>
        }
      />
    </>
  );
}

export default AdminProfile;
