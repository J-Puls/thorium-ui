/* React */
import React from "react";
/* Thorium-UI */
import { Block } from "./Block";
/* Style */
import { formFieldStyle } from "../styles/formFieldStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";

/**
 * A Block wrapper designed to contain an individual Input
 */
export const FormField = (props) => {
  const genericProps = {
    ...mapPropsToAttrs(props),
    ...mapPropsToResponsiveSize(props),
    className: props.className
      ? props.className
      : props.withMotion
      ? "th-motion-form-field"
      : "th-form-field",
    "data-testid": props.withMotion ? "th-motion-form-field" : "th-form-field",
    justify: props.justify,
    vertical: props.vertical,
    style: { ...formFieldStyle, ...props.style }
  };

  if (props.withMotion) {
    return (
      <Block {...genericProps} withMotion {...mapPropsToMotion(props)}>
        {props.children}
      </Block>
    );
  } else {
    return <Block {...genericProps}>{props.children}</Block>;
  }
};

export default FormField;
