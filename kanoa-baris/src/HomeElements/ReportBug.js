import React from "react";
import axios from "axios";
import { useState } from "react";

function Step(props) {
  return <div>{props.text}</div>;
}

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function ReportBug() {
  const [bugSteps, setBugSteps] = useState([""]);

  const reportBugHandler = (event) => {
    event.preventDefault();

    client
      .post("/reportBug", {
        title: document.getElementById("title").value,
        problema: document.getElementById("problem").value,
        steps: document.getElementById("steps").value,
        resultado: document.getElementById("expected-result").value,
        actual: document.getElementById("actual-result").value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));

    document.getElementById("bug-report-cont").innerHTML = "Enviado";
  };

  return (
    <div className="bug-report" id="bug-report-cont">
      <form>
        <h3>Reporte de Bug</h3>
        <input type="text" placeholder="title" name="title" id="title" />
        <input type="text" placeholder="problem" name="problem" id="problem" />
        <h3>Pasos para producir el problema</h3>
        <div className="bug-steps" id="bug-steps">
          <textarea
            name="steps"
            id="steps"
            cols="30"
            rows="10"
            placeholder="1. Paso 1"
          ></textarea>
        </div>
        <input
          type="text"
          placeholder="Resultado Esperado"
          name="expected-result"
          id="expected-result"
        />
        <input
          type="text"
          placeholder="Resultado Actual"
          name="actual-result"
          id="actual-result"
        />
        <button onClick={reportBugHandler}>Enviar</button>
      </form>
    </div>
  );
}

export default ReportBug;
