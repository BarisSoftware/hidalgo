import './App.css';
import { Link } from "react-router-dom"

function HeaderLink(props) {
  return (
    <li class="normal"><a href={props.link}>{props.text}</a></li>
  );
}

function NavLink(props) {
  return (
    <li class="cta"><Link to={props.link}>{props.text}</Link></li>
  );
}

export const HeaderHome = () => {
  return (
    <header>
      <div class="header">
        <a href="#" class="logo">Baris <br></br>Software Development</a>
        <nav>
          <HeaderLink link="" text="CREAR PROYECTO"></HeaderLink>
          <HeaderLink link="transacciones.html" text="TRANSACCIONES"></HeaderLink>
          <HeaderLink link="https://github.com/BarisSoftware/hidalgo" text="Source Code"></HeaderLink>
          <NavLink link="/login" text="LOGIN"></NavLink>
        </nav>
      </div>
    </header>
  )
}
