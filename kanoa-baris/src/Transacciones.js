import React from "react";
import "./Transacciones.css";
import Sidebar from "./Sidebar";
import avatar5 from "./imagenes/avatar5.png"

function Transacciones(){
    return (

        <>
        <Sidebar></Sidebar>
                <h1 class="titulo">Realizar transacción</h1><div class="contenedor">
                <div class="contenido">
                    <div class="col1">
                        <div class="elem1">
                            <label for="Llaves">Llave pública</label>
                            <div class="input">
                                <input type="text" id="Llaves" name="Llaves"></input>
                            </div>
                        </div><br></br><br></br>
                        <div class="elem3">
                            <label for="Llaves">Cantidad</label>
                            <div class="input">
                                <input type="number" id="Llaves" name="Llaves"></input>
                            </div>
                        </div><br></br><br></br>
                        <div class="elem5">
                            <label for="Recompensa"> Recompensa </label>
                            <div class="input">
                                <input type="text" id="Recompensa" name="Recompensa"></input>
                            </div>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="elem2">
                            <div class="input2">
                                <img src={avatar5} id="img"></img>
                                <label for="imagen" id="imagen"> Cuenta destino </label>
                            </div>
                        </div>
                        <div class="elem4">
                            <div class="input3">
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
                        <div class="elem6">
                            <div class="input2">
                                <div class="submit1">
                                    <input type="submit" id="submit1_" value="Borrador"></input>
                                    <input type="submit" id="submit2_" value="Transferir"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br></br><br></br>
            </div><h1 class="titulo2">Transacciones</h1><div class="contenedor">
                <div class="contenido">
                    <div class="col1">
                        <br></br><br></br>
                        <h3>Borradores</h3>
                        <div class="elem2">
                            <div class="input2">
                                <img src={avatar5} id="img"></img>
                                <label for="imagen" id="imagen"> Cuenta destino </label>
                            </div>
                        </div>
                        <div class="elem4">
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
                        <div class="elem6">
                            <div class="input2">
                                <div class="submit1">
                                    <input type="submit" id="Editar" value="Editar"></input>
                                    <input type="submit" id="submit2_" value="Transferir"></input>
                                </div>
                            </div>
                        </div><br></br>
                        <div class="buttonHis">
                            <input type="submit" id="historial" value="Historial"></input>
                        </div>
                    </div>
                    <div class="col2">
                        <h3>Última transacción</h3><br></br><br></br><br></br>
                        <div class="elem2">

                            <div class="input2">
                                <img src={avatar5} id="img"></img>
                                <label for="imagen" id="imagen"> Cuenta destino </label>
                            </div>
                        </div>
                        <div class="elem4">
                            <div class="sub1">
                                <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                            </div><br></br>
                            <div class="sub2">
                                <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                            </div><br></br>
                            <div class="sub3">
                                <input type="button" id="btnEstado" value="Estado"></input>
                            </div>
                        </div><br></br>
                        <div class="buttonHis">
                            <input type="submit" id="CrearTrans" value="Crear transacción"></input>
                        </div>
                    </div>
                </div>
            </div></>

    );

}

export default Transacciones;