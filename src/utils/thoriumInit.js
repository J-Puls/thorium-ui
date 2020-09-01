import checkForRouter from "./checkForRouter";
import { checkIfMobileDevice } from "./checkIfMobileDevice";
// import customThemeCheck from "./customThemeCheck";
// import checkForCustomStyles from "./customStylesCheck";
import checkForFramer from "./checkForRouter";

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
    // customThemes: customThemeCheck(),
    hasRouterEnabled: checkForRouter(),
    hasFramerEnabled: checkForFramer(),
    // hasCustomStyles: checkForCustomStyles(),
    isMobile: checkIfMobileDevice(),
    sysDefaultTheme,
  };
};

export default thoriumInit;
