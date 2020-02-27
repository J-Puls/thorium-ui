import React from 'react';

const ThoriumContext = React.createContext({});

export const ThoriumProiveder = ThoriumContext.Provider;
export const ThoriumConsumer = ThoriumContext.Consumer;
export default ThoriumContext;