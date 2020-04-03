import React, { Component } from "react";
import Field from "./Field";
import Checkbox from "../Input/Checkbox";
import TextInput from "../Input/TextInput";
import { formStyle } from "../Styles";
import Block from "../Block";
import Group from "./Group";
import Submit from "../Input/Submit";
import { mapPropsToAttrs, mapPropsToResponsiveSize } from "../ThoriumUtils";

class Form extends Component {
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
Form.Submit = Submit;
Form.Group = Group;
Form.Checkbox = Checkbox;
Form.Field = Field;
Form.TextInput = TextInput;
export default Form;
