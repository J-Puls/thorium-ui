/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../";
/* Style */
import { containerStyle } from "../Styles";
/* Utils */
import { mapPropsToAttrs } from "../ThoriumUtils";
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
