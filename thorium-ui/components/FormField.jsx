import React from "react";
import { Block, ThoriumConsumer } from "../";
import {
  mapPropsToResponsiveSize,
  mapPropsToAttrs,
  mapPropsToMotion,
} from "../utils";
import { formStyle } from "../styles";

/**
 * A Block wrapper designed to contain an individual Input
 */
export const FormField = (props) => (
  <ThoriumConsumer>
    {(context) => {
      if (context.hasFramerEnabled && props.withMotion) {
        return (
          <Block
            {...mapPropsToAttrs(props)}
            {...mapPropsToResponsiveSize(props)}
            {...mapPropsToMotion(props)}
            withMotion={true}
            justify={props.justify}
            vertical={props.vertical}
            style={{ ...formStyle.field, ...props.style }}
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
            style={{ ...formStyle.field, ...props.style }}
          >
            {props.children}
          </Block>
        );
      }
    }}
  </ThoriumConsumer>
);

export default FormField;
