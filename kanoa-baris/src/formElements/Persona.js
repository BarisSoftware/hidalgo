import React from "react";

function Persona(props) {
    //En el div imagen va la imagen de las personas (avatar)
    return (
        <>
            <label for={props.type}>{props.type}</label>
            <div class="imagenes">
            </div>
            <div class="button">
                <input name={props.type} type="button" value="+"></input>
            </div>
        </>
    );
}

export default Persona;