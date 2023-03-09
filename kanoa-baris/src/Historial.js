import React from "react";
import Sidebar from "./Sidebar";
import './AppComplete.css'
import avatar2 from "./imagenes/avatar2.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar6 from "./imagenes/avatar6.png"

function Historial (){
    return (
        <>
        <Sidebar></Sidebar>
        <div>
        <h1 class="titulo">Historial</h1>
        <div class="contenedor">
            <div class="contenido">
                <div class="col1">
                    <div class="elem1">
                        <div class="input">
                        <img src={avatar2} id="img"></img>
                            <label for="imagen" id="imagen"> Cuenta destino </label>
                        </div>
                    </div>
                    <div class="elem3">
                        <div class="input2">
                            <div class="sub1">
                                <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                            </div><br></br>
                            <div class="sub2">
                                <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                            </div><br></br>
                            <div class="sub3">
                                <input type="button" id="btnEstado" value="Estado"></input>
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
                        </div><br></br>
                        <div class="sub2">
                            <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                        </div><br></br>
                        <div class="sub3">
                            <input type="button" id="btnEstado" value="Estado"></input> 
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
                        </div><br></br>
                        <div class="sub2">
                            <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                        </div><br></br>
                        <div class="sub3">
                            <input type="button" id="btnEstado" value="Estado"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
        </>

    );
}

export default Historial;