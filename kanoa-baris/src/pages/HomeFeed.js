import React from "react";
import MyProyect from "../HomeElements/MyProyect";
import { SubTitle, Title } from "./PageBase";
import SideBar from "./SideBarFix";
import axios from "axios";
function HomeFeed(props) {
  const [myProjects, setMyProjects] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/myProjectsreq")
      .then((response) => {
        console.log(response);
        setMyProjects(response.data.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SideBar />
      <Title text="HomeFeed" />
      <SubTitle text="Mis proyectos" />
      <div className="contenedor">
        <div className="contenido">
          {myProjects.map((project) => (
            <MyProyect
              nombre={project.nombreProyecto}
              descripcion={project.descripcionProyecto}
              publickey={project.publickey}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeFeed;
