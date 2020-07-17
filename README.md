# Thorium-UI

To read the full documentation, please visit https://thorium-ui-preview.now.sh/.

**_Please note, this documentation is only updated periodically and does not always represent the current state of the project_**

# Overview

Throium-UI is designed to be an intuitive React.js framework with which to quickly build themed applications, without needing a ton of CSS clutter.

# Getting Started

Use the following instructions to get up and running with Thorium-UI.

## Installation

Clone the repository and copy the Thorium-UI folder to the `src` directory of your React project.

## Using ThoriumRoot

Once you've included Thorium-UI in your project, some very minimal boilerplate is needed to get up and running.

1. In your App.js file, begin by importing the ThoriumRoot component from Thorium-UI.
2. Wrap the ThoriumRoot around the rest of your App contents.

Your App.js file should look like the following.

```
import React from "react";
import { ThoriumRoot } from "Thorium-UI";

 const App = () => {
   return (
     <ThoriumRoot>
       <Container>
         /* YOUR CODE HERE */
       </Container>
     </ThoriumRoot>
   );
 }
export default App;
```

## Thats It!

With that finished, you're now ready to begin using Thorium-UI!
