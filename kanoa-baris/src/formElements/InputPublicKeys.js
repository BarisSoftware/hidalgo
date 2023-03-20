import React from "react";

function LlavesPublicas(props) {
  return (
    <div className="elem">
      <label for="publickey">Llaves públicas</label>
      <div className="input">
        <input
          type="text"
          id="publickey"
          name="publickey"
          placeholder="ultimas 10 letras"
          required
        />
      </div>
    </div>
  );
}

export default LlavesPublicas;
