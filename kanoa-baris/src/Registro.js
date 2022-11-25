import React from "react";
import './Registro.css';
import { HeaderRegister } from "./HeaderRegister";
import { Link } from "react-router-dom"

function Registro (){
    return (
    <div className="registros">
        <HeaderRegister></HeaderRegister>
        <div className="formulario">
            <h1>Registro</h1>
            <form className="registro" method="post" action="/regquest">
                <input type="email" name="correo" placeholder="Email" required></input>
                <input type="text" name="nombre" placeholder="Nombre" required></input>
                <input type="password" name="pass" placeholder="Contraseña" required></input>
                <input type="password" placeholder="Confirmación contraseña"></input>
                <h3 align="left">Tecnologías</h3>
                <div class="divbut">
                    <div class="radiobutton">
                        <input type="radio" name ="tecs" value ="Primera"></input>
                        <label for="Primera">Primera Tecnología</label>
                    </div>
                    <div class="radiobutton">
                        <input type="radio" name="tecs" value ="Segunda"></input>
                        <label for="Segunda">Segunda Tecnologia</label>
                    </div>
                    <div class="radiobutton">
                        <input type="radio" name="tecs" value ="Tercera"></input>
                        <label for="Tercera">Tercera Tecnología</label>
                    </div>
                </div>
                <h3 align="left">Llaves públicas</h3>
                <input type="text" placeholder="Últimas 10 letras" required></input>
                <input type="button" value="+"></input>
                <input type="submit" value="Ingresar"></input>
                <div class="registrarse"><br></br>
                    ¿Ya tienes una cuenta? <Link to="/login">Ingresa</Link>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Registro;