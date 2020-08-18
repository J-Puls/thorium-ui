/* React */
import React, { forwardRef } from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../";
/* Style */
import { textInputStyle } from "../styles";
/* Utils */
import { appendStyle, mapPropsToAttrs } from "../utils";
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

export const TextInput = forwardRef((props, ref) => (
  <ThoriumConsumer>
    {(context) => {
      console.log(context.theme);
      let style = { ...textInputStyle.general, ...context.theme.textInput };
      style = appendStyle(props, stylingProps, style, textInputStyle);

      return (
        <>
          {props.label && (
            <label form={props.form} htmlFor={props.id}>
              {props.label}
            </label>
          )}
          <input ref={ref} {...mapPropsToAttrs(props, "input")} style={style} />
        </>
      );
    }}
  </ThoriumConsumer>
));

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
export default TextInput;
