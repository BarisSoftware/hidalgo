import React from "react";
// Todos los elementos usan un mismo css
// O que almenos lo usen por tipo, por ejemplo login/register form
//import '../App.css'

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBarFix";
import EmailInput from "../formalForm/EmailInput";
import PassInput from "../formalForm/PassInput";
import BottomLink from "../formalForm/BottomLink";
import SubmitButton from "../formalForm/SubmitButton";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function Login() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkLogin = async () => {
      const response = await client.post("/checkSession");
      console.log("Auth " + response.data.auth);
      if (response.data.auth) {
        navigate("/homeFeed");
      }
    };
    checkLogin();
  }, []);
  return (
    <div className="forms wft" id="Login">
      <NavBar text="Home" link="/"></NavBar>
      <div className="bodys">
        <div className="formulario">
          <h1>Login</h1>
          <form className="form" method="post" action="/logquest">
            <EmailInput />
            <PassInput />
            <SubmitButton />
            <BottomLink
              text="¿No estas registrado? "
              textLink="Crea una cuenta"
              link="/registro"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
