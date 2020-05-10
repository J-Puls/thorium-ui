import React from "react";
import ToggleSwitch from "../ToggleSwitch";
import ThoriumContext from "../../ThoriumContext";
import { mapPropsToAttrs } from "../../ThoriumUtils";

class ThemeToggle extends ToggleSwitch {
  static contextType = ThoriumContext;

  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
    this.handleChange = () => {
      this.setState({ isOn: !this.state.isOn });
      if (this.context.theme.name === "dark") {
        this.context.customThemes &&
          this.context.setTheme({
            ...this.context.themes.light,
            ...this.context.customThemes.light,
          });
        !this.context.customThemes &&
          this.context.setTheme(this.context.themes.light);
      } else {
        this.context.customThemes &&
          this.context.setTheme({
            ...this.context.themes.dark,
            ...this.context.customThemes.dark,
          });
        !this.context.customThemes &&
          this.context.setTheme(this.context.themes.dark);
      }
    };
  }
  render() {
    return (
      <ToggleSwitch
        {...mapPropsToAttrs(this.props, "input")}
        large={this.props.large}
        variant="themeToggle"
        onChange={() => this.handleChange()}
        label={this.props.label}
        checked={this.state.isOn}
        style={this.props.style}
      />
    );
  }
}

export default ThemeToggle;
