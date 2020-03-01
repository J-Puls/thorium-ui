import React, { useEffect, useState } from "react";
import { layerStyle } from "../Styles";
import { updateLayerStyle } from "./utils";
const Layer = props => {
  const [style, setStyle] = useState(layerStyle);

  // Update the style if a 'justify' prop is given
  useEffect(() => {
    updateLayerStyle(props, style, setStyle);
  }, []);

  return (
    <thor-layer className="layer" style={{ ...style, ...props.style }}>
      {props.children}
    </thor-layer>
  );
};

export default Layer;
