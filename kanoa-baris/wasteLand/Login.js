/*import React from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom"
import { HeaderLogin } from "./HeaderLogin"
import axios from "axios";

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

            <HeaderLogin></HeaderLogin>
            <body className="body">
                <div className="formulario">
                    <h1>Login</h1>
                    <form className="login" method="post" action="/logquest">
                        <input type="email" name="correo" required placeholder="Email"></input>
                        <input type="password" name="pass" required placeholder="Contraseña"></input>
                        <input type="submit" value="Ingresar"></input>
                        <div className"registrarse">
                            ¿No estas registrado? <Link to="/registro">Crea una cuenta</Link>
                        </div>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default Login;*/