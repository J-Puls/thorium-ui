import React from 'react';
import customStyles from './customStyles';
import customThemes from './customThemes';
import { ThoriumRoot, Block, Layer, ThemeToggle } from 'thorium-ui';

const App = () => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      <Layer justify='center'>
        <Block all={12} justify='center'>
          <ThemeToggle size='lg'></ThemeToggle>
        </Block>
      </Layer>
      <Layer justify='center'></Layer>
    </ThoriumRoot>
  );
};

export default App;
