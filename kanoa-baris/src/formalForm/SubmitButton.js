import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

function SubmitButton(props) {
  const navigate = useNavigate();

  async function getPost() {
    console.log("Get post");
    const response = await client.post("/regquest", {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      pass: document.getElementById("pass").value,
    });
    if (response.data.result) {
      navigate("/login");
    }
    console.log(response);
  }

  return <input className="ing" type="submit" value="Ingresar" onClick={getPost}></input>;
}

export default SubmitButton;
