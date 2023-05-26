import React from "react";

function LlavesPublicas(props) {
  return (
    <div className="elem funform">
      <label htmlFor="publickey">Llaves públicas</label>
      <div className="input">
        <input
          type="text"
          id="publickey"
          name="publickey"
          value={props.value}
          placeholder="ultimas 10 letras"
        />
      </div>
    </div>
  );
}

export default LlavesPublicas;
