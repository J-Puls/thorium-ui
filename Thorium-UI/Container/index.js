import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { containerStyle } from "../Styles";

const Container = props => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(containerStyle);
  useEffect(() => {
    const styleCopy = { ...style };
    if (context.viewportSizeName === "sm")
      styleCopy.maxWidth = context.viewportWidth / 1.1 + "px";
    else if (context.viewportSizeName === "md")
      styleCopy.maxWidth = context.viewportWidth / 1.15 + "px";
    else if (context.viewportSizeName === "lg")
      styleCopy.maxWidth = context.viewportWidth / 1.2 + "px";
    else if (context.viewportSizeName === "xl")
      styleCopy.maxWidth = context.viewportWidth / 1.25 + "px";
    else if (context.viewportSizeName === "fhd")
      styleCopy.maxWidth = context.viewportWidth / 1.3 + "px";
    setStyle(styleCopy);
  }, [context.viewportSizeName]);

  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  );
};

export default Container;
