import React, { Component } from "react";
import { updateFromProps } from "./utils";
import { ThoriumConsumer } from "../../ThoriumContext";
import { toggleSwitchStyle as toggle } from "../../Styles";
import { mapPropsToAttrs } from "../../ThoriumUtils";
import PropTypes from "prop-types";

const validVariants = [
  "danger",
  "dark",
  "light",
  "primary",
  "secondary",
  "success",
  "themeToggle",
  "warning",
];
const propTypes = {
  checked: PropTypes.bool,
  large: PropTypes.bool,
  variant: PropTypes.oneOf(validVariants),
};

export class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.props.checked
      ? (this.init = { state: "on", val: true })
      : (this.init = { state: "off", val: false });
    this.props.large
      ? (this.toggle = toggle.large)
      : (this.toggle = toggle.normal);

    this.state = {
      switchState: toggle[this.init.state],
      isChecked: this.init.val,
    };
    this.handleClick = () => {
      let newState;
      if (this.state.isChecked) {
        newState = {
          isChecked: !this.state.isChecked,
          switchState: this.toggle.on,
        };
      } else {
        newState = {
          isChecked: !this.state.isChecked,
          switchState: this.toggle.off,
        };
      }
      this.setState({ ...newState }, () => {
        this.props.onChange && this.props.onChange();
      });
    };
  }
  render() {
    let body, slider;
    const switchState = this.state.switchState;
    if (this.props.large) {
      body = toggle.large.body;
      slider = toggle.large.slider;
    } else {
      body = toggle.normal.body;
      slider = toggle.normal.slider;
    }
    return (
      <ThoriumConsumer>
        {(context) => {
          return (
            <div
              className={this.props.className}
              id={this.props.id}
              name={this.props.name}
              style={{ ...toggle.container, ...this.props.style }}
            >
              <label
                form={this.props.form}
                htmlFor={this.props.id}
                style={{ paddingRight: ".5rem" }}
              >
                {this.props.label}
              </label>
              <div style={body}>
                <input
                  {...mapPropsToAttrs(this.props, "input")}
                  type="hidden"
                  value={this.state.isChecked}
                />
                <div
                  onClick={this.handleClick}
                  style={{ ...slider, ...switchState }}
                />
                <span
                  style={{
                    ...toggle.rail,
                    ...updateFromProps(this.props.variant, context.theme),
                  }}
                />
              </div>
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}
ToggleSwitch.propTypes = propTypes;
export default ToggleSwitch;
