import React from "react";

function BaseForm(props) {
   return(
      <form className="forms" action={props.action} method={props.method}>
         {props.child}
      </form>
   );
}

export default BaseForm;