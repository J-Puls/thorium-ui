import React from 'react';
import customStyles from './customStyles';
import customThemes from './customThemes';
import { ThoriumRoot } from 'thorium-ui';

const App = () => {
  return (
    <ThoriumRoot
      customStyles={customStyles}
      customThemes={customThemes}
    ></ThoriumRoot>
  );
};

export default App;
