import React, { Component } from "react";
import { Block } from "../../";
import { checkboxInputStyle as cbs } from "../../Styles";
import { mapPropsToAttrs, validProps } from "../../ThoriumUtils";
import PropTypes from "prop-types";


const propTypes = {
  defaultChecked: PropTypes.bool,
  justify: PropTypes.oneOf(validProps.justify),
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(["lg", "sm"]),
  vertical: PropTypes.bool,
};

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.defaultChecked || false,
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
        justify={this.props.justify}
        style={{ paddingLeft: 0 }}
        vertical={this.props.vertical}
      >
        {this.props.label && (
          <label
            form={this.props.form}
            htmlFor={this.props.id}
            style={style.label}
          >
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

Checkbox.propTypes = propTypes;
export default Checkbox;
