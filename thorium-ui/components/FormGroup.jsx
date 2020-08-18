/* React */
import React from "react";
/* Thorium-UI */
import { Layer } from "../";
/* Utils */
import { mapPropsToAttrs, mapPropsToMotion } from "../utils";
/* Style */
import { formStyle } from "../styles";

/**
 * A wrapper designed to contain a set of related Fields.
 */
export const FormGroup = (props) => (
  <Layer
    {...mapPropsToAttrs(props)}
    style={{ ...formStyle.group, ...props.style }}
    withMotion={props.withMotion}
    {...mapPropsToMotion(props)}
    justify={props.justify}
  >
    {props.children}
  </Layer>
);

export default FormGroup;
