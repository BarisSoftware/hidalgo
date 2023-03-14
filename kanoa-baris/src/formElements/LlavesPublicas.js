import React from "react";

function LlavesPublicas(props) {
    return (
        <>
            <label htmlFor="Nombre">Llaves públicas</label>
            <div className="input">
                <input type="text" id="llaves" name="llaves" placeholder="ultimas 10 letras" required></input>
            </div>
        </>
    );
}

export default LlavesPublicas;