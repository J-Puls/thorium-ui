import React from "react";
import { imageStyle } from "../Styles";
import { mapPropsToAttrs, updateFromProps } from "../ThoriumUtils";

export const Image = (props) => {
  return (
    <img
      {...mapPropsToAttrs(props, "img")}
      alt={props.alt}
      style={{
        ...imageStyle,
        ...updateFromProps("image", props),
        ...props.style,
      }}
    />
  );
};

export default Image;
