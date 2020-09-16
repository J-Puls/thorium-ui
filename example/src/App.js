import React from 'react';
import customStyles from './customStyles';
import customThemes from './customThemes';
import { ThoriumRoot, Block, Layer, Button, ThemeToggle } from 'thorium-ui';

const App = () => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      <Layer justify='center'>
        <Block all={3}>
          <ThemeToggle size='lg'></ThemeToggle>
        </Block>
        <Block all={12}>
        <Button variant="secondary">Normal</Button>
          <Button isDisabled variant="secondary">Disabled</Button>
        </Block>
      </Layer>
    </ThoriumRoot>
  );
};

export default App;
