import { Link } from "react-router-dom"
export const HeaderLogin = () => {
  return (
    <header>
        <div class="header">
            <a href="#" class="logo">Baris <br></br>Software Development</a>
            <nav>

                <li class="normal"><Link to="/crear">CREAR PROYECTO</Link></li>
                <li class="normal"><Link to="/transacciones">TRANSACCIONES </Link></li>
                <li class="normal"><a href="https://github.com/BarisSoftware/hidalgo">Source Code</a></li>
                <li class="cta"><Link to="/">HOME</Link></li>
            </nav>
        </div>
    </header>

    // <nav>
    //     <Link to="/logins">Logins</Link>
    // </nav>
  )
}