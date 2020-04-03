import React from "react";
import { layerStyle } from "../Styles";
import { updateFromProps } from "./utils";
import { mapPropsToAttrs } from "../ThoriumUtils";

const Layer = props => {
  return (
    <div
      {...mapPropsToAttrs(props)}
      align={props.align}
      style={{
        ...layerStyle,
        ...updateFromProps(props),
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
};

export default Layer;
