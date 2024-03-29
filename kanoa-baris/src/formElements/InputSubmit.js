import React from "react";

function InputSubmit(props) {
  return (
    <div className="submit">
      <input
        type="submit"
        id={props.id}
        name={props.name}
        value={props.text}
        className="create-pro"
      />
    </div>
  );
}

export default InputSubmit;
