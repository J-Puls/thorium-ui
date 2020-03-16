import React, { useContext, useLayoutEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { containerStyle } from "../Styles";
import { updateFromVPName } from "./utils";

const Container = props => {
  const context = useContext(ThoriumContext);
  const vpName = context.viewportSizeName;
  const vpWidth = context.viewportWidth;

  const [style, setStyle] = useState({
    ...containerStyle,
    maxWidth: updateFromVPName(vpName, vpWidth) + "px"
  });

  // Update component width when viewport size changes
  useLayoutEffect(() => {
    setStyle({
      ...containerStyle,
      maxWidth: updateFromVPName(vpName, vpWidth) + "px"
    });
  }, [vpName, vpWidth]);

  return (
    <div style={{ ...style, ...props.style }} className={props.className}>
      {props.children}
    </div>
  );
};

export default Container;
