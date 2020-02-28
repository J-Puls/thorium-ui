import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { updateFromProps } from "./utils";

const Button = props => {
  const context = useContext(ThoriumContext);

  // Sets up the general button styling (defaults to primary styling)
  const defaultStyle = {
    ...context.theme.button.primary,
    borderRadius: ".25rem",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    fontWeight: "400",
    outline: "none",
    cursor: "pointer",
    transitionDuration: ".15s",
    boxShadow: ""
  };

  const [style, setStyle] = useState(defaultStyle);

  // Update the button styling based on provided props and current theme
  useEffect(() => {
    setStyle(updateFromProps(style, props, context));
  }, [context.theme]);

  return (
    <button onClick={props.onClick} style={style}>
      {props.children}
    </button>
  );
};

export default Button;
