import React from "react";
//import './Sidebar.css'
import avatar1 from "./imagenes/avatar1.png"
import avatar2 from "./imagenes/avatar2.png"
import avatar3 from "./imagenes/avatar3.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar5 from "./imagenes/avatar5.png"
import avatar6 from "./imagenes/avatar6.png"

function Sidebar(props){
    return(
        <nav className="sidebar" >
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={avatar3}></img>
                        </span>
                        <div className="text header-text">
                            <span className="name">{props.nombre}</span>
                        </div>
                    </div>
                    <i className='bx bxs-chevron-right toggle'></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="/home_feed">
                                    <i className='bx bx-home icon' ></i>
                                    <span className="text nav-text">Homefeed</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="/crear">
                                    <i className='bx bx-add-to-queue icon'></i>
                                    <span className="text nav-text">Crear proyecto</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="/transacciones">
                                    <i className='bx bx-dollar icon'></i>
                                    <span className="text nav-text">Realizar <br></br>Transacción</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="/admin">
                                    <i className='bx bx-cog icon' ></i>
                                    <span className="text nav-text">Administrar <br></br>perfil</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <div className="content">
                            <li className="">
                                <a href="#">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="text nav-text">Cerrar sesión</span>
                                </a>
                            </li>
                            <li className="mode">
                                <div className="sun-moon">
                                    <i className='bx bx-moon icon moon'></i>
                                    <i className='bx bx-sun icon sun'></i>
                                </div>
                                <span className="mode-text text">Dark mode</span>
                                <div className="toggle-switch">
                                    <span className="switch"></span>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Sidebar;