/* React */
import React, { forwardRef } from "react";
/* ThoriumContext */
import { ThoriumProvider } from "../context/ThoriumContext";
/* Themes */
import { colors, themes as baseThemes } from "../themes";
/* PropTypes */
import PropTypes from "prop-types";
/* Utils */
import updateBodyStyle from "../utils/updateBodyStyle";
/* Style */
import { bodyStyle } from "../styles/bodyStyle";
/* Hooks */
import { useThemePreference } from "../hooks/thoriumRoot/useThemePreference";
import { useMobileStatus } from "../hooks/thoriumRoot/useMobileStatus";
import { useTouchStatus } from "../hooks/thoriumRoot/useTouchStatus";
import { useViewportSize } from "../hooks/thoriumRoot/useViewportSize";
import { useViewportSizeName } from "../hooks/thoriumRoot/useViewportSizeName";

const propTypes = {
  defaultTheme: PropTypes.oneOf(["dark", "light"]).isRequired,
  overrideSysTheme: PropTypes.bool,
  customStyles: PropTypes.func,
  customThemes: PropTypes.object,
  enableMotion: PropTypes.bool,
  enableReactRouter: PropTypes.bool
};

const defaultProps = {
  defaultTheme: "dark",
  overrideSysTheme: false,
  enableMotion: false,
  enableReactRouter: false,
  customThemes: {}
};

export const ThoriumRoot = forwardRef(function ThRoot(props, ref) {
  const tp = useThemePreference(props);
  const themePreference = tp.value;
  const setThemePreference = tp.setter;

  const themes = {
    dark: { ...baseThemes.dark, ...props.customThemes.dark },
    light: { ...baseThemes.light, ...props.customThemes.light }
  };

  const isMobileDevice = useMobileStatus();
  const isTouchDevice = useTouchStatus();

  const viewportSize = useViewportSize();
  const viewportSizeName = useViewportSizeName();

  const toggleTheme = () => {
    setThemePreference(themePreference === "dark" ? "light" : "dark");
  };

  // Evaluate custom styles if present
  let customStyles = props.customStyles
    ? props.customStyles(themes[themePreference], colors)
    : null;

  // Explicitly set DOM body styling
  updateBodyStyle(bodyStyle, customStyles, themes[themePreference].body);

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
    customThemes: props.customThemes,
    isMobileDevice,
    isTouchDevice,
    setTheme: (name) => setThemePreference(name),
    sysThemeOverridden: props.overrideSysTheme,
    theme: themes[themePreference],
    themeName: themes[themePreference].name,
    toggleTheme,
    viewportSize,
    viewportSizeName
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
