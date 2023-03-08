import React from "react";

function Button(props) {
    return(
        <button name={props.name} id={props.id} className={props.class}>
            {props.text}
        </button>
    )
}

export default Button;