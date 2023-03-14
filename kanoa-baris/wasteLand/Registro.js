import React, { useEffect } from "react";
import './Registro.css';
import { HeaderRegister } from "./HeaderRegister";
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
    baseURL: "http://localhost:3000/"
});

function Registro() {

    const navigate = useNavigate();

    async function getPost() {
        console.log('Get post');
        const response = await client.post("/regquest", {
            nombre: document.getElementById('nombre').value,
            correo: document.getElementById('correo').value,
            pass: document.getElementById('pass').value,
        });
        if (response.data.result) {
            navigate('/login')
        }
        console.log(response);
    }

    return (
        <div className="registros">
            <div className="formulario">
                <h1>Registro</h1>
                <form className="registro" method="post" action="/regquest">
                    <input type="email" id="correo" name="correo" placeholder="Email" required></input>
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" required></input>
                    <input type="password" id="pass" name="pass" placeholder="Contraseña" required></input>
                    <input type="password" placeholder="Confirmación contraseña"></input>
                    <h3 align="left">Tecnologías</h3>
                    <div className"divbut">
                        <div className"radiobutton">
                            <input type="radio" name="tecs" value="Primera"></input>
                            <label htmlFor="Primera">Primera Tecnología</label>
                        </div>
                        <div className"radiobutton">
                            <input type="radio" name="tecs" value="Segunda"></input>
                            <label htmlFor="Segunda">Segunda Tecnologia</label>
                        </div>
                        <div className"radiobutton">
                            <input type="radio" name="tecs" value="Tercera"></input>
                            <label htmlFor="Tercera">Tercera Tecnología</label>
                        </div>
                    </div>
                    <h3 align="left">Llaves públicas</h3>
                    <input type="text" placeholder="Últimas 10 letras" required></input>
                    <input type="button" value="+"></input>
                    <input type="button" value="Ingresar" onClick={getPost}></input>
                    <div className"registrarse"><br></br>
                        ¿Ya tienes una cuenta? <Link to="/login">Ingresa</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registro;