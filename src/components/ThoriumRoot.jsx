/* React */
import React, { useState, useEffect, forwardRef } from "react";
/* ThoriumContext */
import { ThoriumProvider } from "../context/ThoriumContext";
/* Themes */
import themes from "../themes";
import colors from "../themes/colors";
/* PropTypes */
import PropTypes from "prop-types";
/* Utils */
import thoriumInit from "../utils/thoriumInit";
import updateBodyStyle from "../utils/updateBodyStyle";
import updateVpName from "../utils/updateVpName";
/* Style */
import { bodyStyle } from "../styles/bodyStyle";

const propTypes = {
  defaultTheme: PropTypes.oneOf(["dark", "light"]),
  overrideSysTheme: PropTypes.bool
};

const defaultProps = {
  defaultTheme: "dark",
  overrideSysTheme: false
};

const ThoriumRoot = forwardRef(function ThRoot(props, ref) {
  props.enableMotion && (globalThis.motion = require("framer-motion").motion);
  if (props.enableReactRouter) {
    globalThis.ReactRouter = require("react-router");
    globalThis.ReactRouterDom = require("react-router-dom");
  }

  const initData = thoriumInit();
  const overrideSysTheme = props.overrideSysTheme;
  const sysDefaultTheme = initData.sysDefaultTheme;
  const darkModeQuery = "(prefers-color-scheme: dark)";
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
    theme.name === "dark"
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
    window.matchMedia(darkModeQuery).addEventListener("change", (e) => {
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
    // Monitor for window resizing and update state accordingly
    window.addEventListener("resize", handleResize);

    return () => {
      // Prevent memory leak when unmounted
      window.removeEventListener("resize", handleResize);
      window
        .matchMedia(darkModeQuery)
        .removeEventListener("change", toggleTheme);
    };
  }, []);

  useEffect(() => {
    setViewportSizeName(updateVpName(viewportWidth));
  }, [viewportWidth]);

  // Evaluate custom styles if present
  let customStyles = props.customStyles(theme, colors) || null;

  // Explicitly set DOM body styling
  updateBodyStyle(bodyStyle, customStyles, theme.body);

  // ThoriumContext
  const context = {
    colors,
    customStyles,
    setTheme: (name) => setTheme(themes[name]),
    theme: theme,
    themeName: theme.name,
    toggleTheme: toggleTheme,
    viewportSizeName: viewportSizeName,
    viewportWidth: viewportWidth,
    ...initData
  };

  return (
    <ThoriumProvider value={context}>
      <th-root
        class="thorium-root"
        id="thoriumRoot"
        data-testid="thorium-root"
        style={{ boxSizing: "border-box", ...props.style }}
        ref={ref}
      >
        {props.children}
      </th-root>
    </ThoriumProvider>
  );
});

ThoriumRoot.defaultProps = defaultProps;
ThoriumRoot.propTypes = propTypes;
export default ThoriumRoot;
