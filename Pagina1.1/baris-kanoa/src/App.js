//import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar";


function App() {
    return (
      <div className="App">

        <div>
          <NavBar/>
        </div>

        <section>
        <div class="aboutus">
            <div class="kanoa">
                <h1>KANOA</h1>
                <div class="img-cont"></div>
            </div>
            <div class="cont1"><h3>Misión</h3>
                <br></br>
                <p>BORIS es una empresa dedicada al progreso tecnológico y social a través del desarrollo de sistemas de información 
                rentables, escalables y mantenibles mediante el seguimiento de estándares de calidad dentro de la industria; trabajamos 
                para empresas medianas y pequeñas, como para organizaciones empresariales, sin ánimos de lucro o gubernamentales.</p>
            </div>
            <div class="cont2"><h3>Visión</h3>
                <br></br>
                <p>Ser una empresa inspiradora y de referencia en el desarrollo de proyectos informáticos con alto impacto social dentro de 
                México por la eficiencia y rentabilidad de los sistemas desarrollados. Reconocida por ser clave en el éxito y progreso de 
                organizaciones y empresas que beneficien el desarrollo del país.</p> 
            </div>
            <div class="cont3"><h3>Valores</h3>
                <br></br>
                <ul>
                    <li>Honestidad</li>
                    <li>Respeto</li>
                    <li>Puntualidad</li>
                    <li>Calidad</li>
                    <li>Trabajo en equipo</li>
                    <li>Mejora constante</li>
                </ul>
            </div>
            <div class="cont4"><h3>Filosofia</h3>
                <br></br>
                <p>En México se enfrentan una variedad de problemas sociales que van más allá de la pobreza y la desigualdad. No es posible 
                esperar a que una entidad gubernamental haga todo el trabajo, ni que una sola organización lidere el cambio, por eso, es 
                esencial que se proporcione un apoyo profesional para el desarrollo de los sistemas informáticos de estas entidades, empresas y 
                organizaciones.</p>
            </div>
        </div>
        </section>
        <div class="espacio"></div>
        <br></br><br></br><br></br>
        <section class="sec2">
            <div class="somos"><h1>¿Qué es Kanoa?</h1>
                <br></br>
                <p>Kanoa es un sistema de criptomonedas que te recompensa por crear software libre. Además te permite recompensar proyectos de 
                tu elección y realizar transacciones con nuestra moneda entre otras criptos.</p><br></br></div>
        </section>


      </div>

    );
  }

  export default App;

