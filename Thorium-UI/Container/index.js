import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { containerStyle } from "../Styles";

const Container = props => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(containerStyle);

  useEffect(() => {
    const vpName = context.viewportSizeName;
    const vpWidth = context.viewportWidth;
    // style is an immutable object, so we must first copy it
    const styleCopy = { ...style };

    /**
     * Dynamically change the style based on current viewport size when
     * a breakpoint is reached
     */
    // TODO: encapsulate this logic
    if (vpName === "sm") styleCopy.maxWidth = vpWidth / 1.1 + "px";
    else if (vpName === "md") styleCopy.maxWidth = vpWidth / 1.15 + "px";
    else if (vpName === "lg") styleCopy.maxWidth = vpWidth / 1.2 + "px";
    else if (vpName === "xl") styleCopy.maxWidth = vpWidth / 1.25 + "px";
    else if (vpName === "fhd") styleCopy.maxWidth = vpWidth / 1.3 + "px";
    setStyle(styleCopy);
  }, [context.viewportSizeName]);

  return (
    <div className="container" style={style}>
      {props.children}
    </div>
  );
};

export default Container;
