import React, { Component } from "react";
import { checkboxInputStyle as cbs } from "../../Styles";
import Block from "../../Block";
import { mapPropsToAttrs } from "../../ThoriumUtils";
class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.defaultChecked || false
    };
    this.handleClick = () =>
      this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
    let style;
    this.props.size ? (style = cbs[this.props.size]) : (style = cbs.normal);
    this.props.rounded && (style.borderRadius = cbs.rounded);
    this.props.round && (style.borderRadius = cbs.round);
    return (
      <Block
        vertical={this.props.vertical}
        justify={this.props.justify}
        style={{ paddingLeft: 0 }}
      >
        {this.props.label && (
          <label htmlFor={this.props.id} form={this.props.form} style={style.label}>
            {this.props.label}
          </label>
        )}
        <div style={{ ...cbs.general, ...style }} onClick={this.handleClick}>
          {this.state.isChecked && <span>&#10003;</span>}
          {!this.state.isChecked && <span>&nbsp;&nbsp;</span>}
        </div>

        <input
          {...mapPropsToAttrs(this.props, "input")}
          type="hidden"
          value={this.state.isChecked}
        />
      </Block>
    );
  }
}

export default Checkbox;
