import React from "react";
import { defer, Link } from "react-router-dom";
import LogoNavBar from "../HomeElements/NavBar/LogoNavBar";
import BlackButton from "../HomeElements/NavBar/BlackButtonNavBar";
import BlueButton from "../HomeElements/NavBar/BlueButtonNavBar";

function NavBar(props) {
  return (
    <header className="navhome">
      <div className="homeNavBar">
        <LogoNavBar />
        <ul>
          <BlackButton
            link="/createProyect"
            text="Crear Proyecto"
          ></BlackButton>
          <BlackButton link="/popularProyects" text="Proyectos Populares" />
          {/* <BlackButton link="/transacciones" text="TRANSACCIONES"></BlackButton> */}
          <BlackButton
            link="https://github.com/BarisSoftware/hidalgo"
            text="Source Code"
          ></BlackButton>
          <BlueButton link={props.link} text={props.text}></BlueButton>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
