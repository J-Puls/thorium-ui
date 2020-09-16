import React from 'react';
import customStyles from './customStyles';
import customThemes from './customThemes';
import { ThoriumRoot, CodeBlock, Block, Layer, ThemeToggle } from 'thorium-ui';

const App = () => {
  return (
    <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
      <Layer justify='center'>
        <Block all={3}>
          <ThemeToggle></ThemeToggle>
        </Block>
        <Block all={12}>
          <CodeBlock>{`import React from "react";
import { ThoriumRoot } from "thorium-ui";
import customStyles from "customStyles.js";
import customThemes from "customThemes.js";

 export const App = (props) => {
   return (
     <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
        /* YOUR COMPONENTS HERE */
     </ThoriumRoot>
   );
 }
export default App;`}</CodeBlock>
        </Block>
      </Layer>
    </ThoriumRoot>
  );
};

export default App;
