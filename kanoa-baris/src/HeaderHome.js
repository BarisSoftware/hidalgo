import './App.css';
import { Link } from "react-router-dom"
export const HeaderHome = () => {
  return (
    <header>
        <div class="header">
            <a href="#" class="logo">Baris <br></br>Software Development</a>
            <nav>
                <li class="normal"><a href="">CREAR PROYECTO</a></li>
                <li class="normal"><a href="transacciones.html">TRANSACCIONES </a></li>
                <li class="normal"><a href="https://github.com/BarisSoftware/hidalgo">Source Code</a></li>
                <li class="cta"><Link to="/login">LOGIN</Link></li>
            </nav>
        </div>
    </header>

    // <nav>
    //     <Link to="/logins">Logins</Link>
    // </nav>
  )
}
