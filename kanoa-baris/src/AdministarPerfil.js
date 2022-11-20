import React from "react";
import './AdministrarPerfil.css';

function Administrar (){
    return(
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

            <div className="menu-bar">
            <div class="menu">
                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="homefeed.html">
                            <i className="bx bx-home icon"></i>
                            <span className="text nav-text">Homefeed</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/crear">
                            <i className="bx bx-add-to-queue icon"></i>
                            <span className="text nav-text">Crear Proyecto</span>
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
        <h1 class="titulo">Administrar perfil</h1>
        <center>
            <input type="file" name="archivo" id="image-input" accept="image/jpeg, image/png, image/jpg"></input><br></br>
            <div className="display-image"></div>
        </center>
        <div class="contenedor">
            <div class="contenido">
                <div class="col1">
                    <div class="elem1">
                        <label for="Nombre">Nombre</label>
                        <div class="input">
                            <input type="text" id="Nombre" name="Nombre"></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem3">
                    <label for="Correo">Correo electrónico</label>
                        <div class="input">
                            <input type="email" id="Correo" name="correo"></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem5">
                        <label for="pass">Contraseña</label>
                        <div class="input">
                            <input type="password" id="pass" name="pass"></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem7">
                        <label for="Conpass">Confirmación contraseña</label>
                        <div class="input">
                            <input type="password" id="Conpass" name="Conpass"></input>
                        </div>
                    </div>
                </div>
                <div class="col2">
                    <div class="elem2">
                        <label for="emailrec">Correo de recuperación</label>
                        <div class="input">
                            <input type="email" id="emailrec" name="emailrec"></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem4">
                        <label for="tel">Téléfono</label>
                        <div class="input">
                            <input type="tel" id="tel" name="tel"></input>
                        </div> 
                    </div><br></br><br></br>
                    <div class="elem6">
                        <label for="Llaves">Llaves públicas</label>
                        <div class="input">
                            <input type="text" id="Llaves" name="Llaves" placeholder="últimas 10 letras"></input>
                        </div>
                        <div class="button">
                            <input type="button" value="+"></input>
                        </div>
                    </div><br></br><br></br>
                    <div class="elem8">
                        <label for="Llaves">Tecnologías familiares</label>
                        <div class="input">
                            <input type="text" id="Llaves" name="Llaves" placeholder="Primera, segunda o tercera tec"></input>
                        </div>
                        <div class="button">
                            <input type="button" value="+"></input>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="submit">
            <input type="submit" id="Crear proyecto" name="Crear proyecto" value="Crear proyecto"></input>
            </div>
            <script src="Adminis.js"></script>
        </body>
        
        
    );
}

export default Administrar;