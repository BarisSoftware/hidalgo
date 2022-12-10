import './Header.css';
import { Link } from "react-router-dom"

function HeaderLink(props) {
  return (
    <a href={props.link}>{props.text}</a>
  );
}

function NavLink(props) {
  return (
    <Link to={props.link}>{props.text}</Link>
  );
}

export const HeaderHome = () => {
  return (
    <header>
        <a href="#" className="home-link">Baris<br/>Software Development</a>
        <nav>
          <NavLink link="/crear" text="CREAR PROYECTO"/>
          <NavLink link="/transacciones" text="TRANSACCIONES"/>
          <HeaderLink link="https://github.com/BarisSoftware/hidalgo" text="Source Code"></HeaderLink>
          <NavLink link="/login" text="LOGIN"></NavLink>
        </nav>
    </header>
  )
}
