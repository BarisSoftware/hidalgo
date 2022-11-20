import React from "react";
import './CrearProyecto.css';
import avatar1 from "./imagenes/avatar1.png"
import avatar2 from "./imagenes/avatar2.png"
import avatar3 from "./imagenes/avatar3.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar5 from "./imagenes/avatar5.png"
import avatar6 from "./imagenes/avatar6.png"

function Crear (){
    return(
        <body>
            <nav class="sidebar">
            <header>
                <div class="image-text">
                    <span class="image">
                        <img src={avatar3}></img>
                    </span>
                    <div class="text header-text">
                        <span class="name">Usuario</span>
                    </div>
                </div>
                <i class='bx bxs-chevron-right toggle'></i>
            </header> 
            
            <div class="menu-bar">
                <div class="menu">
                    <ul class="menu-links">
                        <li class="nav-link">
                            <a href="homefeed.html">
                                <i class='bx bx-home icon' ></i>
                                <span class="text nav-text">Homefeed</span>
                            </a>
                        </li>
                        <li class="nav-link">
                            <a href="CrearProyecto.html">
                                <i class='bx bx-add-to-queue icon'></i>
                                <span class="text nav-text">Crear proyecto</span>
                            </a>
                        </li>
                        <li class="nav-link">
                            <a href="#">
                                <i class='bx bx-dollar icon'></i>
                                <span class="text nav-text">Realizar <br></br>Transacción</span>
                            </a>
                        </li>
                        <li class="nav-link">
                            <a href="/admin">
                                <i class='bx bx-cog icon' ></i>
                                <span class="text nav-text">Administrar <br></br>perfil</span>
                            </a>
                        </li>
                        <li class="nav-link">
                            <a href="#">
                                <i class='bx bx-star icon'></i>
                                <span class="text nav-text">Proyectos<br></br>populares</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bottom-content">
                    <div class="content">
                        <li class="">
                            <a href="#">
                                <i class='bx bx-log-out icon' ></i>
                                <span class="text nav-text">Cerrar sesión</span>
                            </a>
                        </li>
                        <li class="mode">
                            <div class="sun-moon">
                                <i class='bx bx-moon icon moon'></i>
                                <i class='bx bx-sun icon sun'></i>
                            </div>
                            <span class="mode-text text">Dark mode</span>
                            <div class="toggle-switch">
                                <span class="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
        <h1 class="titulo">Crear proyecto</h1>

        <div class="contenedor">
            <div class="contenido">
                <div class="col1">
                    <div class="elem1">
                        <label for="Nombre">Nombre</label>
                        <div class="input">
                            <input type="text" id="Nombre" name="nombre" required></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem3">
                    <label for="Desc">Descripción</label>
                        <div class="input">
                            <input type="text" id="Desc" name="Des" required></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem5">
                        <label for="Nombre">Llaves públicas</label>
                        <div class="input">
                            <input type="text" id="Nombre" name="nombre" placeholder="ultimas 10 letras"required></input>
                        </div>
                    </div>
                </div>
                <div class="col2">
                    <div class="elem2">
                        <label for="Nombre">Administradores</label>
                        <div class="imagenes">
                            {/* <img src={avatar1}></img>
                            <img src={avatar2}></img>
                            <img src={avatar3}></img> */}
                        </div>
                    <div class="button">
                        <input type="button" value="+"></input>
                    </div>
                    </div><br></br><br></br>
                    <div class="elem4">
                        <label for="Nombre">Colaboradores</label>
                        <div class="imagenes">
                            {/* <img src={avatar4}></img>
                            <img src={avatar5}></img>
                            <img src={avatar6}></img> */}
                        </div>
                    <div class="button">
                        <input type="button" value="+"></input>
                    </div>    
                    </div><br></br><br></br>
                    <div class="elem6">
                        <label for="Licencia">Licencia</label>
                        <div class="input">
                            <input type="text" id="Licencia" name="Licencia" required></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit">
            <input type="submit" id="Crear proyecto" name="Crear proyecto" value="Crear proyecto"></input>
        </div>
        </body>
        
    
    );
}

export default Crear;