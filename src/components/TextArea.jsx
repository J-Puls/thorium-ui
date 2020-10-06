/* React */
import React, { forwardRef } from "react";
/* Style */
import { textInputStyle } from "../styles/textInputStyle";
/* Utils */
import appendStyle from "../utils/appendStyle";
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { useTheme } from "../hooks/thoriumRoot/useTheme";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  bordered: PropTypes.bool,
  label: PropTypes.string
};

const defaultProps = {
  rows: 10,
  cols: 10,
  bordered: false,
  label: ""
};

// All valid props to be used by appendStyle
const stylingProps = ["size", "bordered"];

export const TextArea = forwardRef(function ThTextArea(props, ref) {
  const theme = useTheme().textInput;
  let style = { ...textInputStyle.general, ...theme };
  style = appendStyle(props, stylingProps, style, textInputStyle);

  return (
    <React.Fragment>
      {props.label && (
        <label form={props.form} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <textarea
        ref={ref}
        {...mapPropsToAttrs(props, "input")}
        rows={props.rows}
        cols={props.cols}
        style={{ ...style, ...props.style }}
      />
    </React.Fragment>
  );
});

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;
export default TextArea;
