import './App.css';
import { Link } from "react-router-dom"

function HeaderLink(props) {
  return (
    <li class="normal"><a href={props.link}>{props.text}</a></li>
  );
}

function NavLink(props) {
  return (
    <li class="cta"><Link to={props.link}>{props.link}</Link></li>
  );
}

export const HeaderHome = () => {
  return (
    <header>
<<<<<<< HEAD
      <div class="header">
        <a href="#" class="logo">Baris <br></br>Software Development</a>
        <nav>
          <HeaderLink link="" text="CREAR PROYECTO"></HeaderLink>
          <HeaderLink link="transacciones.html" text="TRANSACCIONES"></HeaderLink>
          <HeaderLink link="https://github.com/BarisSoftware/hidalgo" text="Source Code"></HeaderLink>
          <NavLink link="/login" text="LOGIN"></NavLink>
        </nav>
      </div>
=======
        <div class="header">
            <a href="#" class="logo">Baris <br></br>Software Development</a>
            <nav>
                <li class="normal"><Link to="/crear">CREAR PROYECTO</Link></li>
                <li class="normal"><a href="transacciones.html">TRANSACCIONES </a></li>
                <li class="normal"><a href="https://github.com/BarisSoftware/hidalgo">Source Code</a></li>
                <li class="cta"><Link to="/login">LOGIN</Link></li>
            </nav>
        </div>
>>>>>>> ReactAppJS
    </header>
    // <nav>
    //     <Link to="/logins">Logins</Link>
    // </nav>
  )
}
