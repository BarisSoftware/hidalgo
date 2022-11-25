import React from "react";

function Nombre(props) {
    return (
        <>
            <label for="Nombre">Nombre</label>
            <div class="input">
                <input type="text" id="nombre" name="nombre" required></input>
            </div>
        </>
    );
}

export default Nombre;