/* React */
import React, { Component } from "react";
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
export class Form extends Component {
  render() {
    let style = { ...formStyle };
    this.props.bordered && (style.borderColor = "gray");
    return (
      <Block
        {...mapPropsToResponsiveSize(this.props)}
        vertical={this.props.vertical}
        className={this.props.className}
        style={{ ...this.props.style }}
      >
        <form {...mapPropsToAttrs(this.props, "form")} style={{ ...style }}>
          {this.props.children}
        </form>
      </Block>
    );
  }
}

Form.Checkbox = Checkbox;
Form.Field = Field;
Form.Group = Group;
Form.Submit = Submit;
Form.TextInput = TextInput;

Form.propTypes = propTypes;
export default Form;
