import themes from "../themes";
import {
  checkForRouter,
  checkIfMobileDevice,
  customThemeCheck,
  checkForCustomStyles,
  checkForFramer,
} from "./";

// Check for system-wide theme mode preference
let sysDefaultTheme;

if (window.matchMedia) {
  sysDefaultTheme = window.matchMedia(`(prefers-color-scheme: dark)`).matches
    ? "dark"
    : "light";
} else sysDefaultTheme = "dark";

/**
 * @returns An object containing initial state data for ThoriumRoot
 */
export const thoriumInit = () => {
  return {
    customThemes: customThemeCheck(),
    hasRouterEnabled: checkForRouter(),
    hasFramerEnabled: checkForFramer(),
    hasCustomStyles: checkForCustomStyles(),
    isMobile: checkIfMobileDevice(),
    sysDefaultTheme,
    themes,
  };
};

export default thoriumInit;
