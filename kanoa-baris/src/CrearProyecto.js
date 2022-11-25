import React, { useEffect, useState } from "react";
import './CrearProyecto.css';
import Sidebar from "./Sidebar";
import Licencia from "./formElements/Licencia";
import LlavesPublicas from "./formElements/LlavesPublicas"
import Nombre from "./formElements/Nombre";
import Descripcion from "./formElements/Descripcion";
import Persona from "./formElements/Persona";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

function Crear() {
    const [logged, setLogged] = useState(false);
    const [idUser, setIdUser] = useState(undefined);
    const [nombre, setNombre] = useState('Usuario')

    const navigate = useNavigate();

    useEffect(() => {
        client.post('/checkSession').then((results) => {
            if (results.data.auth) {
                setLogged(results.data.auth);
                setIdUser(results.data.idUser);
                setNombre(results.data.name);
            }
            else {
                navigate('/login');
            }
        }).catch((error) => {
            console.log('Error');
            navigate('/');
        })
    }, []);

    const createProject = async () => {
        client.post('/createProjectreq', {
            nombre: document.getElementById('nombre'),
            descripcion: document.getElementById('descripcion'),
            licencia: document.getElementById('licencia'),
        })
    }

    return (
        <>
            <Sidebar nombre={nombre}></Sidebar>
            <h1 class="titulo">Crear proyecto</h1>
            <form method="POST" action="/createProjectreq">
                <div class="contenedor">
                    <div class="contenido">
                        <div class="col1">
                            <div class="elem1">
                                <Nombre></Nombre>
                            </div><br></br><br></br>
                            <div class="elem3">
                                <Descripcion></Descripcion>
                            </div><br></br><br></br>
                            <div class="elem5">
                                <LlavesPublicas></LlavesPublicas>
                            </div>
                        </div>
                        <div class="col2">
                            <div class="elem2">
                                <Persona type="Administradores"></Persona>
                            </div><br></br><br></br>
                            <div class="elem4">
                                <Persona type="Colaboradores"></Persona>
                            </div><br></br><br></br>
                            <div class="elem6">
                                <Licencia></Licencia>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submit">
                    <input type="submit" id="Crear proyecto" name="Crear proyecto" value="Crear proyecto"></input>
                </div>
            </form>
        </>
    );
}

export default Crear;