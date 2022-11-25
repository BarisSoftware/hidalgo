import React from "react";
import './Login.css';
import { Link } from "react-router-dom"
import { HeaderLogin } from "./HeaderLogin"
import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3000/"
});

function Login() {

    const [nombre, setNombre] = React.useState('Nombre');

    React.useEffect(() => {
        const checkLogin = async () => {
            const response = client.post('/checkSession');
            console.log(await response);
            return (await response).data;
        }
        const val = checkLogin();
        console.log(val);
        setNombre(val.nombre);
    }, [])
    return (
        <div>
            <HeaderLogin></HeaderLogin>
            <div className="formulario">
                <h1>Login</h1>
                <h1>{nombre}</h1>
                <form className="login" method="post" action="/logquest">
                    <input type="email" name="correo" required placeholder="Email"></input>
                    <input type="password" name="pass" required placeholder="Contraseña"></input>
                    <input type="submit" value="Ingresar"></input>
                    <div class="registrarse">
                        ¿No estas registrado? <Link to="/registro">Crea una cuenta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;