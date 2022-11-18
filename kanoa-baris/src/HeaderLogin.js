import { Link } from "react-router-dom"
export const HeaderLogin = () => {
  return (
    <header>
        <div class="header">
            <a href="#" class="logo">Baris <br>Software Development</br></a>
            <nav>
                <li class="normal"><a href="cproyecto.html">CREAR PROYECTO</a></li>
                <li class="normal"><a href="transacciones.html">TRANSACCIONES </a></li>
                <li class="normal"><a href="sc.html">Source Code</a></li>
                <li class="cta"><Link to="/home">HOME</Link></li>
            </nav>
        </div>
    </header>
  )
}