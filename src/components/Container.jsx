/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { containerStyle } from "../styles/containerStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
/* Breakpoint configuration */
import { config } from "../config";

/**
 * A responsive, centered and padded wrapper for page contents.
 */
export const Container = (props) => (
  <ThoriumConsumer>
    {(context) => {
      const vpWidth = context.viewportWidth;
      const vpName = context.viewportSizeName;
      return (
        <div
          data-testid="container"
          {...mapPropsToAttrs(props)}
          style={{
            ...containerStyle,
            maxWidth: vpWidth / config.containerSizes[vpName] || "100%",
            ...props.style,
          }}
        >
          {props.children}
        </div>
      );
    }}
  </ThoriumConsumer>
);

export default Container;
