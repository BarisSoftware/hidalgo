import './Registro';
import { Link } from "react-router-dom"
export const HeaderRegister = () => {
  return (
    <header>
        <div className"header">
            <a href="#" className"logo">Baris <br></br>Software Development</a>
            <nav>

                <li className"normal"><Link to="/crear">CREAR PROYECTO</Link></li>
                <li className"normal"><Link to="/transacciones">TRANSACCIONES </Link></li>
                <li className"normal"><a href="https://github.com/BarisSoftware/hidalgo">Source Code</a></li>
                <li className"cta"><Link to="/">HOME</Link></li>
            </nav>
        </div>
    </header>

    // <nav>
    //     <Link to="/logins">Logins</Link>
    // </nav>
  )
}