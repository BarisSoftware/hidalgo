import React from "react";
import './Login.css';
import { Link } from "react-router-dom"
import { HeaderLogin } from "./HeaderLogin"
import axios from "axios";
import { redirect } from "react-router-dom";

function Request(props) {
    
    React.useEffect(() => {
        async function log() {
            await axios.post('http://localhost:2000/logquest', {
                nombre: 'unknown',
                correo: document.getElementById('correo'),
                pass: document.getElementById('pass')
            });
        };
        log()
        console.log('Enviando');
    })

    return (<h1>Enviado ...</h1>)
}

function Login() {
    const [auth, setAuth] = React.useState(false);
    const [envi, setEnvi] = React.useState(false);

    React.useEffect(() => { //Revisar si el usuario ya incio sesion
        async function checkSes() {
            const response = await axios.post('http://localhost:2000/checkSession');
            return response.data
        }
        const ses = checkSes();
        if (ses) {
            setAuth(true)
        } else{
            setAuth(false)
        }
    })

    return (
        <body className="body">

            <div className="formulario">
                <h1>Login</h1>
                <form className="login" method="POST" action="/logquest">
                    <input type="email" name="correo" required placeholder="Email"></input>
                    <input type="password" name="pass" required placeholder="Contraseña"></input>
                    <input type="button" value="Ingresar" onClick={() => {setEnvi(true)}}></input>
                    {auth ? <redirect to='/home_feed'></redirect> : <h1>NO</h1>}
                    {envi ? <Request></Request> : <h1>NO</h1>}
                    <div class="registrarse">
                        ¿No estas registrado? <Link to="/registro">Crea una cuenta</Link>
                    </div>
                </form>
            </div>
        </body>
    );
}
export default Login