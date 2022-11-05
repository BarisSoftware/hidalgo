import React from "react";
import "../NavBar.css";

function NavBar () {

    return (

        <nav className="NavBar">
            <div class="header">
            <a href="#" class="logo">Baris <br></br>Software Development</a>
            <ul>
                <li class="normal"><a href="cproyecto.html">CREAR PROYECTO</a></li>
                <li class="normal"><a href="transacciones.html">TRANSACCIONES </a></li>
                <li class="normal"><a href="sc.html">Source Code</a></li>
                <li class="cta"><a href="Login.html">LOGIN</a></li>            
            </ul>
        </div>
        </nav>


    );
}

export default NavBar;