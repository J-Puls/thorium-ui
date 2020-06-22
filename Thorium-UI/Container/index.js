import React from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { containerStyle } from "../Styles";
import { mapPropsToAttrs } from "../ThoriumUtils";
import { config } from "../config";

export const Container = (props) => {
  return (
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
};

export default Container;
