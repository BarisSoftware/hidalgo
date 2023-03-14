import React from 'react';
function InputLicencia(props) {
    return (
        <>
            <label htmlFor="Licencia">Licencia</label>
            <div className="input">
                <input type="text" id="licencia" name="licencia" required></input>
            </div>
        </>
    );
}

export default InputLicencia;