import React from "react";
//import './AppComplete.css';
import Sidebar from "./Sidebar";

function Administrar (){
    return(
        <body>

        <Sidebar></Sidebar>

        <h1 className="titulo">Administrar perfil</h1>
        <center>
            <input type="file" name="archivo" id="image-input" accept="image/jpeg, image/png, image/jpg"></input><br></br>
            <div className="display-image"></div>
        </center>
        <div className="contenedor">
            <div className="contenido">
                <div className="col1">
                    <div className="elem1">
                        <label htmlFor="Nombre">Nombre</label>
                        <div className="input">
                            <input type="text" id="Nombre" name="Nombre"></input>
                        </div>
                    </div><br></br><br></br>
                    <div className="elem3">
                    <label htmlFor="Correo">Correo electrónico</label>
                        <div className="input">
                            <input type="email" id="Correo" name="correo"></input>
                        </div>
                    </div><br></br><br></br>
                    <div className="elem5">
                        <label htmlFor="pass">Contraseña</label>
                        <div className="input">
                            <input type="password" id="pass" name="pass"></input>
                        </div>
                    </div><br></br><br></br>
                    <div className="elem7">
                        <label htmlFor="Conpass">Confirmación contraseña</label>
                        <div className="input">
                            <input type="password" id="Conpass" name="Conpass"></input>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div className="elem2">
                        <label htmlFor="emailrec">Correo de recuperación</label>
                        <div className="input">
                            <input type="email" id="emailrec" name="emailrec"></input>
                        </div>
                    </div><br></br><br></br>
                    <div className="elem4">
                        <label htmlFor="tel">Téléfono</label>
                        <div className="input">
                            <input type="tel" id="tel" name="tel"></input>
                        </div> 
                    </div><br></br><br></br>
                    <div className="elem6">
                        <label htmlFor="Llaves">Llaves públicas</label>
                        <div className="input">
                            <input type="text" id="Llaves" name="Llaves" placeholder="últimas 10 letras"></input>
                        </div>
                        <div className="button">
                            <input type="button" value="+"></input>
                        </div>
                    </div><br></br><br></br>
                    <div className="elem8">
                        <label htmlFor="Llaves">Tecnologías familiares</label>
                        <div className="input">
                            <input type="text" id="Llaves" name="Llaves" placeholder="Primera, segunda o tercera tec"></input>
                        </div>
                        <div className="button">
                            <input type="button" value="+"></input>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="submit">
            <input type="submit" id="Crear proyecto" name="Crear proyecto" value="Crear proyecto"></input>
            </div>
            <script src="Adminis.js"></script>
        </body>
        
        
    );
}

export default Administrar;