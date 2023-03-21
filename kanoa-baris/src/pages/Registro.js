import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBarFix";
import BottomLink from "../formalForm/BottomLink";
import EmailInput from "../formalForm/EmailInput";
import UserNameInput from "../formalForm/UserNameInput";
import NameInput from "../formalForm/NameInput";
import LastNameInput from "../formalForm/LastNameInput";
import PassInput from "../formalForm/PassInput";
import PassConfirmatioInput from "../formalForm/PassConfirmationInput";
import TecnologiasInput from "../formalForm/TecnologiasInput";
import PublicKeyInput from "../formalForm/PublicKeyInput";
import SubmitButton from "../formalForm/SubmitButton";
import ProfilePicInput from "../formalForm/ProfilePicInput";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function Registro() {
  const navigate = useNavigate();

  async function getPost() {
    console.log("Get post");
    const response = await client.post("/regquest", {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      pass: document.getElementById("pass").value,
    });
    if (response.data.result) {
      navigate("/login");
    }
    console.log(response);
  }

  return (
    <div className="forms" id="Registro">
      <NavBar text="Home" link="/"></NavBar>
      <div className="body">
        <div className="formulario">
          <h1>Registro</h1>
          <form className="form" method="post" action="/regquest">
            <EmailInput />
            <UserNameInput />
            <NameInput />
            <LastNameInput />
            <PassInput />
            <PassConfirmatioInput />
            {/* <TecnologiasInput /> */}
            <PublicKeyInput />
            <ProfilePicInput />
            <BottomLink
              text="¿Ya tienes una cuenta?"
              textLink="Ingresa"
              link="/login"
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
