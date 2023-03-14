import React from "react";
//import './AppComplete.css'
import Sidebar from "./Sidebar";
import avatar5 from "./imagenes/avatar5.png"
import { Link } from "react-router-dom"

function Transacciones(){
    return (

        <>
        <Sidebar></Sidebar>
                <h1 className="titulo">Realizar transacción</h1><div className="contenedor">
                <div className="contenido">
                    <div className="col1">
                        <div className="elem1">
                            <label htmlFor="Llaves">Llave pública</label>
                            <div className="input">
                                <input type="text" id="Llaves" name="Llaves"></input>
                            </div>
                        </div><br></br><br></br>
                        <div className="elem3">
                            <label htmlFor="Llaves">Cantidad</label>
                            <div className="input">
                                <input type="number" id="Llaves" name="Llaves"></input>
                            </div>
                        </div><br></br><br></br>
                        <div className="elem5">
                            <label htmlFor="Recompensa"> Recompensa </label>
                            <div className="input">
                                <input type="text" id="Recompensa" name="Recompensa"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="elem2">
                            <div className="input2">
                                <img src={avatar5} id="img"></img>
                                <label htmlFor="imagen" id="imagen"> Cuenta destino </label>
                            </div>
                        </div>
                        <div className="elem4">
                            <div className="input3">
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
                        <div className="elem6">
                            <div className="input2">
                                <div className="submit1">
                                    <Link to="/borradores" id="submit1_"  type="submit">Borrador</Link>
                                    <input type="submit" id="submit2_" value="Transferir"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br></br><br></br>
            </div><h1 className="titulo2">Transacciones</h1><div className="contenedor">
                <div className="contenido">
                    <div className="col1">
                        <br></br><br></br>
                        <h3>Borradores</h3>
                        <div className="elem2">
                            <div className="input2">
                                <img src={avatar5} id="img"></img>
                                <label htmlFor="imagen" id="imagen"> Cuenta destino </label>
                            </div>
                        </div>
                        <div className="elem4">
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
                        <div className="elem6">
                            <div className="input2">
                                <div className="submit1">
                                    <input type="submit" id="Editar" value="Editar"></input>
                                    <input type="submit" id="submit2_" value="Transferir"></input>
                                </div>
                            </div>
                        </div><br></br>
                        <div className="buttonHis">
                            <Link to="/historial" id="historial">Historial</Link>
                        </div>
                    </div>
                    <div className="col2">
                        <h3>Última transacción</h3><br></br><br></br><br></br>
                        <div className="elem2">

                            <div className="input2">
                                <img src={avatar5} id="img"></img>
                                <label htmlFor="imagen" id="imagen"> Cuenta destino </label>
                            </div>
                        </div>
                        <div className="elem4">
                            <div className="sub1">
                                <input type="text" id="IdTrans" placeholder="Id de Transacción"></input>
                            </div><br></br>
                            <div className="sub2">
                                <input type="text" id="LlavePub" placeholder="Llave pública"></input>
                            </div><br></br>
                            <div className="sub3">
                                <input type="button" id="btnEstado" value="Estado"></input>
                            </div>
                        </div><br></br>
                        <div className="buttonHis">
                            <input type="submit" id="CrearTrans" value="Crear transacción"></input>
                        </div>
                    </div>
                </div>
            </div></>

    );

}

export default Transacciones;