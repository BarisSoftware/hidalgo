import React from "react";

function LlavesPublicas(props) {
  return (
    <div className="elem">
      <label for="Nombre">Llaves públicas</label>
      <div className="input">
        <input
          type="text"
          id="Nombre"
          name="nombre"
          placeholder="ultimas 10 letras"
          required
        />
      </div>
    </div>
  );
}

export default LlavesPublicas;
