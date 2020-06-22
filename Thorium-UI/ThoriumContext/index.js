import { createContext } from "react";

// Creates the main context passed in ThoriumRoot
export const ThoriumContext = createContext({
  displayName: "ThoriumContext",
});

// Provide shorthand version of Provider and Consumer
export const ThoriumConsumer = ThoriumContext.Consumer;
export const ThoriumProvider = ThoriumContext.Provider;

export default ThoriumContext;
