import React from "react";
import "./Borradores.css";
import Sidebar from "./Sidebar";
import avatar2 from "./imagenes/avatar2.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar6 from "./imagenes/avatar6.png"

function Borradores (){
    return (

        <>
        <Sidebar></Sidebar>
        <div>
        <h1 class="titulo">Borradores</h1>
        <div className="contenedor">
            <div className="contenido">
                <div className="col1">
                    <div className="elem1">
                        <div className="input">
                            <img src={avatar2} id="img"></img>
                            <label for="imagen" id="imagen"> Cuenta destino </label>
                        </div>
                    </div>
                    <div className="elem3">
                        <div className="input2">
                            <div className="sub1">
                            <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                            </div>
                            <br></br>
                            <div className="sub2">
                                <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                            </div>
                            <br></br>
                            <div class="sub3">
                                <input type="button" id="btnEstado" value="Estado"></input>
                            </div>
                        </div>
                    </div>
                    <div class="elem5">
                        <div class="input2">
                            <div class="submit1">
                                <input type="submit" id="submit1_" value="Borrador"></input>
                                <input type="submit" id="submit2_" value="Transferir"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col1">
                <div class="elem1">
                    <div class="input">
                        <img src={avatar4} id="img"></img>
                        <label for="imagen" id="imagen"> Cuenta destino </label>
                    </div>
                </div>
                <div class="elem3">
                    <div class="input2">
                        <div class="sub1">
                            <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                        </div>
                        <br></br>
                        <div class="sub2">
                            <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                        </div>
                        <br></br>
                        <div class="sub3">
                            <input type="button" id="btnEstado" value="Estado"></input>
                        </div>
                    </div>
                </div>
                <div class="elem5">
                    <div class="input2">
                        <div class="submit1">
                            <input type="submit" id="submit1_" value="Borrador"></input>
                            <input type="submit" id="submit2_" value="Transferir"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col1">
                <div class="elem1">
                    <div class="input">
                        <img src={avatar6} id="img"></img>
                        <label for="imagen" id="imagen"> Cuenta destino </label>
                    </div>
                </div>
                <div class="elem3">
                    <div class="input2">
                        <div class="sub1">
                            <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                        </div>
                        <br></br>
                        <div class="sub2">
                            <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                        </div>
                        <br></br>
                        <div class="sub3">
                            <input type="button" id="btnEstado" value="Estado"></input>
                        </div>
                    </div>
                </div>
                <div class="elem5">
                    <div class="input2">
                        <div class="submit1">
                            <input type="submit" id="submit1_" value="Borrador"></input>
                            <input type="submit" id="submit2_" value="Transferir"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </>
    );
}

export default Borradores;