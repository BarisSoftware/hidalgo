import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
<<<<<<< HEAD
import Home from "./Home"
=======
import Administrar from "./AdministarPerfil";
import Crear from "./CrearProyecto";
import Home from "./Home"
import Homefeed from "./Homefeed";
>>>>>>> ReactAppJS-hotfix
import Login from "./Login"
import Registro from "./Registro"


function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/registro" element={<Registro />} />
<<<<<<< HEAD
=======
    <Route exact path="/admin" element={<Administrar />} />
    <Route exact path="/crear" element={<Crear />} />
    <Route exact path="/home_feed" element={<Homefeed />} />
>>>>>>> ReactAppJS-hotfix
    </Routes>
</BrowserRouter>

  );
}

export default App;
