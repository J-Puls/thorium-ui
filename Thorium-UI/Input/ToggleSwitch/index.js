import React, { Component } from "react";
import { updateFromProps } from "./utils";
import { ThoriumConsumer } from "../../ThoriumContext";
import { toggleSwitchStyle as toggle } from "../../Styles";
import { mapPropsToAttrs } from "../../ThoriumUtils";

class ToggleSwitch extends Component {
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
      isChecked: this.init.val
    };
    this.handleClick = () => {
      let newState;
      if (this.state.isChecked) {
        newState = {
          isChecked: !this.state.isChecked,
          switchState: this.toggle.on
        };
      } else {
        newState = {
          isChecked: !this.state.isChecked,
          switchState: this.toggle.off
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
        {context => {
          return (
            <div
              style={{ ...toggle.container, ...this.props.style }}
              id={this.props.id}
              className={this.props.className}
              name={this.props.name}
            >
              <label
                htmlFor={this.props.id}
                form={this.props.form}
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
                  style={{ ...slider, ...switchState }}
                  onClick={this.handleClick}
                />
                <span
                  style={{
                    ...toggle.rail,
                    ...updateFromProps(this.props.variant, context.theme)
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

export default ToggleSwitch;
