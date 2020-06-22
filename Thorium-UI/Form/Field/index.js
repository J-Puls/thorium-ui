import React, { Component } from "react";
import Block from "../../Block";
import { mapPropsToResponsiveSize, mapPropsToAttrs } from "../../ThoriumUtils";

export class FormField extends Component {
  render() {
    return (
      <Block
        {...mapPropsToAttrs(this.props)}
        {...mapPropsToResponsiveSize(this.props)}
        justify={this.props.justify}
        vertical={this.props.vertical}
        style={{
          padding: ".5rem",
          boxSizing: "border-box",
          ...this.props.style
        }}
      >
        {this.props.children}
      </Block>
    );
  }
}

export default FormField;
