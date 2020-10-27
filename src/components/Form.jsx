/* React */
import React from "react";
/* Thorium-UI Components */
import { Block } from "./Block";
/* Sub-components */
import { FormField as Field } from "./FormField";
import { FormGroup as Group } from "./FormGroup";
/* Styling */
import { formStyle } from "../styles/formStyle";
/* PropTypes */
import PropTypes from "prop-types";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";

const propTypes = {
  bordered: PropTypes.bool,
  vertical: PropTypes.bool
};

/**
 * The main wrapper which contains all other sub-components.
 */
export const Form = (props) => {
  let style = { ...formStyle };
  props.bordered && (style.borderColor = "gray");

  const genericProps = {
    ...mapPropsToResponsiveSize(props),
    className: props.className
      ? props.className
      : props.withMotion
      ? "th-motion-form"
      : "th-form",
    "data-testid": props.withMotion ? "th-motion-form" : "th-form",
    vertical: props.vertical,
    style: { ...style, ...props.style }
  };

  if (props.withMotion) {
    return (
      <Block {...genericProps} withMotion {...mapPropsToMotion(props)}>
        <form {...mapPropsToAttrs(props, "form")}>{props.children}</form>
      </Block>
    );
  } else
    return (
      <Block {...genericProps}>
        <form {...mapPropsToAttrs(props, "form")}>{props.children}</form>
      </Block>
    );
};

Form.Field = Field;
Form.Group = Group;
Form.propTypes = propTypes;
export default Form;
