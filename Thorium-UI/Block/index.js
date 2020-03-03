import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { blockStyle } from "../Styles";
import { updateFromProps } from "./utils";

const Block = props => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(blockStyle);

  useEffect(() => {
    const vpSize = context.viewportSizeName;
    setStyle({ ...style, ...updateFromProps(props, vpSize) });
  }, [context.viewportSizeName]);

  return (
    <thor-block className="block" style={{ ...style, ...props.style }}>
      {props.children}
    </thor-block>
  );
};

export default Block;
