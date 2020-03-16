import React, { useContext, useState, useEffect } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { blockStyle } from "../Styles";
import { updateFromProps } from "./utils";

const Block = props => {
  const context = useContext(ThoriumContext);
  const vpSize = context.viewportSizeName;
  const [style, setStyle] = useState({
    blockStyle,
    ...updateFromProps(props, vpSize)
  });

  // Update sizing when viewport size changes
  useEffect(() => {
    setStyle({ ...blockStyle, ...updateFromProps(props, vpSize) });
  }, [props, vpSize]);

  return (
    <div className={props.className} style={{ ...style, ...props.style }}>
      {props.children}
    </div>
  );
};

export default Block;
