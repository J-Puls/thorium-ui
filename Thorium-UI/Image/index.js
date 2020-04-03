import React from "react";
import { imageStyle } from "../Styles";
import { updateFromProps } from "./utils";
import { mapPropsToAttrs } from "../ThoriumUtils";

const Image = props => {
  const style = { ...imageStyle, ...updateFromProps(props) };
  return (
    //eslint-disable-next-line
    <img
      {...mapPropsToAttrs(props, "img")}
      style={{ ...style, ...props.style }}
    />
  );
};

export default Image;
