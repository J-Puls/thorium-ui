import React from 'react';

// Creates the main context passed in ThoriumRoot
const ThoriumContext = React.createContext({});
ThoriumContext.displayName = 'ThoriumContext';

export const ThoriumProvider = ThoriumContext.Provider;
export const ThoriumConsumer = ThoriumContext.Consumer;
export default ThoriumContext;