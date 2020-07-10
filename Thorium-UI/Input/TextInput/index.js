/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../../";
/* Style */
import { textInputStyle } from "../../Styles";
/* Utils */
import { appendStyle, mapPropsToAttrs } from "../../ThoriumUtils";
/* PropTypes */
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

// All valid props to be used by appendStyle
const stylingProps = ["size", "bordered"];

export const TextInput = (props) => (
  <ThoriumConsumer>
    {(context) => {
      let style = { ...textInputStyle.general, ...context.theme.input };
      style = appendStyle(props, stylingProps, style, textInputStyle);

      return (
        <>
          {props.label && (
            <label form={props.form} htmlFor={props.id}>
              {props.label}
            </label>
          )}
          <input {...mapPropsToAttrs(props, "input")} style={style} />
        </>
      );
    }}
  </ThoriumConsumer>
);

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
export default TextInput;
