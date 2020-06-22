import React, { Component } from "react";
import { ToggleSwitch } from "../../";
import ThoriumContext from "../../ThoriumContext";
import { mapPropsToAttrs } from "../../ThoriumUtils";

export class ThemeToggle extends Component {
  static contextType = ThoriumContext;

  constructor(props, context) {
    super(props);
    this.state = {
      isOn: false,
    };
    this.handleChange = () => {
      this.setState({ isOn: !this.state.isOn }, context.toggleTheme());
    };
  }
  render() {
    return (
      <ToggleSwitch
        {...mapPropsToAttrs(this.props, "input")}
        checked={this.state.isOn}
        label={this.props.label}
        large={this.props.large}
        onChange={() => this.handleChange()}
        style={this.props.style}
        variant="themeToggle"
      />
    );
  }
}

export default ThemeToggle;
