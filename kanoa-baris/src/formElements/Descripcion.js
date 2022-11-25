import React from "react";

function Descripcion(props) {
    return (
        <>
            <label for="Desc">Descripción</label>
            <div class="input">
                <input type="text" id="descripcion" name="descripcion" required></input>
            </div>
        </>
    );
}

export default Descripcion;