import React from "react";
import { Block } from "../../";
import { mapPropsToResponsiveSize, mapPropsToAttrs } from "../../ThoriumUtils";
import { formStyle } from "../../Styles";

/**
 * A Block wrapper designed to contain an individual Input
 */
export const FormField = (props) => (
  <Block
    {...mapPropsToAttrs(props)}
    {...mapPropsToResponsiveSize(props)}
    justify={props.justify}
    vertical={props.vertical}
    style={{ ...formStyle.field, ...props.style }}
  >
    {props.children}
  </Block>
);

export default FormField;
