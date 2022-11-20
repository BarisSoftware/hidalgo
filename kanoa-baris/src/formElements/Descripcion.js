import React from "react";

function Descripcion(props) {
    return (
        <>
            <label for="Desc">Descripción</label>
            <div class="input">
                <input type="text" id="Desc" name="Des" required></input>
            </div>
        </>
    );
}

export default Descripcion;