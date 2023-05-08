import React from "react";
import NewLogoKanoa from "../imagenes/newLogo.png";
import NavBar from "./NavBarFix";
import Canvas from "./Canvas";
import "../App.css";
import * as THREE from  "three";


function Home (){
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
           <div class='container-column'>
             <div class='apple'>
               <div class='image-copy'>
                 <h2>Creativity and community. Woven toghether.</h2>
                 <h3></h3>
                 <div class='flex'></div>
               </div>
            </div>
           </div>
        </section>

        <section className="third">
          <div class='container-row'>
            <div class='page-watch column-50'>
              <div class='image-copy'>
                <h4>Misión</h4>
                <h5>BORIS es una empresa dedicada al progreso
                tecnológico y social a través del desarrollo
                de sistemas de información rentables, escalables
                y mantenibles mediante el seguimiento de estándares
                de calidad dentro de la industria.</h5>
                <div class='flex'></div>
              </div>
            </div>

            <div class='page-ipad column-50'>
              <div class='image-copy'>
                <h4>Visión</h4>
                <h5>Ser una empresa inspiradora y de referencia en el
                desarrollo de proyectos informáticos con alto impacto
                social dentro de México por la eficiencia y rentabilidad
                de los sistemas desarrollados. Reconocida por ser clave en
                el éxito y progreso de organizaciones y empresas que beneficien
                el desarrollo del país.</h5>
                <div class='flex'></div>
              </div>
            </div>
          </div>
        </section>

        <section className="four">
          <h1>Four Page</h1>
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



