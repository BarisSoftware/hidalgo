import React from "react";

function TecnologiasInput(props) {
  return (
    <div className="formalFormContainer">
      <h3 align="left">Tecnologías</h3>
      <div className="divbut">
        <div className="radiobutton">
          <input type="radio" name="tecs" value="Primera"></input>
          <label htmlFor="Primera">Primera Tecnología</label>
        </div>
        <div className="radiobutton">
          <input type="radio" name="tecs" value="Segunda"></input>
          <label htmlFor="Segunda">Segunda Tecnologia</label>
        </div>
        <div className="radiobutton">
          <input type="radio" name="tecs" value="Tercera"></input>
          <label htmlFor="Tercera">Tercera Tecnología</label>
        </div>
      </div>
    </div>
  );
}

export default TecnologiasInput;
