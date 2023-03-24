import React from "react";
import "./AppComplete.css";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Proyect from "./Proyect";
const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function Projects(params) {}

function Homefeed() {
  const navigate = useNavigate();
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [idUsuario, setIdUsuario] = React.useState(undefined);
  const [projects, setProjects] = React.useState(undefined);
  React.useEffect(() => {
    const checkLogin = async () => {
      await client.post("/checkSession").then((response) => {
        console.log("Auth " + response.data.auth);
        console.log("Nombre " + response.data.name);
        console.log("Email " + response.data.email);
        console.log("id " + response.data.id);
        if (response.data.auth) {
          setNombre(response.data.name);
          setCorreo(response.data.email);
          setIdUsuario(response.data.id);
        } else {
          navigate("/login");
        }
      });
    };
    checkLogin()
      .then(() => {
        console.log(nombre);
        console.log(correo);
        console.log(idUsuario);
      })
      .then(() => {
        bringMine();
      });

    const bringMine = async () => {
      await client.post("/myProjectsreq").then((response) => {
        let pros = [];
        for (const pro of response) {
          pros.push(pro);
        }
        setProjects(response);
      });
    };
  }, []);

  return (
    <body>
      <Sidebar nombre={nombre}></Sidebar>
      <section className="sec2"></section>
      <div className="somos">
        <h1>
          <b>Homefeed</b>
        </h1>
        <h2>Tus proyectos</h2> <br></br>
        {}
      </div>
      <script src="homefeed.js"></script>
    </body>
  );
}

export default Homefeed;
