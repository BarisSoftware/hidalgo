import React from "react";

function InputPersonas(props) {
    //En el div imagen va la imagen de las personas (avatar)
    return (
        <div className="elem">
            <label htmlFor={props.type}>{props.type}</label>
            <div className="imagenes">
            </div>
            <div className="button">
                <input id={props.id} name={props.type} type="button" value="+"></input>
            </div>
        </div>
    );
}

export default InputPersonas;