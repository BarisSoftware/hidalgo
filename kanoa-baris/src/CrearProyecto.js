import React from "react";
import './CrearProyecto.css';
import Sidebar from "./Sidebar";
import Licencia from "./formElements/Licencia";
import LlavesPublicas from "./formElements/LlavesPublicas"
import Nombre from "./formElements/Nombre";
import Descripcion from "./formElements/Descripcion";
import Persona from "./formElements/Persona";
import avatar1 from "./imagenes/avatar1.png"
import avatar2 from "./imagenes/avatar2.png"
import avatar3 from "./imagenes/avatar3.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar5 from "./imagenes/avatar5.png"
import avatar6 from "./imagenes/avatar6.png"

function Crear() {
    return (
        <>
            <Sidebar></Sidebar>
            <h1 class="titulo">Crear proyecto</h1>
            <form method="POST" action="/crateProreq">
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