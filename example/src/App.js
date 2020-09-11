import React from 'react';
import customStyles from './customStyles';
import customThemes from './customThemes';
import {
  ThoriumRoot,
  ThoriumConsumer,
  Block,
  Layer,
  ThemeToggle
} from 'thorium-ui';

const App = () => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      <Layer justify='center'>
        <Block all={3}>
          <ThemeToggle></ThemeToggle>
          <ThoriumConsumer>
            {(context) => {
              return <p style={context.customStyles.test}>Test</p>;
            }}
          </ThoriumConsumer>
        </Block>
      </Layer>
    </ThoriumRoot>
  );
};

export default App;
