import React, { useEffect, useState } from "react";
import { layerStyle } from "../Styles";
import { updateFromProps } from "./utils";

const Layer = props => {
  const [style, setStyle] = useState(layerStyle);

  useEffect(() => {
    setStyle({ ...style, ...updateFromProps(props) });
  }, []);

  return (
    <thor-layer className="layer" style={{ ...style, ...props.style }}>
      {props.children}
    </thor-layer>
  );
};

export default Layer;
