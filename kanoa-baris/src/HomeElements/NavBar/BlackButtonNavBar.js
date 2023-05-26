import React from "react";

function BlackButton(props) {
   return(
       <li>
           <a href={props.link}>
               <button className="blackButton">
                   {props.text}
               </button>
           </a>
       </li>
   )
}

export default BlackButton;