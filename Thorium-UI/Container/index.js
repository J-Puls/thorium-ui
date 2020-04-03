import React, { Component } from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { containerStyle } from "../Styles";
import { updateFromVPName } from "./utils";
import { mapPropsToAttrs } from "../ThoriumUtils";

class Container extends Component {
  render() {
    return (
      <ThoriumConsumer>
        {context => {
          return (
            <div
              {...mapPropsToAttrs(this.props)}
              style={{
                ...containerStyle,
                maxWidth: updateFromVPName(
                  context.viewportSizeName,
                  context.viewportWidth
                ),
                ...this.props.style
              }}
            >
              {this.props.children}
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}

export default Container;
