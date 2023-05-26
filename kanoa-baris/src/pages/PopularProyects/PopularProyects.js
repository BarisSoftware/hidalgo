import React from "react";
import { useEffect, useState } from "react";
import { Title } from "../PageBase";
import SideBar from "../SideBarFix";
import axios from "axios";
import Proyect from "../../HomeElements/Proyect";

function PopularProyect() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/popularProjectreq")
      .then((response) => {
        console.log(response);
        setProjects(response.data.projects);

        for (const proyect in projects) {
          const actualId = proyect.idProyecto;
          axios
            .get("http://localhost:3000/popularProjectreq", {
              idProyecto: actualId,
            })
            .then((result) => {
              proyect.publicKey = result.data.publickey;
            })
            .catch((err) => {
              console.log("error: " + err);
            });
        }
      })
      .catch((error) => {
        console.log("F Up in popular proyects req: " + error);
      });
  }, []);

  return (
    <>
      <SideBar />
      <Title text="Proyectos Populares" />
      <div className="contenedor">
        <form className="search-form">
          <input placeholder="Buscar ..." type="text" />
          <input type="submit" />
        </form>
        <div className="contenido">
          {projects.map((project) => (
            <Proyect
              nombre={project.nombreProyecto}
              descripcion={project.descripcionProyecto}
              idProyecto={project.idProyecto}
              archivoName={project.archivoName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularProyect;
