import React from "react";
import './Login.css';
import { Link } from "react-router-dom"
import { HeaderLogin } from "./HeaderLogin"

function Login (){
    return(
    <body className="body">

        <div className="formulario">
            <h1>Login</h1>
            <form className="login" method="post" action="/logquest">
                <input type="email" name="correo" required placeholder="Email"></input>
                <input type="password" name="pass" required placeholder="Contraseña"></input>
                <input type="submit" value="Ingresar"></input>
                <div class="registrarse">
                    ¿No estas registrado? <Link to="/registro">Crea una cuenta</Link>
                </div>
            </form>
        </div>
    </body>
    );
}
export default Login