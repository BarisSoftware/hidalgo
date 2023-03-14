import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CreateProyect from "./pages/CreateProyectFix";

import Administrar from "./AdministarPerfil";
import Borradores from "./Borradores";
import Crear from "./CrearProyecto";
import Historial from "./Historial";
import Homefeed from "./Homefeed";

import Testito from "./Testito";
import Transacciones from "./Transacciones";

// Reparacion de paginas
//import LoginPage from "./pages/Login"
//import RegistroPage from "./pages/Registro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/createProyect" element={<CreateProyect />} />
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
