import React from "react";
import LogoBaris from "../imagenes/LogoBaris.png"
import { defer, Link } from "react-router-dom";
import LogoNavBar from "../HomeElements/NavBar/LogoNavBar";
import BlackButton from "../HomeElements/NavBar/BlackButtonNavBar";
import BlueButton from "../HomeElements/NavBar/BlueButtonNavBar";


function NavBar (){
  return (
    <nav class='navbar'>
      <div class='nav-content'>
        <ul>
          <div class='flex'>
            <img src={LogoBaris} className="LogoBaris"></img>
          </div>
            <p id="baris">
              <a href="./" id="baris">BARIS SOFTWARE DEVELOPMENT</a>
            </p>
          <li>
            <a href='./createProyect'>Crear Proyecto</a>
          </li>
          <li>
            <a href='./popularProyects'>Proyectos Populares</a>
          </li>
          <li>
            <a href='https://github.com/BarisSoftware/hidalgo'>Source Code</a>
          </li>
          <li>
            <a href='./Login' className="log">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;




// function NavBar(props) {
//   return (
//     <header className="navhome">
//       <div className="homeNavBar">
//         <LogoNavBar />
//         <ul>
//           <BlackButton
//             link="/createProyect"
//             text="Crear Proyecto"
//           ></BlackButton>
//           <BlackButton link="/popularProyects" text="Proyectos Populares" />
//           {/* <BlackButton link="/transacciones" text="TRANSACCIONES"></BlackButton> */}
//           <BlackButton
//             link="https://github.com/BarisSoftware/hidalgo"
//             text="Source Code"
//           ></BlackButton>
//           <BlueButton link={props.link} text={props.text}></BlueButton>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default NavBar;
