import React from "react";
import { Title } from "../PageBase";
import SideBar from "../SideBarFix";
function Transacciones(props) {
  return (
    <>
      <SideBar />
      <Title text="Transacciones" />
      <div className="contenedors">
        <div className="contenidos">
          <div className="col1">
            <h3>Borradores</h3>
            <div className="elem2">
              <div className="input2">
                <input
                  type="image"
                  src="imagenes/avatar5.png "
                  id="img"
                  name="imagen"
                />
                <label htmlFor="imagen" id="imagen">
                  {" "}
                  Cuenta destino{" "}
                </label>
              </div>
            </div>
            <div className="elem4">
              <div className="sub1">
                <input
                  type="text"
                  id="IdTrans"
                  placeholder="Id de Transacción"
                />
              </div>
              <br />
              <div className="sub2">
                <input type="text" id="LlavePub" placeholder="Llave pública" />
              </div>
              <br />
              <div className="sub3">
                <input type="button" id="btnEstado" value="Estado" />
              </div>
            </div>
            <div className="elem6">
              <div className="input2">
                <div className="submit1">
                  <input type="submit" id="Editar" value="Editar" />
                  <input type="submit" id="submit2_" value="Transferir" />
                </div>
              </div>
            </div>
            <br />
            <div className="buttonHis">
              <input type="submit" id="historial" value="Historial" />
            </div>
          </div>
          <div className="col2">
            <h3>Última transacción</h3>
            <div className="elem2">
              <div className="input2">
                <input
                  type="image"
                  src="imagenes/avatar5.png "
                  id="img"
                  name="imagen"
                />
                <label htmlFor="imagen" id="imagen">
                  {" "}
                  Cuenta destino{" "}
                </label>
              </div>
            </div>
            <div className="elem4">
              <div className="sub1">
                <input
                  type="text"
                  id="IdTrans"
                  placeholder="Id de Transacción"
                />
              </div>
              <br />
              <div className="sub2">
                <input type="text" id="LlavePub" placeholder="Llave pública" />
              </div>
              <br />
              <div className="sub3">
                <input type="button" id="btnEstado" value="Estado" />
              </div>
            </div>
            <br />
            <div className="buttonHis">
              <input type="submit" id="CrearTrans" value="Crear transacción" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transacciones;
