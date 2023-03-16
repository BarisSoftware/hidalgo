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
          <BlackButton link="/crear" text="CREAR PROYECTO"></BlackButton>
          <BlackButton link="/transacciones" text="TRANSACCIONES"></BlackButton>
          <BlackButton
            link="https://github.com/BarisSoftware/hidalgo"
            text="SOURCE CODE"
          ></BlackButton>
          <BlueButton link={props.link} text={props.text}></BlueButton>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
