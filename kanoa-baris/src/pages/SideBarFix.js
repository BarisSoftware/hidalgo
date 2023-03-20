import React from "react";
import avatar3 from "../imagenes/avatar3.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function Header(props) {
  return (
    <header>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="image-text">
        <span className="image">
          <img src={avatar3} alt="profile" />
        </span>
        <div className="text header-text">
          <span className="name">{props.userName}</span>
        </div>
      </div>
      <i className="bx bxs-chevron-right toggle"></i>
    </header>
  );
}

function LinkMenu(props) {
  return (
    <li className="nav-link">
      <a href={props.link}>
        <i className={"bx icon " + props.icon}></i>
        <span className="text nav-text">
          {props.text}
          <br />
          {props.text2}
        </span>
      </a>
    </li>
  );
}

function MenuLinks(props) {
  return (
    <ul className="menu-links">
      <LinkMenu link="/homeFeed" text="Home" icon="bx-home" />
      <LinkMenu
        link="/createProyect"
        text="Crear proyecto"
        icon="bx-add-to-queue icon"
      />
      <LinkMenu
        link="/transacciones"
        text="Realizar"
        text2="Transacción"
        icon="bx-dollar"
      />
      <LinkMenu
        link="/adminProfile"
        text="Administrar"
        text2="perfil"
        icon="bx-cog"
      />
      <LinkMenu
        link="/popularProyects"
        text="Proyectos"
        text2="populares"
        icon="bx-star"
      />
    </ul>
  );
}

function Content(props) {
  return (
    <div className="menu-bar">
      <div className="menu">
        <MenuLinks />
      </div>
      <BottomContent />
    </div>
  );
}

function BottomContent(props) {
  return (
    <div className="bottom-content">
      <div className="content">
        <li className="">
          <a href="#">
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Cerrar sesión</span>
          </a>
        </li>
        <li className="mode">
          <div className="sun-moon">
            <i className="bx bx-moon icon moon"></i>
            <i className="bx bx-sun icon sun"></i>
          </div>
          <span className="mode-text text">Dark mode</span>
          <div className="toggle-switch">
            <span className="switch"></span>
          </div>
        </li>
      </div>
    </div>
  );
}

function SideBar(props) {
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
    <nav className="sidebar">
      <Header userName={nombre} />
      <Content />
    </nav>
  );
}

export default SideBar;
