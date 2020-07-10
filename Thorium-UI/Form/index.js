/* React */
import React from "react";
/* Thorium-UI Components */
import { Block, Checkbox } from "../";
import TextInput from "../Input/TextInput";
import Submit from "../Input/Submit";

/* Subcomponents */
import Field from "./Field";
import Group from "./Group";
/* Styling */
import { formStyle } from "../Styles";
/* PropTypes */
import PropTypes from "prop-types";
/* Utils */
import { mapPropsToAttrs, mapPropsToResponsiveSize } from "../ThoriumUtils";

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
    <Block
      {...mapPropsToResponsiveSize(props)}
      vertical={props.vertical}
      style={{ ...props.style }}
    >
      <form {...mapPropsToAttrs(props, "form")} style={{ ...style }}>
        {props.children}
      </form>
    </Block>
  );
};

Form.Checkbox = Checkbox;
Form.Field = Field;
Form.Group = Group;
Form.Submit = Submit;
Form.TextInput = TextInput;

Form.propTypes = propTypes;
export default Form;
