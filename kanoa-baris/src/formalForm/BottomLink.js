import React from "react";
import { Link } from "react-router-dom"

function BottomLink(props) {
  return (
    //  <div className="registrarse">
    //    <br></br>
    //    ¿Ya tienes una cuenta? <Link to="/login">Ingresa</Link>
    //  </div>
    <div className="bottomFormalLink">
      <br></br>
      {props.text} <Link to={props.link}>{props.textLink}</Link>
    </div>
  );
}

export default BottomLink;
