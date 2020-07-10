/* React */
import React from "react";
/* Thorium-UI */
import { Layer } from "../../";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";
/* Style */
import { formStyle } from "../../Styles";

/**
 * A wrapper designed to contain a set of related Fields.
 */
export const FormGroup = (props) => (
  <Layer
    {...mapPropsToAttrs(props)}
    style={{ ...formStyle.group, ...props.style }}
    justify={props.justify}
  >
    {props.children}
  </Layer>
);

export default FormGroup;
