import checkForRouter from "./checkForRouter";
import checkForCustomTheme from "./customThemeCheck";
import themes from "../Themes";

// Returns an object containing initial state data for ThoriumRoot
export const thoriumInit = () => {
  return {
    hasRouterEnabled: checkForRouter(),
    customThemes: checkForCustomTheme(),
    themes
  };
};

export default thoriumInit;
