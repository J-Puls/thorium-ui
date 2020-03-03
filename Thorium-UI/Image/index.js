import React, { useState, useEffect } from "react";
import { imageStyle } from "../Styles";
import { updateFromProps } from "./utils";

const Image = props => {
  const [style, setStyle] = useState(imageStyle);

  useEffect(() => {
    setStyle({ ...style, ...updateFromProps(props) });
  }, []);
  return (
    <img
      src={props.src}
      className={props.className}
      alt={props.alt}
      style={{ ...style, ...props.style }}
    />
  );
};

export default Image;
