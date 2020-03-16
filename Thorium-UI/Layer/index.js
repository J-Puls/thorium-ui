import React from "react";
import { layerStyle } from "../Styles";
import { updateFromProps } from "./utils";

const Layer = props => {
  const style = { ...layerStyle, ...updateFromProps(props) };

  return (
    <div
      className={props.className}
      id={props.id}
      style={{ ...style, ...props.style }}
    >
      {props.children}
    </div>
  );
};

export default Layer;
