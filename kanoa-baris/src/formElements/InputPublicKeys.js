import React from "react";

function LlavesPublicas(props) {
  return (
    <div className="elem funform">
      <label for="publickey">Llaves públicas</label>
      <div className="input">
        <input
          type="text"
          id="publickey"
          name="publickey"
          placeholder="ultimas 10 letras"
        />
      </div>
    </div>
  );
}

export default LlavesPublicas;
