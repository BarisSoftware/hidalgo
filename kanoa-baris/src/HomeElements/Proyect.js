import React from "react";
import ether from "../imagenes/ethereum.png";
import Chat from "./Chat";
import PopUp from "./PopUp";
import ReportBug from "./ReportBug";
import { useState } from "react";
import axios from "axios";

function Proyect(props) {
  const [trigger, setTrigger] = useState(false); // pop up trigger
  const [tiggerBug, setTriggerBug] = useState(false);

  const client = axios.create({
    baseURL: "http://localhost:3000/",
  });

  const copyAddresHandler = () => {
    let inpu = document.createElement("input");
    inpu.value = props.publicKey;
    inpu.style.display = "hidden";
    document.body.appendChild(inpu);
    inpu.select();
    document.execCommand("copy");
    inpu.parentNode.removeChild(inpu);
    document.getElementById("donar-span").innerText = "Copiado!";
  };

  return (
    <div className="Proyecto">
      <div className="pp1">
        {/* <p>Nombre del Proyecto:</p> */}
        <br />
        <h3 className="proyectos_">{props.nombre}</h3>
      </div>
      <div className="pp2">
        <p className="titulo">{props.descripcion}</p>
        <br />
        {/* <p>{props.descripcion}</p> */}
      </div>
      <br />
      <br />
      <br />
      <div className="pp3">
        <div proyectname="pp3_">
          <p>
            <span
              className="donar-span"
              id="donar-span"
              onClick={() => {
                copyAddresHandler();
              }}
            >
              <i className="bx bx-upload icon" /> Direccion de Billetera
            </span>
          </p>
        </div>
      </div>
      <div className="pp4">
        <div className="donar">
          {/* <img src={ether} alt="ether" /> */}
          <span className="donar-span">{props.publickey}</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="pp5">
        <p>Número de descargas funcionales:</p>
        <br />
        <br />
        <p>Recaudación total del proyecto:</p>
      </div>
      <div className="pp6">
        <div className="btn-admin">
          {/* <input
            className="proyect-button"
            id="download-button"
            type="button"
            value="Descargar proyecto"
            onClick={() => donwloadHandler()}
          /> */}
          <a
            className="proyect-button"
            href={"http://localhost:2000/static/" + props.archivoName}
          >
            Descargar proyecto
          </a>
        </div>
      </div>
      <button className="proyect-button" onClick={() => setTrigger(true)}>
        Chat de Soporte
      </button>
      <button className="proyect-button" onClick={() => setTriggerBug(true)}>
        Reportar Bug
      </button>
      <PopUp trigger={trigger} setClose={setTrigger}>
        <Chat idProyecto={props.idProyecto}></Chat>
      </PopUp>
      <PopUp trigger={tiggerBug} setClose={setTriggerBug}>
        <ReportBug></ReportBug>
      </PopUp>
    </div>
  );
}

export default Proyect;