import React, { Component } from "react";
import { ThoriumConsumer } from "../../ThoriumContext";
import { textInputStyle } from "../../Styles";
import { mapPropsToAttrs } from "../../ThoriumUtils";

class TextInput extends Component {
  render() {
    return (
      <ThoriumConsumer>
        {context => {
          let style = textInputStyle.general;
          !this.props.size && (style = { ...style, ...textInputStyle.normal });
          this.props.size === "lg" &&
            (style = { ...style, ...textInputStyle.large });
          this.props.size === "sm" &&
            (style = { ...style, ...textInputStyle.small });
          this.props.bordered &&
            (style = { ...style, ...textInputStyle.bordered });
          return (
            <>
              {this.props.label && (
                <label htmlFor={this.props.id} form={this.props.form} style={{ maxWidth: "90%" }}>
                  {this.props.label}
                </label>
              )}
              <input
                {...mapPropsToAttrs(this.props, "input")}
                style={{ ...style, ...context.theme.input }}
              />
            </>
          );
        }}
      </ThoriumConsumer>
    );
  }
}

export default TextInput;
