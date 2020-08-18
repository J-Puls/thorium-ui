/* React */
import React from "react";
/* Thorium-UI Components */
import { Block, ThoriumConsumer } from "../";
/* Subcomponents */
import { FormField as Field } from "./FormField";
import { FormGroup as Group } from "./FormGroup";
/* Styling */
import { formStyle } from "../styles";
/* PropTypes */
import PropTypes from "prop-types";
/* Utils */
import {
  mapPropsToAttrs,
  mapPropsToResponsiveSize,
  mapPropsToMotion,
} from "../utils";

const propTypes = {
  bordered: PropTypes.bool,
  vertical: PropTypes.bool,
};

/**
 * The main wrapper which contains all other subcomponents.
 */
export const Form = (props) => {
  let style = { ...formStyle.general };
  props.bordered && (style.borderColor = "gray");
  return (
    <ThoriumConsumer>
      {(context) => {
        const motion =
          context.hasFramerEnabled && props.withMotion
            ? require("framer-motion").motion
            : null;
        return (
          <Block
            {...mapPropsToResponsiveSize(props)}
            vertical={props.vertical}
            style={props.style}
          >
            {motion && props.withMotion && (
              <motion.form
                {...mapPropsToAttrs(props, "form")}
                {...mapPropsToMotion(props)}
                style={{ ...style }}
              >
                {props.children}
              </motion.form>
            )}
            {!props.withMotion && (
              <form {...mapPropsToAttrs(props, "form")} style={{ ...style }}>
                {props.children}
              </form>
            )}
          </Block>
        );
      }}
    </ThoriumConsumer>
  );
};

Form.Field = Field;
Form.Group = Group;
Form.propTypes = propTypes;
export default Form;
