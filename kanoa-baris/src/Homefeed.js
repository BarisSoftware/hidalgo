import React from "react";
import './Homefeed.css';
import Sidebar from "./Sidebar";

function Homefeed (){
    return (
        <body>
            <Sidebar></Sidebar>
        

        <section class="sec2"></section>
            <div class="somos">
                <h1><b>Homefeed</b></h1>
                <h2>Tus proyectos</h2>  <br></br>
                <div class="Proyectos">
                    <div class="pp1">
                        <p>Nombre del Proyecto: </p><br></br>
                        <h3 class="proyectos_">KANOA</h3>
                    </div>   
                    <div class="pp2"> 
                        <p class="titulo">Descripción del proyecto:</p><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos accusantium possimus dignissimos modi ratione velit nobis quo, dolorum rerum </p>
                    </div><br></br><br></br><br></br>
                    <div class="pp3">
                        <div class="pp3_">
                            <p><span class="donar-span"><i class='bx bx-upload icon'></i> Actualizar repositorio del<br></br> proyecto: </span></p>
                        </div>
                    </div>
                    <div class="pp4">  
                        <div class="donar">
                            <img src="imagenes/bitcoin.png"></img><span class="donar-span">"Últimas 10 letras"</span> <span class="donar-span"> Últimas 10 letras" </span>
                        </div>
                    </div><br></br><br></br><br></br>
                    <div class="pp5">    
                        <p> Número de descargas funcionales: </p><br></br><br></br>
                        <p>Recaudación total del proyecto: </p>
                    </div>
                    <div class="pp6">
                        <div class="btn-admin">
                            <input type="button" value="Administrar proyecto"></input>
                        </div>
                    </div>
            </div>
            </div>
        <script src="homefeed.js"></script>
    </body>
    );
}

export default Homefeed;