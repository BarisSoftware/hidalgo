import React from "react";
import Sidebar from "./Sidebar";
//import './AppComplete.css'
import avatar2 from "./imagenes/avatar2.png"
import avatar4 from "./imagenes/avatar4.png"
import avatar6 from "./imagenes/avatar6.png"

function Historial (){
    return (
        <>
        <Sidebar></Sidebar>
        <div>
        <h1 className="titulo">Historial</h1>
        <div className="contenedor">
            <div className="contenido">
                <div className="col1">
                    <div className="elem1">
                        <div className="input">
                        <img src={avatar2} id="img"></img>
                            <label htmlFor="imagen" id="imagen"> Cuenta destino </label>
                        </div>
                    </div>
                    <div className="elem3">
                        <div className="input2">
                            <div className="sub1">
                                <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                            </div><br></br>
                            <div className="sub2">
                                <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                            </div><br></br>
                            <div className="sub3">
                                <input type="button" id="btnEstado" value="Estado"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col1">
                <div className="elem1">
                    <div className="input">
                        <img src={avatar4} id="img"></img>
                        <label htmlFor="imagen" id="imagen"> Cuenta destino </label>
                    </div>
                </div>
                <div className="elem3">
                    <div className="input2">
                        <div className="sub1">
                            <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                        </div><br></br>
                        <div className="sub2">
                            <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                        </div><br></br>
                        <div className="sub3">
                            <input type="button" id="btnEstado" value="Estado"></input> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="col1">
                <div className="elem1">
                    <div className="input">
                        <img src={avatar6} id="img"></img>
                        <label htmlFor="imagen" id="imagen"> Cuenta destino </label>
                    </div>
                </div>
                <div className="elem3">
                    <div className="input2">
                        <div className="sub1">
                            <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                        </div><br></br>
                        <div className="sub2">
                            <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                        </div><br></br>
                        <div className="sub3">
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