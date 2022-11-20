import React from "react";

function LlavesPublicas(props) {
    return (
        <>
            <label for="Nombre">Llaves públicas</label>
            <div class="input">
                <input type="text" id="Nombre" name="nombre" placeholder="ultimas 10 letras" required></input>
            </div>
        </>
    );
}

export default LlavesPublicas;