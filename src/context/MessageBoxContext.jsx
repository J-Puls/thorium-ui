/* React */
import React from "react";

export const MessageBoxContext = React.createContext();

export const MessageBoxProvider = MessageBoxContext.Provider;
export const MessageBoxConsumer = MessageBoxContext.Consumer;
export default MessageBoxContext;
