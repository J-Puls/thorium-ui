import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { blockStyle } from "../Styles";
import { updateBlockStyle } from "./utils";

const Block = props => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(blockStyle);
  
  useEffect(() => {
    const vpSize = context.viewportSizeName;
    updateBlockStyle(props, vpSize, style, setStyle);
  }, [context.viewportSizeName]);

  return (
    <thor-block className="block" style={{...style, ...props.style}}>
      {props.children}
    </thor-block>
  );
};

export default Block;
