import React, { Component } from "react";
import { layerStyle } from "../Styles";
import { mapPropsToAttrs, appendStyle, makeTranslucent } from "../ThoriumUtils";

const stylingProps = ["justify", "rounded", "sticky"];

export class Layer extends Component {
  render() {
    let style = { ...layerStyle.general };
    style = appendStyle(this.props, stylingProps, style, layerStyle);
    this.props.style && (style = { ...style, ...this.props.style });
    if (this.props.translucent) {
      style.backgroundColor = makeTranslucent(style.backgroundColor);
    }
    return (
      <div {...mapPropsToAttrs(this.props)} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Layer;
