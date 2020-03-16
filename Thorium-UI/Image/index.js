import React from "react";
import { imageStyle } from "../Styles";
import { updateFromProps } from "./utils";

const Image = props => {
  const style = { ...imageStyle, ...updateFromProps(props) };

  return (
    <img
      src={props.src}
      className={props.className}
      alt={props.alt}
      crossOrigin={props.crossOrigin}
      height={props.height}
      width={props.width}
      ismap={props.ismap}
      longdesc={props.longdesc}
      referrerPolicy={props.referrerPolicy}
      sizes={props.sizes}
      srcSet={props.srcSet}
      useMap={props.useMap}
      style={{ ...style, ...props.style }}
    />
  );
};

export default Image;
