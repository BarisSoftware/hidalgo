import React from "react";
function InputLicencia(props) {
  return (
    <div className="elem funform">
      <label htmlFor="licencia">Licencia</label>
      <div className="input">
        <select id="licencia" name="licencia" className="licencia">
          <option>MIT</option>
          <option>GPLv3</option>
          <option>Apache 2.0</option>
          <option>BSD</option>
        </select>
        {/* <input type="text" id="licencia" name="licencia" required></input> */}
      </div>
    </div>
  );
}

export default InputLicencia;
