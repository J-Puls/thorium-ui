import React, { Component } from "react";
import { ThoriumConsumer } from "../../ThoriumContext";
import { textInputStyle } from "../../Styles";
import { appendStyle, mapPropsToAttrs } from "../../ThoriumUtils";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.oneOf(["sm", "normal", "lg"]),
  bordered: PropTypes.bool,
  label: PropTypes.string,
};

const defaultProps = {
  size: "normal",
  bordered: false,
  label: "",
};

const stylingProps = ["size", "bordered"];
export class TextInput extends Component {
  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          let style = { ...textInputStyle.general, ...context.theme.input };
          style = appendStyle(this.props, stylingProps, style, textInputStyle);

          return (
            <>
              {this.props.label && (
                <label form={this.props.form} htmlFor={this.props.id}>
                  {this.props.label}
                </label>
              )}
              <input {...mapPropsToAttrs(this.props, "input")} style={style} />
            </>
          );
        }}
      </ThoriumConsumer>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
export default TextInput;
