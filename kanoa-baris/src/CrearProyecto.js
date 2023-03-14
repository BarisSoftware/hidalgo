import React, { useEffect, useState } from "react";
//import './AppComplete.css';
import Sidebar from "./Sidebar";
import Licencia from "./formElements/InputLicencia";
import LlavesPublicas from "./formElements/InputPublicKeys"
import Nombre from "./formElements/InputNombre";
import Descripcion from "./formElements/InputDescripcion";
import Persona from "./formElements/InputPersona";
import axios from "axios";
import PopOut from "./elements/PopOut";
import { useNavigate } from "react-router-dom";

const client = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

function Crear() {
    const [logged, setLogged] = useState(false);
    const [idUser, setIdUser] = useState(undefined);
    const [nombre, setNombre] = useState('Usuario')
    const [admins, setAdmins] = useState(false);

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

    const showPopOut = () => {
        
    }

    return (
        <>
            <Sidebar nombre={nombre}></Sidebar>
            <h1 className="titulo">Crear proyecto</h1>
            <form method="POST" action="/createProjectreq">
                <div className="contenedor">
                    <div className="contenido">
                        <div className="col1">
                            <div className="elem1">
                                <Nombre></Nombre>
                            </div><br></br><br></br>
                            <div className="elem3">
                                <Descripcion></Descripcion>
                            </div><br></br><br></br>
                            <div className="elem5">
                                <LlavesPublicas></LlavesPublicas>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="elem2">
                                <Persona id="addAdmin" type="Administradores"></Persona>
                            </div><br></br><br></br>
                            <div className="elem4">
                                <Persona id="addColab" type="Colaboradores"></Persona>
                            </div><br></br><br></br>
                            <div className="elem6">
                                <Licencia></Licencia>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit">
                    <input type="submit" id="Crear proyecto" name="Crear proyecto" value="Crear proyecto"></input>
                </div>
            </form>
            <PopOut placeholder="Administradores"></PopOut>
            {}
        </>
    );
}

export default Crear;