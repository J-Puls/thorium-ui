/* React */
import React from "react";
/* Thorium-UI */
import Layer from "./Layer";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* Style */
import { formGroupStyle } from "../styles/formGroupStyle";

/**
 * A wrapper designed to contain a set of related Fields.
 */
export const FormGroup = (props) => {
  if (props.withMotion) {
    return (
      <Layer
        {...mapPropsToAttrs(props)}
        style={{ ...formGroupStyle, ...props.style }}
        withMotion={true}
        {...mapPropsToMotion(props)}
        justify={props.justify}
      >
        {props.children}
      </Layer>
    );
  } else
    return (
      <Layer
        {...mapPropsToAttrs(props)}
        style={{ ...formGroupStyle, ...props.style }}
        justify={props.justify}
      >
        {props.children}
      </Layer>
    );
};

export default FormGroup;
