import React from "react";
import './CrearProyecto.css';
import avatar1 from "./imagenes/avatar1.png"
import avatar2 from "./imagenes/avatar2.png"
import avatar3 from "./imagenes/avatar3.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar5 from "./imagenes/avatar5.png"
import avatar6 from "./imagenes/avatar6.png"


function Sidebar(props){
    return(
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
                                <a href="/home_feed">
                                    <i class='bx bx-home icon' ></i>
                                    <span class="text nav-text">Homefeed</span>
                                </a>
                            </li>
                            <li class="nav-link">
                                <a href="/crear">
                                    <i class='bx bx-add-to-queue icon'></i>
                                    <span class="text nav-text">Crear proyecto</span>
                                </a>
                            </li>
                            <li class="nav-link">
                                <a href="/transacciones">
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
    );
}

export default Sidebar;