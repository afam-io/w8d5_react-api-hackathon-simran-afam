import React from "react";
import './Button.css'

function Button({ handleClick, text }) {
  return <button onClick={handleClick}> {text} </button>;
}

export default Button;
