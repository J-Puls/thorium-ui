/* React */
import React, { Component } from "react";
/* ThoriumContext */
import { ThoriumProvider } from "../ThoriumContext";
/* Themes */
import themes, { colors } from "../Themes";
// PropTypes
import PropTypes from "prop-types";
/* Utils */
import {
  thoriumInit,
  getCustomStyles,
  updateBodyStyle,
  updateVpName,
} from "../ThoriumUtils";
import { bodyStyle } from "../Styles";

const propTypes = {
  defaultTheme: PropTypes.oneOf(["dark", "light"]),
  overrideSysTheme: PropTypes.bool,
};

const defaultProps = {
  overrideSysTheme: false,
};

export class ThoriumRoot extends Component {
  constructor(props) {
    super(props);
    this.initData = thoriumInit();

    if (this.initData.customThemes) {
      // If a system-wide theme preference is found and not flagged to override,
      // use that theme. Else, fall back to the default theme.
      if (this.initData.sysDefaultTheme && !this.props.overrideSysTheme) {
        this.defaultTheme = {
          ...themes[this.initData.sysDefaultTheme],
          ...this.initData.customThemes[this.initData.sysDefaultTheme],
        };
      } else {
        this.defaultTheme = {
          ...themes[this.props.defaultTheme],
          ...this.initData.customThemes[this.props.defaultTheme],
        };
      }
    }

    this.state = {
      sysDefaultTheme: this.initData.sysDefaultTheme,
      theme:
        this.defaultTheme ||
        themes[this.initData.sysDefaultTheme] ||
        themes[props.defaultTheme],
      viewportSizeName: updateVpName(window.innerWidth),
      viewportWidth: window.innerWidth,
    };

    /**
     * Allows children components to explicitely set the theme at any point
     * @param { Object } data An object containing the new theme definition
     */
    this.setTheme = (data) => {
      this.setState({ theme: data });
    };

    /**
     * Allows children components to toggle the theme at any point
     */
    this.toggleTheme = () => {
      let newTheme;
      this.state.theme.name === "dark"
        ? (newTheme = themes.light)
        : (newTheme = themes.dark);

      if (this.initData.customThemes) {
        newTheme = {
          ...newTheme,
          ...this.initData.customThemes[newTheme.name],
        };
      }
      this.setState({ theme: newTheme });
    };

    /**
     *  Updates the viewport state properties when the window is resized past a breakpoint
     */
    this.handleResize = () => {
      if (updateVpName(window.innerWidth) !== this.state.viewportSizeName) {
        this.setState({
          viewportSizeName: updateVpName(window.innerWidth),
          viewportWidth: window.innerWidth,
        });
      }
    };

    // Monitor for window resizing
    window.addEventListener("resize", this.handleResize);

    // Monitor for changes in system-wide theme mode
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        this.toggleTheme();
      });
  }

  // Prevent memory leak when unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.toggleTheme());
  }

  render() {
    // Get custom styles if the file was found during initialization
    let customStyles;
    if (this.initData.hasCustomStyles)
      customStyles = getCustomStyles(this.state.theme, colors);

    // Explicitely set DOM body styling
    updateBodyStyle(bodyStyle, customStyles, this.state.theme.body, this.initData.customThemes);

    // ThoriumContext
    const context = {
      colors,
      customStyles,
      setTheme: this.setTheme,
      theme: this.state.theme,
      toggleTheme: this.toggleTheme,
      viewportSizeName: this.state.viewportSizeName,
      viewportWidth: this.state.viewportWidth,
      ...this.initData,
    };
    return (
      <ThoriumProvider value={context}>
        <th-root
          className="thorium-root"
          id="thoriumRoot"
          style={{ boxSizing: "border-box", ...this.props.style }}
        >
          {this.props.children}
        </th-root>
      </ThoriumProvider>
    );
  }
}

ThoriumRoot.defaultProps = defaultProps;
ThoriumRoot.propTypes = propTypes;
export default ThoriumRoot;
