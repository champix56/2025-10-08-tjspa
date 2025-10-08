import React from "react";
import cmpstyle from "./Button.module.css";
const Button = ({ style, bgcolor, children, type = "button" }) => {
  console.log(children);
 
  return (
    <button
      type={type}
      className={cmpstyle.Button}
      style={{ ...style, backgroundColor: bgcolor }}
      data-testid="Button"
    >
      {children}
    </button>
  );
};

export default Button;
