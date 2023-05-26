import React from "react";

function InputOSReqs(props) {
  return (
    <div>
      <input type="text" name="os" id="os" placeholder="Debian 10.2.6+" />
      <br />
      <input type="text" name="memory" id="memory" placeholder="Minimun RAM" />
      <br />
      <input type="text" name="v_card" id="v_card" placeholder="v_card" />
      <br />
      <input type="radio" name="int_conn" id="int_conn" />
      Internet connection
    </div>
  );
}

export default InputOSReqs;
