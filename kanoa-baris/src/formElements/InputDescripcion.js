import React from "react";

function InputDescripcion(props) {
    return (
        <div className="elem">
            <label htmlFor="Desc">Descripción</label>
            <div className="input">
                <input type="text" id="descripcion" name="descripcion" required></input>
            </div>
        </div>
    );
}

export default InputDescripcion;