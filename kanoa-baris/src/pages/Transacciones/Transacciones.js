import React from "react";
import { Title } from "../PageBase";
import SideBar from "../SideBarFix"; //tenemos una app muy simple, solo recibe una cadena de texto, y la devuelve, el cambiarla consume gas
// el devolverla no
// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

import { useState } from "react";
import { ethers } from "ethers";
import SimpleStore_abi from "./SimpleStore_abi.json";

function SimpleStore(props) {
  const contractAddress = "0xB884e3b71fDb6204A3988227D8a9d3C022468a8b";

  const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");
  const [errorMessage, setErrorMessage] = useState(null); // se usara para mostrar errores en el ui
  const [defaultAccount, setdefaultAccount] = useState(null); // nuestra adderess

  const [currectContractVal, setCurrentContractVal] = useState(null); // es el valor que se lee en el contratp

  const [provider, setProvider] = useState(null); // quien nos proporciona el estado de la blockcahin
  const [signer, setSigner] = useState(null); // con que llave firmamos nuestras acciones
  const [contract, setContract] = useState(null); // supongo que es la direccion del contrato

  const connectWalletHandler = () => {
    //conectar la wallet con metamask
    if (window.ethereum != null) {
      //revisar si metamask esta instalado
      // el pasarle el json al request se hace un JSON RPC, remote procedure call, basicamente le decimos y le damos aulgun metodo que queremos ejecutar
      // .request(args); args =  { method: string;  params?: unknown[] | object; } // es una promesa
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]); //result 0 es la wallet
          setConnectButtonText("Wallet Connected");
        });
    } else {
      setErrorMessage("Metamask no esta instalado");
    }
  };

  const accountChangeHandler = (newWallet) => {
    setdefaultAccount(newWallet);
    updateEthers();
  };

  const updateEthers = () => {
    // actualizamos y declaramos todos los valores necesario para interactuar con la blockchain
    // let tempProvider = new ethers.providers.Web3Provider(window.ethereum); // solii=cito que metamask sea mi provider
    let tempProvider = new ethers.BrowserProvider(window.ethereum);
    setProvider(tempProvider); // podria actualizarlo y

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      contractAddress,
      SimpleStore_abi,
      tempSigner
    ); //el simplestore abi es el abi del contrato, como un json del contrato
    setContract(tempContract);
  };

  const getContractValue = async () => {
    let value = await contract.retrieve(); // solo llamamos a nuestra aplicacion o mas bien, al metodo que buscamos implementar desde nuestro smart controct
    setCurrentContractVal(value);
  };

  const setUpdateHandler = (event) => {
    event.preventDefault();
    let updatedText = document.getElementById("setText").value;
    contract.store(updatedText);
  };

  return (
    <div>
      <h3>{"Get set interaction with contract"}</h3>
      <button onClick={connectWalletHandler}>{connectButtonText}</button>
      <h3>Address: {defaultAccount}</h3>

      <form onSubmit={setUpdateHandler}>
        <h3>Update Value</h3>
        <input type="text" id="setText" />
        <input type="submit" value="Update" />
      </form>

      <button onClick={getContractValue}>Get Value</button>
      <h3>Value: {currectContractVal}</h3>
    </div>
  );
}

function Transacciones(props) {
  const contractAddress = "0xB884e3b71fDb6204A3988227D8a9d3C022468a8b";

  const [connectButtonText, setConnectButtonText] =
    useState("Conectar a Wallet");
  const [errorMessage, setErrorMessage] = useState(null); // se usara para mostrar errores en el ui
  const [defaultAccount, setdefaultAccount] = useState(null); // nuestra adderess

  const [currectContractVal, setCurrentContractVal] = useState(null); // es el valor que se lee en el contratp

  const [provider, setProvider] = useState(null); // quien nos proporciona el estado de la blockcahin
  const [signer, setSigner] = useState(null); // con que llave firmamos nuestras acciones
  const [contract, setContract] = useState(null); // supongo que es la direccion del contrato

  const connectWalletHandler = () => {
    //conectar la wallet con metamask
    if (window.ethereum != null) {
      //revisar si metamask esta instalado
      // el pasarle el json al request se hace un JSON RPC, remote procedure call, basicamente le decimos y le damos aulgun metodo que queremos ejecutar
      // .request(args); args =  { method: string;  params?: unknown[] | object; } // es una promesa
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]); //result 0 es la wallet
          setConnectButtonText("Wallet Connected");
        });
    } else {
      setErrorMessage("Metamask no esta instalado");
    }
  };

  const accountChangeHandler = (newWallet) => {
    setdefaultAccount(newWallet);
    updateEthers();
  };

  const updateEthers = () => {
    // actualizamos y declaramos todos los valores necesario para interactuar con la blockchain
    // let tempProvider = new ethers.providers.Web3Provider(window.ethereum); // solii=cito que metamask sea mi provider
    let tempProvider = new ethers.BrowserProvider(window.ethereum);
    setProvider(tempProvider); // podria actualizarlo y

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      contractAddress,
      SimpleStore_abi,
      tempSigner
    ); //el simplestore abi es el abi del contrato, como un json del contrato
    setContract(tempContract);
  };

  const getContractValue = async () => {
    let value = await contract.retrieve(); // solo llamamos a nuestra aplicacion o mas bien, al metodo que buscamos implementar desde nuestro smart controct
    setCurrentContractVal(value);
  };

  const setUpdateHandler = (event) => {
    event.preventDefault();
    let updatedText = document.getElementById("setText").value;
    contract.store(updatedText);
  };

  return (
    <>
      <SideBar />
      <Title text="Transacciones" />
      <div className="contenedor">
        <div className="contenido">
          <div className="col1">
            <h3>{"Conectarse a Metamask"}</h3>
            <button className="proyect-button" onClick={connectWalletHandler}>
              {connectButtonText}
            </button>
            <br />
            <h3>Address: {defaultAccount}</h3>
            <br />
            <h1 class="titulo">Realizar transacción</h1>
            <div class="contenedor">
              <div class="contenido">
                <div class="col1">
                  <div class="elem1">
                    <label for="Llaves">Llave pública</label>
                    <div class="input">
                      <input type="text" id="Llaves" name="Llaves" />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="elem3">
                    <label for="Llaves">Cantidad</label>
                    <div class="input">
                      <input type="number" id="Llaves" name="Llaves" />
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <br />
            </div>
            <br />
            <div className="buttonHis">
              <input
                className="proyect-button"
                type="submit"
                id="CrearTrans"
                value="Crear transacción"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transacciones;
