import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function Recived(props) {
  return <p className="incomming">{props.text}</p>;
}

function Send(props) {
  return <p className="outcomming">{props.text}</p>;
}

function Chat(props) {
  const navigate = useNavigate();

  const [mensajes, setMensajes] = useState([{ mensaje: "Sin mensajes" }]);
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [idUsuario, setIdUsuario] = React.useState(undefined);

  React.useEffect(() => {
    checkMessages();
  }, []);

  const checkMessages = async () => {
    await client
      .post("/getMessages", {
        idProyecto: props.idProyecto,
      })
      .then((result) => {
        console.log(result.data.mensajes);
        setMensajes(result.data.mensajes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();

    client
      .post("/sendMessage", {
        idUser: idUsuario,
        email: correo,
        mensaje: document.getElementById("mensaje").value,
        idProyecto: props.idProyecto,
      })
      .then((result) => {
        console.log(result);
        checkMessages();
      })
      .catch((error) => {
        console.log(error);
      });

    document.getElementById("mensaje").value = "";
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {mensajes.map((mssg) => (
          <Send text={mssg.mensaje}></Send>
        ))}
      </div>
      <div className="chat-input">
        <form id="chatForm" onSubmit={sendMessageHandler}>
          <input
            type="text"
            placeholder="Mensaje ..."
            name="mensaje"
            id="mensaje"
          />
          <input type="hidden" name="idProyecto" value={props.idProyecto} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Chat;
