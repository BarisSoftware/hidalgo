import React from 'react';
function InputLicencia(props) {
    return (
        <div className='elem'>
            <label htmlFor="Licencia">Licencia</label>
            <div className="input">
                <input type="text" id="licencia" name="licencia" required></input>
            </div>
        </div>
    );
}

export default InputLicencia;