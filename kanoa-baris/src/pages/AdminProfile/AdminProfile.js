import React from "react";
import { useEffect, useState } from "react";
import BaseForm from "../../formElements/BaseForm";
import InputEmails from "../../formElements/InputEmail";
import LlavesPublicas from "../../formElements/InputPublicKeys";
import InputNombre from "../../formElements/InputNombre";
import InputPass from "../../formElements/InputPass";
import InputUserName from "../../formElements/InputUserName";
import InputLastName from "../../formElements/InputLastName";
import ProfilePicInput from "../../formalForm/ProfilePicInput";
import InputSubmit from "../../formElements/InputSubmit";
import { BaseContainer, Title } from "../PageBase";
import SideBar from "../SideBarFix";
import axios from "axios";

function AdminProfile() {
  const [data, setData] = useState({
    correo: "no email",
    userName: "no username",
    name: "no name",
    lastName: "no lastname",
    publicKeys: [],
    picProfile: "no pro",
  });

  useEffect(() => {
    axios
      .post("http://localhost:3000/adminProReq")
      .then((response) => {
        console.log("admin ");
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  return (
    <>
      <SideBar />
      <Title text="Configuración" />
      <BaseContainer
        child={
          <BaseForm
            child={
              <>
                <InputEmails value={data.correo} />
                <InputUserName value={data.userName} />
                <InputNombre value={data.name} />
                <InputLastName value={data.lastName} />
                <InputPass />
                <LlavesPublicas value={data.publicKeys} />
                <div className="elem">
                  <ProfilePicInput />
                </div>
                {/* <div className="elem">
                  <LandsPicInput />
                </div> */}
                <InputSubmit />
              </>
            }
          ></BaseForm>
        }
      />
    </>
  );
}

export default AdminProfile;
