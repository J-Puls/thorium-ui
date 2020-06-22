import React, { Component } from "react";
import { layerStyle } from "../Styles";
import { mapPropsToAttrs, updateFromProps } from "../ThoriumUtils";

export class Layer extends Component {
  render() {
    return (
      <div
        {...mapPropsToAttrs(this.props)}
        style={{
          ...layerStyle,
          ...updateFromProps("layer", this.props),
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Layer;
