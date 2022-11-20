import React from "react";
import './Homefeed.css';

function Homefeed (){
    return (
        <body>
        <nav class="sidebar">
            <header>
                <div class="image-text">
                    <span class="image">
                        <img src="imagenes/avatar3.png"></img>
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
                            <a href="AdministrarPerfil.html">
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

        <section class="sec2"></section>
            <div class="somos">
                <h1><b>Homefeed</b></h1>
                <h2>Tus proyectos</h2>  <br></br>
                <div class="Proyectos">
                    <div class="pp1">
                        <p>Nombre del Proyecto: </p><br></br>
                        <h3 class="proyectos_">KANOA</h3>
                    </div>   
                    <div class="pp2"> 
                        <p class="titulo">Descripción del proyecto:</p><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos accusantium possimus dignissimos modi ratione velit nobis quo, dolorum rerum </p>
                    </div><br></br><br></br><br></br>
                    <div class="pp3">
                        <div class="pp3_">
                            <p><span class="donar-span"><i class='bx bx-upload icon'></i> Actualizar repositorio del<br></br> proyecto: </span></p>
                        </div>
                    </div>
                    <div class="pp4">  
                        <div class="donar">
                            <img src="imagenes/bitcoin.png"></img><span class="donar-span">"Últimas 10 letras"</span> <span class="donar-span"> Últimas 10 letras" </span>
                        </div>
                    </div><br></br><br></br><br></br>
                    <div class="pp5">    
                        <p> Número de descargas funcionales: </p><br></br><br></br>
                        <p>Recaudación total del proyecto: </p>
                    </div>
                    <div class="pp6">
                        <div class="btn-admin">
                            <input type="button" value="Administrar proyecto"></input>
                        </div>
                    </div>
            </div>
            </div>
        <script src="homefeed.js"></script>
    </body>
    );
}

export default Homefeed;