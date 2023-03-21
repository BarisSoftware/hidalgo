import React from "react";

function MyProyect(props) {
  return (
    <div class="Proyecto">
      <div class="pp1">
        <p>Nombre del Proyecto:</p>
        <br />
        <h3 class="proyectos_">{props.nombre}</h3>
      </div>
      <div class="pp2">
        <p class="titulo">Descripción del proyecto:</p>
        <br />
        <p>{props.descripcion}</p>
      </div>
      <br />
      <br />
      <br />
      <div class="pp3">
        <div class="pp3_">
          <p>
            <span class="donar-span">
              <i class="bx bx-upload icon"></i> Actualizar repositorio del
              <br />
              proyecto:
            </span>
          </p>
        </div>
      </div>
      <div class="pp4">
        <div class="donar">
          <img src="imagenes/bitcoin.png" />
          <span class="donar-span">{props.publickey}</span>
          {/* <span class="donar-span"> Últimas 10 letras" </span> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="pp5">
        <p>Número de descargas funcionales:</p>
        <br />
        <br />
        <p>Recaudación total del proyecto:</p>
      </div>
      <div class="pp6">
        <div class="btn-admin">
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
