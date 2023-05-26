import React from "react";
import { useEffect, useState } from "react";
import { Title } from "../PageBase";
import SideBar from "../SideBarFix";
import axios from "axios";
import Proyect from "../../HomeElements/Proyect";

function PopularProyect() {
  const [projects, setProjects] = useState([]);

  const getPopularProyects = async () => {
    await axios
      .get("http://localhost:3000/popularProjectreq")
      .then((response) => {
        console.log("Getting Proyects");
        console.log(response);
        getPublicKeys(response.data.projects);
      })
      .catch((error) => {
        console.log("F Up in popular proyects req: " + error);
      });
  };

  const getPublicKeys = async (projectzio) => {
    for (const key in projectzio) {
      console.log("ID:" + projectzio[key].idProyecto);
      await axios
        .post("http://localhost:3000/firstPublicKey", {
          idProyecto: projectzio[key].idProyecto,
        })
        .then((result) => {
          console.log("Getting public Keys");
          console.log(result.data.publickey);
          projectzio[key].publicKey = result.data.publickey;
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    }
    setProjects(projectzio);
  };
  useEffect(() => {
    getPopularProyects();
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
          {projects.map((project) => {
            return (
              <Proyect
                nombre={project.nombreProyecto}
                descripcion={project.descripcionProyecto}
                idProyecto={project.idProyecto}
                publicKey={project.publicKey}
                archivoName={project.archivoName}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PopularProyect;
