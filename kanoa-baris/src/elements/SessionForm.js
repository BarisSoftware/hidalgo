import React from "react";

function SessionForm(props) {
    return(
        <div>
            <form name={props.name} className={props.class} id={props.id}>
                {for (const element of props.content) {
                    element
                }}
            </form>
        </div>
    )
}

export default SessionForm;