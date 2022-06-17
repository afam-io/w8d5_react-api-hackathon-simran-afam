import React from "react";
import './Button.css'

function Button({ handleClick }) {
  return <button onClick={handleClick}> GET YOUR JOKE HERE </button>;
}

export default Button;
