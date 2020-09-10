/* React */
import React, { Component } from 'react';
/* ThoriumContext */
import { ThoriumProvider } from '../context/ThoriumContext';
/* Themes */
import themes from '../themes';
import colors from '../themes/colors';
/* PropTypes */
import PropTypes from 'prop-types';
/* Utils */
import thoriumInit from '../utils/thoriumInit';
// import { getCustomStyles } from '../utils/customStylesCheck'
import updateBodyStyle from '../utils/updateBodyStyle';
import updateVpName from '../utils/updateVpName';
/* Style */
import { bodyStyle } from '../styles/bodyStyle';

const propTypes = {
  defaultTheme: PropTypes.oneOf(['dark', 'light']),
  overrideSysTheme: PropTypes.bool
};

const defaultProps = {
  defaultTheme: 'dark',
  overrideSysTheme: false
};

export class ThoriumRoot extends Component {
  constructor(props, ref) {
    super(props);
    this.initData = thoriumInit();
    this.ref = ref;
    // Set default theme based on initialization data
    if (this.props.customThemes) {
      this.defaultTheme = this.props.overrideSysTheme
        ? {
            ...themes[this.props.defaultTheme],
            ...this.props.customThemes[this.props.defaultTheme]
          }
        : {
            ...themes[this.props.defaultTheme],
            ...this.props.customThemes[this.initData.sysDefaultTheme]
          };
    } else {
      this.defaultTheme = this.props.overrideSysTheme
        ? { ...themes[this.props.defaultTheme] }
        : { ...themes[this.initData.sysDefaultTheme] };
    }

    this.state = {
      sysDefaultTheme: this.initData.sysDefaultTheme,
      overrideSysTheme: props.overrideSysTheme,
      theme:
        this.defaultTheme ||
        themes[this.initData.sysDefaultTheme] ||
        themes[props.defaultTheme],
      viewportSizeName: updateVpName(window.innerWidth),
      viewportWidth: window.innerWidth
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
      this.state.theme.name === 'dark'
        ? (newTheme = themes.light)
        : (newTheme = themes.dark);

      if (this.props.customThemes) {
        newTheme = {
          ...newTheme,
          ...this.props.customThemes[newTheme.name]
        };
      }
      this.setState({ theme: newTheme });
    };

    // Monitor for changes in system-wide theme mode
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.toggleTheme();
      });
  }

  componentDidMount() {
    /**
     *  Updates the viewport state properties when the window is resized past a breakpoint
     */
    this.handleResize = () => {
      if (updateVpName(window.innerWidth) !== this.state.viewportSizeName) {
        this.setState({
          viewportSizeName: updateVpName(window.innerWidth),
          viewportWidth: window.innerWidth
        });
      }
    };

    // Monitor for window resizing
    window.addEventListener('resize', this.handleResize);
  }
  // Prevent memory leak when unmounted
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.toggleTheme);
  }

  render() {
    // Get custom styles if the file was found during initialization
    let customStyles = this.props.customStyles(this.state.theme, colors);

    // Explicitly set DOM body styling
    updateBodyStyle(bodyStyle, customStyles, this.state.theme.body);

    // ThoriumContext
    const context = {
      colors,
      customStyles,
      setTheme: this.setTheme,
      theme: this.state.theme,
      toggleTheme: this.toggleTheme,
      viewportSizeName: this.state.viewportSizeName,
      viewportWidth: this.state.viewportWidth,

      ...this.initData
    };
    return (
      <ThoriumProvider value={context}>
        <th-root
          class='thorium-root'
          id='thoriumRoot'
          style={{ boxSizing: 'border-box', ...this.props.style }}
          ref={this.ref}
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
