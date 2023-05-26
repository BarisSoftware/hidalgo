import React from "react";

function BlueButton(props) {
    return(
        <li>
            <a href={props.link}>
                <button className="blueButton">
                    {props.text}
                </button>
            </a>
        </li>
    )
}

export default BlueButton;