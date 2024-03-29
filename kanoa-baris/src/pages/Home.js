import React from "react";
import NewLogoKanoa from "../imagenes/newLogo.png";
import NavBar from "./NavBarFix";
//import Canvas from "./Canvas";
import "../App.css";
//import * as THREE from  "three";
import miImagen from "../imagenes/eneágono.png";

function Home() {
  return (
    <div className="Home">
      {/* <NavBar text="Home" link="/"></NavBar> */}
      <NavBar></NavBar>
      <section className="first">
        <div id="title">
          <h1 id="kanoa">KANOA</h1>
          <br></br>
          <h3 id="libertad">Navega Hacia La Libertad</h3>
        </div>
      </section>

      <section className="second">
        <div className="left">
          <h2>Made for mass adoption</h2>
        </div>

        <div className="right">
          <div class="top-right">
            <div className="col no-left-padding">
              <div className="row">
                <div className="col-md-6 mb-2 undefined">
                  <div className="p-6 IndexStats_index-stats__card__29r6F">
                    <h2 class="h5 IndexStats_index-stats__card__title__3HNFv">
                      BARIS
                    </h2>
                    <p className="small subdeud">
                      BARIS es una empresa dedicada al progreso tecnológico y
                      social a través del desarrollo de sistemas de información
                      rentables, escalables y mantenibles mediante el
                      seguimiento de estándares de calidad dentro de la
                      industria.
                    </p>
                    <div className="mt-6">
                      <div class="h5 fw-normal IndexStats_index-stats__live__Q3h4O"></div>
                      <div class="smaller text-uppercase subdued IndexStats_index-stats__ff-mono__2IrIe"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cols no-left-padding">
              <div className="rows">
                <div className="cols-md-6 mb-2 undefined">
                  <div className="p-6 IndexStats_index-stats__card__29r6F">
                    <h2 class="h5 IndexStats_index-stats__card__title__4HNFv">
                      KANOA
                    </h2>
                    <p className="small subdeud">
                      Somos una aplicación web que permite almacenar los
                      archivos de un software, así como su descarga, y además
                      permite donar al proyecto o recibir un pago de acuerdo al
                      número de descargas hechas desde la aplicación con una
                      cuenta.
                    </p>
                    <div className="mt-6">
                      <div class="h5 fw-normal IndexStats_index-stats__live__Q3h4O"></div>
                      <div class="smaller text-uppercase subdued IndexStats_index-stats__ff-mono__2IrIe"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bottom-right">
            <div className="colss no-left-padding">
              <div className="row">
                <div className="colss-md-6 mb-2 undefined">
                  <div className="p-6 IndexStats_index-stats__card__29r6F">
                    <h2 class="h5 IndexStats_index-stats__card__title__5HNFv">
                      Ethereum
                    </h2>
                    <p className="small subdeud">
                      Usamos la red de Ethereum para la distribución de las
                      recompensas y permitir la donación directa y el
                      intercambio de recompensas entre usuarios, permitirá al
                      usuario personalizar su perfil y agregar proyectos y
                      versiones.
                    </p>
                    <div className="mt-6">
                      <div class="h5 fw-normal IndexStats_index-stats__live__Q3h4O"></div>
                      <div class="smaller text-uppercase subdued IndexStats_index-stats__ff-mono__2IrIe"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="colsss no-left-padding">
              <div className="rows">
                <div className="colsss-md-6 mb-2 undefined">
                  <div className="p-6 IndexStats_index-stats__card__29r6F">
                    <h2 class="h5 IndexStats_index-stats__card__title__6HNFv">
                      MetaMask
                    </h2>
                    <p className="small subdeud">
                      MetaMask Es una comunidad global de desarrolladores que
                      trabaja para hacer del mundo un lugar mejor con la
                      tecnología blockchain. En nuestro caso, Metamask nos
                      proporciona acceso a una API que permite administrar las
                      billeteras de nuestros usuarios.
                    </p>
                    <div className="mt-6">
                      <div class="h5 fw-normal IndexStats_index-stats__live__Q3h4O"></div>
                      <div class="smaller text-uppercase subdued IndexStats_index-stats__ff-mono__2IrIe"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="left_three">
          <h1>Recursos Para Desarrolladores</h1>
          <p>Un manual para conocer el sistema de Ethereum y MetaMask.</p>
          <div className="botoncitos">
            <a className="b1" href="https://ethereum.org/es/what-is-ethereum/">
              Ethereum
            </a>
            <a className="b2" href="https://metamask.io/">
              MetaMask
            </a>
          </div>
        </div>
        <div className="right_three">
          <img className="ene" src={miImagen} alt="Descripción de la imagen" />
        </div>
      </section>
    </div>
  );
}
export default Home;

// function Home() {
//   //Es necesario el corregir pasarle el texto en el parameto
//   return (
//     <div className="Home">
//       {

//         <div className="container">
//           <NavBar text="LOGIN" link="/login"></NavBar>
//         <section className="first">

//           <div id="title">
//           <h1 id="kanoa">KANOA</h1>
//           <br></br>
//           <h3 id="libertad">Navega Hacia La Libertad</h3>
//           </div>
//         </section>

//         <section className="second">

//            <div class='container-column'>
//             <div class='apple'>
//               <div class='image-copy'>
//                 <h2>Creativity and community. Woven toghether.</h2>
//                 <h3></h3>
//                 <div class='flex'>

//                 </div>
//               </div>
//           </div>
//           </div>

//   </section>

// // // //         <section className="third">
// // // //           <div class='container-row'>
// // // //             <div class='page-watch column-50'>
// // // //               <div class='image-copy'>
// // // //                 <h4>Misión</h4>
// // // //                 <h5>BORIS es una empresa dedicada al progreso
// // // //                    tecnológico y social a través del desarrollo
// // // //                    de sistemas de información rentables, escalables
// // // //                    y mantenibles mediante el seguimiento de estándares
// // // //                    de calidad dentro de la industria.</h5>
// // // //                 <div class='flex'>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div class='page-ipad column-50'>
// // // //               <div class='image-copy'>
// // // //                 <h4>Visión</h4>
// // // //                 <h5>Ser una empresa inspiradora y de referencia en el
// // // //                     desarrollo de proyectos informáticos con alto impacto
// // // //                     social dentro de México por la eficiencia y rentabilidad
// // // //                     de los sistemas desarrollados. Reconocida por ser clave en
// // // //                     el éxito y progreso de organizaciones y empresas que beneficien
// // // //                     el desarrollo del país.</h5>
// // // //                 <div class='flex'>

// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //           </div>
// // // //         </section>

//         <section className="four">
//           <h1>Four Page</h1>
//         </section>

//       </div>
//       }

//     </div>

//   );
// }

// export default Home;
