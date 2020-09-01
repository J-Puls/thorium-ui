/* React */
import React from "react";

export const NavContext = React.createContext();

export const NavProvider = NavContext.Provider;
export const NavConsumer = NavContext.Consumer;
export default NavContext;
