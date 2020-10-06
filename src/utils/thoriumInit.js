import checkForRouter from "./checkForRouter";
import { checkIfMobileDevice } from "./checkIfMobileDevice";
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
    hasRouterEnabled: checkForRouter(),
    hasFramerEnabled: checkForFramer(),
    isMobile: checkIfMobileDevice(),
    sysDefaultTheme
  };
};

export default thoriumInit;
