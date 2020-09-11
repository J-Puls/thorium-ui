/* React */
import React, { useState, useEffect } from 'react';
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

const ThoriumRoot = React.forwardRef((props, ref) => {
  const initData = thoriumInit();
  const overrideSysTheme = props.overrideSysTheme;
  const sysDefaultTheme = initData.sysDefaultTheme;
  const darkModeQuery = '(prefers-color-scheme: dark)';
  let defaultTheme;
  if (props.customThemes) {
    defaultTheme = overrideSysTheme
      ? {
          ...themes[props.defaultTheme],
          ...props.customThemes[props.defaultTheme]
        }
      : {
          ...themes[props.defaultTheme],
          ...props.customThemes[sysDefaultTheme]
        };
  } else {
    defaultTheme = overrideSysTheme
      ? { ...themes[props.defaultTheme] }
      : { ...themes[sysDefaultTheme] };
  }

  const [theme, setTheme] = useState(
    defaultTheme || themes[sysDefaultTheme] || themes[props.defaultTheme]
  );
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportSizeName, setViewportSizeName] = useState(
    updateVpName(viewportWidth)
  );

  const toggleTheme = () => {
    let newTheme;
    theme.name === 'dark'
      ? (newTheme = themes.light)
      : (newTheme = themes.dark);

    if (props.customThemes) {
      newTheme = {
        ...newTheme,
        ...props.customThemes[newTheme.name]
      };
    }
    setTheme(newTheme);
  };

  const isSysDarkMode = () => {
    const darkModeOn = window.matchMedia(darkModeQuery).matches;
    return darkModeOn;
  };

  useEffect(() => {
    // Monitor for changes in system-wide theme mode
    window.matchMedia(darkModeQuery).addEventListener('change', (e) => {
      setTheme(isSysDarkMode() ? themes.dark : themes.light);
    });

    /**
     *  Updates the viewport state properties when the window is resized past a breakpoint
     */
    const handleResize = () => {
      if (updateVpName(window.innerWidth) !== viewportSizeName) {
        setViewportWidth(window.innerWidth);
      }
    };
    // Monitor for window resizing
    window.addEventListener('resize', handleResize);

    return () => {
      // Prevent memory leak when unmounted
      window.removeEventListener('resize', handleResize);
      window
        .matchMedia(darkModeQuery)
        .removeEventListener('change', toggleTheme);
    };
  }, []);

  useEffect(() => {
    setViewportSizeName(updateVpName(viewportWidth));
  }, [viewportWidth]);

  // Evaluate custom styles if the present
  let customStyles = props.customStyles(theme, colors) || null;

  // Explicitly set DOM body styling
  updateBodyStyle(bodyStyle, customStyles, theme.body);

  // ThoriumContext
  const context = {
    colors,
    customStyles,
    setTheme: setTheme,
    theme: theme,
    toggleTheme: toggleTheme,
    viewportSizeName: viewportSizeName,
    viewportWidth: viewportWidth,
    ...initData
  };
  return (
    <ThoriumProvider value={context}>
      <th-root
        class='thorium-root'
        id='thoriumRoot'
        style={{ boxSizing: 'border-box', ...props.style }}
        ref={ref}
      >
        {props.children}
      </th-root>
    </ThoriumProvider>
  );
});

// export class ThoriumRoot extends Component {
//   constructor(props) {
//     super(props)
//     this.initData = thoriumInit()

//     // Set default theme based on initialization data
//     if (this.props.customThemes) {
//       this.defaultTheme = this.props.overrideSysTheme
//         ? {
//             ...themes[this.props.defaultTheme],
//             ...this.props.customThemes[this.props.defaultTheme]
//           }
//         : {
//             ...themes[this.props.defaultTheme],
//             ...this.props.customThemes[this.initData.sysDefaultTheme]
//           }
//     } else {
//       this.defaultTheme = this.props.overrideSysTheme
//         ? { ...themes[this.props.defaultTheme] }
//         : { ...themes[this.initData.sysDefaultTheme] }
//     }

//     this.state = {
//       sysDefaultTheme: this.initData.sysDefaultTheme,
//       overrideSysTheme: props.overrideSysTheme,
//       theme:
//         this.defaultTheme ||
//         themes[this.initData.sysDefaultTheme] ||
//         themes[props.defaultTheme],
//       viewportSizeName: updateVpName(window.innerWidth),
//       viewportWidth: window.innerWidth
//     }

//     /**
//      * Allows children components to explicitly set the theme at any point
//      * @param { Object } data An object containing the new theme definition
//      */
//     this.setTheme = (data) => {
//       this.setState({ theme: data })
//     }

//     /**
//      * Allows children components to toggle the theme at any point
//      */
//     this.toggleTheme = () => {
//       let newTheme
//       this.state.theme.name === 'dark'
//         ? (newTheme = themes.light)
//         : (newTheme = themes.dark)

//       if (this.props.customThemes) {
//         newTheme = {
//           ...newTheme,
//           ...this.props.customThemes[newTheme.name]
//         }
//       }
//       this.setState({ theme: newTheme })
//     }

//     // Monitor for changes in system-wide theme mode
//     window
//       .matchMedia('(prefers-color-scheme: dark)')
//       .addEventListener('change', (e) => {
//         this.toggleTheme()
//       })
//   }

//   componentDidMount() {
//     /**
//      *  Updates the viewport state properties when the window is resized past a breakpoint
//      */
//     this.handleResize = () => {
//       if (updateVpName(window.innerWidth) !== this.state.viewportSizeName) {
//         this.setState({
//           viewportSizeName: updateVpName(window.innerWidth),
//           viewportWidth: window.innerWidth
//         })
//       }
//     }

//     // Monitor for window resizing
//     window.addEventListener('resize', this.handleResize)
//   }
//   // Prevent memory leak when unmounted
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize)
//     window
//       .matchMedia('(prefers-color-scheme: dark)')
//       .removeEventListener('change', this.toggleTheme)
//   }

//   render() {
//     // Get custom styles if the file was found during initialization
//     let customStyles = this.props.customStyles(this.state.theme, colors)

//     // Explicitly set DOM body styling
//     updateBodyStyle(bodyStyle, customStyles, this.state.theme.body)

//     // ThoriumContext
//     const context = {
//       colors,
//       customStyles,
//       setTheme: this.setTheme,
//       theme: this.state.theme,
//       toggleTheme: this.toggleTheme,
//       viewportSizeName: this.state.viewportSizeName,
//       viewportWidth: this.state.viewportWidth,

//       ...this.initData
//     }
//     return (
//       <ThoriumProvider value={context}>
//         <th-root
//           class='thorium-root'
//           id='thoriumRoot'
//           style={{ boxSizing: 'border-box', ...this.props.style }}
//         >
//           {this.props.children}
//         </th-root>
//       </ThoriumProvider>
//     )
//   }
// }

ThoriumRoot.defaultProps = defaultProps;
ThoriumRoot.propTypes = propTypes;
export default ThoriumRoot;
