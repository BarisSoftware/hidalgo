import { Link } from "react-router-dom"
import LogoNavBar from "../HomeElements/NavBar/LogoNavBar";
import BlackButton from "../HomeElements/NavBar/BlackButtonNavBar";
import BlueButton from "../HomeElements/NavBar/BlueButtonNavBar";

function HeaderLink(props) {
  return (
    <li className="normal"><a href={props.link}>{props.text}</a></li>
  );
}

function NavLink(props) {
  return (
    <li className="cta"><Link to={props.link}>{props.text}</Link></li>
  );
}

export const NavBar = (props) => {
    // revisar si se dan props
    if(props.text == undefined) {
        props.text = "Login"
    }
    if(props.link == undefined){
        props.link = "/login"
    }

  return (
    <header>
      <div className="homeNavBar">
        <LogoNavBar/>
        <nav>
            <BlackButton link="/crear" text="CREAR PROYECTO"></BlackButton>
            <BlackButton link="/transacciones" text="TRANSACCIONES"></BlackButton>
            <BlackButton link="https://github.com/BarisSoftware/hidalgo" text="SOURCE CODE"></BlackButton>
            <BlueButton link={props.link} text={props.text}></BlueButton>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;