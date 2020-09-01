# Thorium-UI

To read the full documentation, please visit https://thorium-ui-preview.now.sh/.

**_Please note, this documentation is only updated periodically and does not always represent the current state of the project_**

# Overview

Throium-UI is designed to be an intuitive React.js frameworkm, with which to quickly build themed applications, without needing a ton of CSS clutter.

# Getting Started

Use the following instructions to get up and running with Thorium-UI.

## Installation
`npm i thorium-ui`

## Using ThoriumRoot

Once you've successfully installed Thorium-UI, some very minimal boilerplate is needed to get up and running.

1. In your App.js file, begin by importing the ThoriumRoot component from Thorium-UI.
2. Wrap the ThoriumRoot around the rest of your App contents.
3. *(optional)* If you're using customThemes or customStyles, import them at the top of your App.js file, and pass them as corresponding props to ThoriumRoot.

Your App.js file should look like the following.

```
import React from "react";
import { ThoriumRoot } from "thorium-ui";
import customStyles from "customStyles.js";
import customThemes from "customThemes.js";

 export const App = (props) => {
   return (
     <ThoriumRoot customStyles={customStyles} customThemes={customThemes}>
       <Container>
         /* YOUR COMPONENTS HERE */
       </Container>
     </ThoriumRoot>
   );
 }
export default App;
```

## Thats It!

With that finished, you're now ready to begin using Thorium-UI!
