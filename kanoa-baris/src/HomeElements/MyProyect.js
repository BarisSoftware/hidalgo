import React from "react";
import ether from "../imagenes/ethereum.png";

function MyProyect(props) {
  return (
    <div className="Proyecto">
      <div className="pp1">
        <p>Nombre del Proyecto:</p>
        <br />
        <h3 className="proyectos_">{props.nombre}</h3>
      </div>
      <div className="pp2">
        <p className="titulo">Descripción del proyecto:</p>
        <br />
        <p>{props.descripcion}</p>
      </div>
      <br />
      <br />
      <br />
      <div className="pp3">
        <div className="pp3_">
          <p>
            <span className="donar-span">
              <i className="bx bx-upload icon"></i> Actualizar repositorio del
              <br />
              proyecto:
            </span>
          </p>
        </div>
      </div>
      <div className="pp4">
        <div className="donar">
          <img src={ether} alt="ether" />
          <span className="donar-span">{props.publickey}</span>
          {/* <span className="donar-span"> Últimas 10 letras" </span> */}
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
          <input
            className="proyect-button"
            type="button"
            value="Administrar proyecto"
          />
        </div>
      </div>
    </div>
  );
}

export default MyProyect;
