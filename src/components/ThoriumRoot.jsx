/* React */
import React, { useState, useEffect, forwardRef } from "react";
/* ThoriumContext */
import { ThoriumProvider } from "../context/ThoriumContext";
/* Themes */
import { colors, themes as baseThemes } from "../themes";
/* PropTypes */
import PropTypes from "prop-types";
/* Utils */
import updateBodyStyle from "../utils/updateBodyStyle";
import updateVpName from "../utils/updateVpName";
/* Style */
import { bodyStyle } from "../styles/bodyStyle";
/* Hooks */
import { useThemePreference } from "../hooks/thoriumRoot/useThemePreference";
import { useMobileStatus } from "../hooks/thoriumRoot/useMobileStatus";
import { useTouchStatus } from "../hooks/thoriumRoot/useTouchStatus";
import { useViewportSize } from "../hooks/thoriumRoot/useViewportSize";

const propTypes = {
  defaultTheme: PropTypes.oneOf(["dark", "light"]).isRequired,
  overrideSysTheme: PropTypes.bool,
  customStyles: PropTypes.func,
  customThemes: PropTypes.object,
  enableMotion: PropTypes.bool,
  enableReactRouter: PropTypes.bool
};

const defaultProps = {
  overrideSysTheme: false,
  enableMotion: false,
  enableReactRouter: false,
  customTheme: {}
};

export const ThoriumRoot = forwardRef(function ThRoot(props, ref) {
  const themePreference = useThemePreference();
  const themes = {
    dark: { ...baseThemes.dark, ...props.customTheme.dark },
    light: { ...baseThemes.light, ...props.customTheme.light }
  };
  const initialTheme = props.overrideSysTheme
    ? themes[props.defaultTheme]
    : themes[themePreference];

  const [theme, setTheme] = useState(initialTheme);
  // Update the theme if user-preferred theme is changed
  useEffect(() => {
    !props.overrideSysTheme && setTheme(themes[themePreference]);
  }, [themePreference]);

  const isMobileDevice = useMobileStatus();
  const isTouchDevice = useTouchStatus();
  const viewportSize = useViewportSize();

  const [viewportSizeName, setViewportSizeName] = useState(
    updateVpName(viewportSize.width)
  );
  useEffect(() => {
    setViewportSizeName(updateVpName(viewportSize.width));
  }, [viewportSize.width]);

  const toggleTheme = () => {
    setTheme(theme.name === "dark" ? themes.light : themes.dark);
  };

  // Evaluate custom styles if present
  let customStyles = props.customStyles
    ? props.customStyles(theme, colors)
    : null;

  // Explicitly set DOM body styling
  updateBodyStyle(bodyStyle, customStyles, theme.body);

  // Globalize framer-motion and/or react-router if enabled

  if (props.enableMotion && !globalThis.motion)
    globalThis.motion = require("framer-motion").motion;
  if (
    props.enableReactRouter &&
    (!globalThis.ReactRouter || !globalThis.ReactRouterDom)
  ) {
    globalThis.ReactRouter = require("react-router");
    globalThis.ReactRouterDom = require("react-router-dom");
  }

  // ThoriumContext
  const context = {
    colors,
    customStyles,
    setTheme: (name) => setTheme(themes[name]),
    theme,
    themeName: theme.name,
    toggleTheme,
    viewportSizeName,
    viewportSize: { ...viewportSize },
    isMobileDevice,
    isTouchDevice,
    sysThemeOverridden: props.overrideSysTheme
  };

  return (
    <ThoriumProvider value={context}>
      <th-root
        class="thorium-root"
        id="thoriumRoot"
        data-testid="th-thorium-root"
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
