import React from "react";
import './AppComplete.css';
import Sidebar from "./Sidebar";

function Administrar (){
    return(
        <body>

        <Sidebar></Sidebar>

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