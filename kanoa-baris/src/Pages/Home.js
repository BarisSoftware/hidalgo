import React from "react";
import "./Home.css";
import LogoKanoa from "../imagenes/LogoKanoa.png";
import { HeaderHome } from "./HeaderHome";
import Proyect from "./Proyect";

// Bajo el encabezado, Nombre y Logo

function Presentation(props){
  return(
    <div className="center-show">
      <img src={LogoKanoa} />
      <h1>Kanoa</h1>
    </div>
  )
}

// Mision Valores, etc container

function AboutSection(props) {
  return(
    <div className="aboutus">
      <div className="cont1">
            <Infosec tittle='Misión' text = {["BORIS es una empresa dedicada al progreso tecnológico y social a través del desarrollo de sistemas de información rentables,escalables y mantenibles mediante el seguimiento de estándares de calidad dentro de la industria; trabajamos para empresas medianas y pequeñas, como para organizaciones empresariales, sin ánimos de lucro o gubernamentales."]}>
              </Infosec> 
          </div>
          <div className="cont2">
            <Infosec tittle='Visión' text={["Ser una empresa inspiradora y de referencia en el desarrollo de proyectos informáticos con alto impacto social dentro de México por la eficiencia y rentabilidad de los sistemas desarrollados. Reconocida por ser clave en el éxito y progreso de organizaciones y empresas que beneficien el desarrollo del país."]}>
            </Infosec>
          </div>
          <div className="cont3">
            <Valores></Valores>
          </div>
          <div className="cont4">
            <Infosec tittle='Filosofía' text={["En México se enfrentan una variedad de problemas sociales que van más allá de la pobreza y la desigualdad. No es posible esperar a que una entidad gubernamental haga todo el trabajo, ni que una sola organización lidere el cambio, por eso, es esencial que se proporcione un apoyo profesional para el desarrollo de los sistemas informáticos de estas entidades, empresas y organizaciones."]}></Infosec>
          </div>
    </div>
  );
}

// Para crear un nuevo elemento creamos una funcion
// que devuelva el contenido
function Infosec(props){ // valores, mision y esas weas
  return (
    <>
      <h3>{props.tittle}</h3>
      <br></br>
      <p>{props.text}</p>
    </>
  );  
}

function Valores(props){ // valores, mision y esas weas
  return (
    <><h3>Valores</h3>
    <br></br>
    <ul>
      <li>Honestidad</li>
      <li>Respeto</li>
      <li>Puntualidad</li>
      <li>Calidad</li>
      <li>Trabajo en equipo</li>
      <li>Mejora constante</li>
    </ul>
    </>
  );  
}

function Somos(props) {
  return(
    <div className="sheet">
      <h1 className="tittle-medium">¿Qué es Kanoa?</h1>
        <p className="somos">
          Kanoa es un sistema de criptomonedas que te recompensa por crear
          software libre. Además te permite recompensar proyectos de tu
          elección y realizar transacciones con nuestra moneda entre otras
          criptos.
        </p>
    </div>
  )
}

function Home() { //Es necesario el corregir pasarle el texto en el parameto
  return (
    <div className="Home">
      <HeaderHome></HeaderHome>
      <section id="main-section">
          <Presentation/>
          <AboutSection/>
      </section>
      <section>
        <Somos/>
      </section>
      <section>
        <h1 className="tittle-medium">Proyectos Populares</h1>
        <Proyect></Proyect>
      </section>
    </div>
  );
}

export default Home;
