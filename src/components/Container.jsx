/* React */
import React from "react";
/* Style */
import { containerStyle } from "../styles/containerStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
/* Breakpoint configuration */
import { containerSizes } from "../config";
import { useViewportSizeName } from "../hooks/thoriumRoot/useViewportSizeName";
import { useViewportSize } from "../hooks/thoriumRoot/useViewportSize";

/**
 * A responsive, centered and padded wrapper for page contents.
 */
export const Container = (props) => {
  const vpSizeName = useViewportSizeName();
  const vpWidth = useViewportSize().width;

  return (
    <div
      className="th-container"
      data-testid="th-container"
      {...mapPropsToAttrs(props)}
      style={{
        ...containerStyle,
        maxWidth: vpWidth / containerSizes[vpSizeName] || "100%",
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
