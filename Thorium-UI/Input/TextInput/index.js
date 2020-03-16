import React, { useState, useEffect, useContext } from "react";
import { updateFromProps } from "./utils";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { textInputStyle } from "../../Styles";

const TextInput = props => {
  const context = useContext(ThoriumContext);
  const defaultStyle = {
    ...textInputStyle
  };
  const [style, setStyle] = useState({
    ...defaultStyle,
    ...updateFromProps(props, context.theme)
  });

  useEffect(() => {
    setStyle({ ...defaultStyle, ...updateFromProps(props, context.theme) });
  }, [context.theme, defaultStyle, props]);

  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        id={props.id}
        className={props.className}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        style={{ ...style, ...props.style }}
      />
    </>
  );
};

export default TextInput;
