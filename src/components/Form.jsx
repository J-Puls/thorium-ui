/* React */
import React from "react";
/* Thorium-UI Components */
import Block from "./Block";
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Subcomponents */
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
  vertical: PropTypes.bool,
};

/**
 * The main wrapper which contains all other subcomponents.
 */
export const Form = (props) => {
  let style = { ...formStyle };
  props.bordered && (style.borderColor = "gray");
  return (
    <ThoriumConsumer>
      {(context) => {
        let motion;
        if (context.hasFramerEnabled && props.withMotion) {
          motion = require("framer-motion").motion;
        }
        return (
          <Block
            {...mapPropsToResponsiveSize(props)}
            vertical={props.vertical}
            style={props.style}
          >
            {props.withMotion && (
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
