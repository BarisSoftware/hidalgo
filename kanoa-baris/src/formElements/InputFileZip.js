import React from "react";

function InputFileZip(props) {
  return (
    <div className="elem funform">
      <label htmlFor="zipfile">Archivo</label>
      <div className="input">
        <input
          type="file"
          id="zipfile"
          name="zipfile"
          accept=".zip"
          required
        ></input>
      </div>
    </div>
  );
}

export default InputFileZip;
