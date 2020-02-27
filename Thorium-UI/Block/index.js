import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { blockStyle } from "../Styles";
import { updateBySize } from "./custom-hooks";

const Block = props => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(blockStyle);
  useEffect(() => {
    const styleCopy = { ...style };
    if (props.md && context.viewportSizeName === "xs")
      setStyle(updateBySize(styleCopy, props.xs));
    else if (props.sm && context.viewportSizeName === "sm")
      setStyle(updateBySize(styleCopy, props.sm));
    else if (props.md && context.viewportSizeName === "md")
      setStyle(updateBySize(styleCopy, props.md));
    else if (props.md && context.viewportSizeName === "lg")
      setStyle(updateBySize(styleCopy, props.lg));
    else if (props.md && context.viewportSizeName === "xl")
      setStyle(updateBySize(styleCopy, props.xl));
    else if (props.md && context.viewportSizeName === "fhd")
      setStyle(updateBySize(styleCopy, props.fhd));
  }, [context.viewportSizeName]);

  return (
    <div className="block" style={style}>
      {" "}
      {props.children}{" "}
    </div>
  );
};

export default Block;
