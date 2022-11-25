import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Administrar from "./AdministarPerfil";
import Borradores from "./Borradores";
import Crear from "./CrearProyecto";
import Historial from "./Historial";
import Home from "./Home"
import Homefeed from "./Homefeed";
import Login from "./Login"
import Registro from "./Registro"
import Testito from "./Testito";
import Transacciones from "./Transacciones";

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/registro" element={<Registro />} />
    <Route exact path="/admin" element={<Administrar />} />
    <Route exact path="/crear" element={<Crear />} />
    <Route exact path="/home_feed" element={<Homefeed />} />
    <Route exact path="/testito" element={<Testito />} />
    <Route exact path="/transacciones" element={<Transacciones />} />
    <Route exact path="/borradores" element={<Borradores />} />
    <Route exact path="/historial" element={<Historial />} />

    </Routes>
</BrowserRouter>

  );
}

export default App;
