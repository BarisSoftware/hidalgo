import bitcoin from "./imagenes/bitcoin.png";
import download from "./imagenes/download.png";
import avatar1 from "./imagenes/avatar1.png";
import avatar2 from "./imagenes/avatar2.png";
import avatar3 from "./imagenes/avatar3.png";
import "./App.css";

function NombreProyecto(props) {
    return(<div className="pp1">
    <h2>Nombre del proyecto: </h2>
  </div>
  );
    
}

function DescripcionProyecto(props) {
    return(<div class="pp2">
        <p>Descripción del proyecto:</p>
        <br></br>
        <br></br>
        <br></br>
    </div>);
}

function EnlaceDescarga(props) {
    return (<div class="pp3">
        <div class="pp3_">
          <p>
            <img src={download}></img> <span>Enlace de descarga: </span>
          </p>
        </div>
      </div>);
}

function Colaborador(props) {
    return (<img src={`./imagenes/` + props.avatar}></img>);
}

function Colaboradores(params) {
    return (<div class="pp4">
        <p>Colaboradores: </p>
        <div class="Colabimg">
            <Colaborador avatar='avatar1'></Colaborador>
            <Colaborador avatar='avatar2'></Colaborador>
            <Colaborador avatar='avatar3'></Colaborador>
        </div>
      </div>);
}

function ChecksumProyecto(props) {
    return (<div class="pp5">
        <p> Checksum del proyecto</p>
      </div>);
}

function PublicKey (props){
    return (<span>{`${props.text}`}</span>);
}

function Donate(props){
    return (<div class="pp6">
        <p>Donar:</p>
        <div class="donar">
          <img src={bitcoin}></img>
          <p>
            <PublicKey text="Llave publica del proyecto"></PublicKey>
          </p>
        </div>
      </div>);
}

function Proyect(props) {
  return (
    <div className="Proyectos">
        <div className="pp1">
        <NombreProyecto></NombreProyecto>
        </div>
        <div className="pp2">
        <DescripcionProyecto></DescripcionProyecto>
        </div>
        <div className="pp3">
        <EnlaceDescarga></EnlaceDescarga>
        </div>
        <div className="pp4">
        <Colaboradores></Colaboradores>      
        </div>
        <div className="pp5">
        <ChecksumProyecto></ChecksumProyecto>      
        </div>
        <div className="pp5">
        <Donate></Donate>
        </div>
    </div>
  );
}
//export default {Proyect, Donate, Colaboradores, EnlaceDescarga, DescripcionProyecto, NombreProyecto};
export default Proyect;