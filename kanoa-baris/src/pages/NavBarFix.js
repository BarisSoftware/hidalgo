import React from "react";
import { defer, Link } from "react-router-dom";
import LogoNavBar from "../HomeElements/NavBar/LogoNavBar";
import BlackButton from "../HomeElements/NavBar/BlackButtonNavBar";
import BlueButton from "../HomeElements/NavBar/BlueButtonNavBar";

function NavBar(props) {
  return (
    <header>
      <div className="homeNavBar">
        <LogoNavBar />
        <nav>
          <BlackButton link="/crear" text="CREAR PROYECTO"></BlackButton>
          <BlackButton link="/transacciones" text="TRANSACCIONES"></BlackButton>
          <BlackButton
            link="https://github.com/BarisSoftware/hidalgo"
            text="SOURCE CODE"
          ></BlackButton>
          <BlueButton link={props.link} text={props.text}></BlueButton>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
