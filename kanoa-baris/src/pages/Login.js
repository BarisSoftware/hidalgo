import React from "react";
// Todos los elementos usan un mismo css
// O que almenos lo usen por tipo, por ejemplo login/register form
//import '../App.css'

import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import NavBar from "./NavBarFix";

const client = axios.create({
    baseURL: "http://localhost:3000/"
});

function Login() {

    const navigate = useNavigate();

    React.useEffect(() => {
        const checkLogin = async () => {
            const response = await client.post('/checkSession');
            console.log('Auth ' + response.data.auth);
            if (response.data.auth) {
                navigate('/home_feed');
            }
        }
        checkLogin();
    }, [])
    return (
        <div className="forms wft" id="Login">
            <NavBar text="Home" link="/"></NavBar>
            <div className="body">
                <div className="formulario">
                    <h1>Login</h1>
                    <form className="form" method="post" action="/logquest">
                        <input type="email" name="correo" required className="formil" placeholder="Email"></input>
                        <input type="password" name="pass" required placeholder="Contraseña"></input>
                        <input type="submit" value="Ingresar" className="formal"></input>
                        <div className="registrarse">
                            ¿No estas registrado? <Link to="/registro">Crea una cuenta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;