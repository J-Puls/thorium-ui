/* React */
import React from "react";
/* Thorium-UI */
import { Layer } from "./Layer";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* Style */
import { formGroupStyle } from "../styles/formGroupStyle";

/**
 * A wrapper designed to contain a set of related Fields.
 */
export const FormGroup = (props) => {
  const genericProps = {
    ...mapPropsToAttrs(props),
    className: props.className
      ? props.className
      : props.withMotion
      ? "th-motion-form-group"
      : "th-form-group",
    "data-testid": props.withMotion ? "th-motion-form-group" : "th-form-group",
    style: { ...formGroupStyle, ...props.style },
    justify: props.justify
  };

  if (props.withMotion) {
    return (
      <Layer {...genericProps} withMotion {...mapPropsToMotion(props)}>
        {props.children}
      </Layer>
    );
  } else return <Layer {...genericProps}>{props.children}</Layer>;
};

export default FormGroup;
