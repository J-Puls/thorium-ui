import themes from "../../Themes";
import {
  checkForRouter,
  checkIfMobileDevice,
  customThemeCheck,
  checkForCustomStyles,
} from "../";

// Check for system-wide theme mode preference
let sysDefaultTheme;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  sysDefaultTheme = "dark";
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  sysDefaultTheme = "light";
} else sysDefaultTheme = null;

/**
 * @returns An object containing initial state data for ThoriumRoot
 */
export const thoriumInit = () => {
  return {
    customThemes: customThemeCheck(),
    hasRouterEnabled: checkForRouter(),
    hasCustomStyles: checkForCustomStyles(),
    isMobile: checkIfMobileDevice(),
    sysDefaultTheme,
    themes,
  };
};

export default thoriumInit;
