import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeFix from "./pages/HomeFix";

import Login from "./pages/Login";
import Registro from "./pages/Registro";

import HomeFeed from "./pages/HomeFeed";
import CreateProyect from "./pages/CreateProyectFix";
import Transacciones from "./pages/Transacciones/Transacciones";
import PopularProyect from "./pages/PopularProyects/PopularProyects";
import AdminProfile from "./pages/AdminProfile/AdminProfile";

import Testito from "./Testito";

// Reparacion de paginas
//import LoginPage from "./pages/Login"
//import RegistroPage from "./pages/Registro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/fix" element={<HomeFix />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/homeFeed" element={<HomeFeed />} />
        <Route exact path="/createProyect" element={<CreateProyect />} />
        <Route exact path="/transacciones" element={<Transacciones />} />
        <Route exact path="/popularProyects" element={<PopularProyect />} />
        <Route exact path="/adminProfile" element={<AdminProfile />} />

        <Route exact path="/testito" element={<Testito />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
