import React, { useEffect, useState } from "react";
import { layerStyle } from "../Styles";

const Layer = props => {
  const [style, setStyle] = useState(layerStyle);

  // Update the style if a 'justify' prop is given
  useEffect(() => {
    // style is an immutable object, so we must first copy it
    const styleCopy = { ...style };

    //TODO: encapsulate this logic
    if (props.justify === "start") styleCopy.justifyContent = "flex-start";
    else if (props.justify === "center") styleCopy.justifyContent = "center";
    else if (props.justify === "end") styleCopy.justifyContent = "flex-end";
    else if (props.justify === "between")
      styleCopy.justifyContent = "space-between";
    else if (props.justify === "around")
      styleCopy.justifyContent = "space-around";

    if (props.height) styleCopy.height = props.height;
    setStyle(styleCopy);
  }, []);

  return (
    <div className="layer" style={{...style, ...props.style}}>
      {props.children}
    </div>
  );
};

export default Layer;
