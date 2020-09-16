import React from 'react';
import customStyles from './customStyles';
import customThemes from './customThemes';
import { ThoriumRoot, Block, Layer, ThemeToggle } from 'thorium-ui';

const App = () => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      <Layer justify='center'>
        <Block all={3}>
          <ThemeToggle size='lg'></ThemeToggle>
        </Block>
        <Block all={12}></Block>
      </Layer>
    </ThoriumRoot>
  );
};

export default App;
