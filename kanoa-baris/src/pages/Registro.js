import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header } from "./NavBar";

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
        <div className="forms" id='Registro'>
        <Header text="Home" link="/"></Header>
        <div className='body'>
            <div className="formulario">
                <h1>Registro</h1>
                <form className="form" method="post" action="/regquest">
                    <input type="email" id="correo" name="correo" placeholder="Email" required></input>
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" required></input>
                    <input type="password" id="pass" name="pass" placeholder="Contraseña" required></input>
                    <input type="password" placeholder="Confirmación contraseña"></input>
                    <h3 align="left">Tecnologías</h3>
                    <div class="divbut">
                        <div class="radiobutton">
                            <input type="radio" name="tecs" value="Primera"></input>
                            <label for="Primera">Primera Tecnología</label>
                        </div>
                        <div class="radiobutton">
                            <input type="radio" name="tecs" value="Segunda"></input>
                            <label for="Segunda">Segunda Tecnologia</label>
                        </div>
                        <div class="radiobutton">
                            <input type="radio" name="tecs" value="Tercera"></input>
                            <label for="Tercera">Tercera Tecnología</label>
                        </div>
                    </div>
                    <h3 align="left">Llaves públicas</h3>
                    <input type="text" placeholder="Últimas 10 letras" required></input>
                    <input type="button" value="+"></input>
                    <input type="submit" value="Ingresar" onClick={getPost}></input>
                    <div class="registrarse"><br></br>
                        ¿Ya tienes una cuenta? <Link to="/login">Ingresa</Link>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Registro;