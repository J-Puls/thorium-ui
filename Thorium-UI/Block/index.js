import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { blockStyle } from "../Styles";
import { updateBySize } from "./custom-hooks";

const Block = props => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(blockStyle);

  useEffect(() => {
    const vpSize = context.viewportSizeName;

    // Style is an immutable object, so we must first copy it
    const styleCopy = { ...style };

    /**
     * If a breakpoint value is provided, dynamically update the style
     * when the screen is resized to that value
     */

    if (props.xs && vpSize === "xs")
      setStyle(updateBySize(styleCopy, props.xs));
    else if (props.sm && vpSize === "sm")
      setStyle(updateBySize(styleCopy, props.sm));
    else if (props.md && vpSize === "md")
      setStyle(updateBySize(styleCopy, props.md));
    else if (props.lg && vpSize === "lg")
      setStyle(updateBySize(styleCopy, props.lg));
    else if (props.xl && vpSize === "xl")
      setStyle(updateBySize(styleCopy, props.xl));
    else if (props.fhd && vpSize === "fhd")
      setStyle(updateBySize(styleCopy, props.fhd));
  }, [context.viewportSizeName]);

  return (
    <div className="block" style={{...style, ...props.style}}>
      {props.children}
    </div>
  );
};

export default Block;
