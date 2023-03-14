import React from "react";
//import PopOutStyle from '../styles/PopOutStyle.css'

function Search(props) {
    return (
        <input name="search" id="search" type="search" placeholder={props.placeholder} />
    );
}

function Result(props) {
    return (
        <div className="subcontainer">
            <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

function Botonera(props) {
    return (
        <div>
            <button id="aceptar">Aceptar</button>
            <button id="cancelar">Cancelar</button>
        </div>
    );
}

function ObjectContainer(props) {
    const [object, setObject] = React.useState([]);

    React.useEffect(() => {
        for (const person of object) {
            <Result name={person.name} email={person.email}></Result>
        }
    });
    return (
        <div className="subContainer">

        </div>
    )

}

function PopOut(props) {

    return (
        <>
            <div className="PopOut" id="popout">
                <Search placeholder={props.placeholder}></Search>
                <ObjectContainer></ObjectContainer>
                <Botonera></Botonera>
            </div>
            <script src="./../scripts/popoutscr.js"></script>
        </>
    );
}

export default PopOut