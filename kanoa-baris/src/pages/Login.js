import React from "react";
// Todos los elementos usan un mismo css
// O que almenos lo usen por tipo, por ejemplo login/register form
import '../App.css'
import './Login.css';

import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { Header } from "./Header";

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
        <div>
            <Header text="Home" link="/"></Header>
            //El div abajo era body originalmente
            <div className="body">
                <div className="formulario">
                    <h1>Login</h1>
                    <form className="login" method="post" action="/logquest">
                        <input type="email" name="correo" required placeholder="Email"></input>
                        <input type="password" name="pass" required placeholder="Contraseña"></input>
                        <input type="submit" value="Ingresar"></input>
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