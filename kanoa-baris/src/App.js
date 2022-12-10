import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Administrar from "./Pages/AdministarPerfil";
import Borradores from "./Pages/Borradores";
import Crear from "./Pages/CrearProyecto";
import Historial from "./Pages/Historial";
import Home from "./Pages/Home"
import Homefeed from "./Pages/Homefeed";
import Login from "./Pages/Login"
import Registro from "./Pages/Registro"
import Testito from "./Pages/Testito";
import Transacciones from "./Pages/Transacciones";

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
