import React from "react";
import Block from "./Block";
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";
import formFieldStyle from "../styles/formFieldStyle";

/**
 * A Block wrapper designed to contain an individual Input
 */
export const FormField = (props) => {
  if (props.withMotion) {
    return (
      <Block
        {...mapPropsToAttrs(props)}
        {...mapPropsToResponsiveSize(props)}
        {...mapPropsToMotion(props)}
        withMotion={true}
        justify={props.justify}
        vertical={props.vertical}
        style={{ ...formFieldStyle, ...props.style }}
      >
        {props.children}
      </Block>
    );
  } else {
    return (
      <Block
        {...mapPropsToAttrs(props)}
        {...mapPropsToResponsiveSize(props)}
        justify={props.justify}
        vertical={props.vertical}
        style={{ ...formFieldStyle, ...props.style }}
      >
        {props.children}
      </Block>
    );
  }
};

export default FormField;
