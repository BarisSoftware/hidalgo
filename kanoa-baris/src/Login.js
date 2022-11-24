import React from "react";
import './Login.css';
import { Link } from "react-router-dom"
import { HeaderLogin } from "./HeaderLogin"
import axios from "axios";
import { redirect } from "react-router-dom";

function Login() {
    const [auth, setAuth] = React.useState(false);
    const [envi, setEnvi] = React.useState(false);
    const [res, setRes] = React.useState('Nond')

    React.useEffect(() => { //Revisar si el usuario ya incio sesion
        async function checkSes() {
            const response = await axios.post('http://localhost:2000/checkSession');
            setAuth(response.data)
        }

        checkSes()
    });

    async function log() {
        let c = document.getElementById('correo').value;
        let p = document.getElementById('pass').value;
        console.log(c + ' ' + p);
        const data = await axios.post('http://localhost:2000/logquest', {
            nombre: 'unknown',
            correo: c,
            pass: p
        });
        setRes(data.data);
        console.log(res);
    };

    return (
        <body className="body">
            <div className="formulario">
                <h1>Login</h1>
                <form className="login" method="post" action="/logquest">
                    <input type="email" name="correo" id="correo" required placeholder="Email"></input>
                    <input type="password" name="pass" id="pass" required placeholder="Contraseña"></input>
                    <input type="submit" value="Ingresar" ></input>
                    {auth ? <h1>SI</h1> : <h1>NO</h1> }
                    <div class="registrarse">
                        ¿No estas registrado? <Link to="/registro">Crea una cuenta</Link>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default Login