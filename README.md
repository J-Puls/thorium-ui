# Thorium-UI
To read the full documentation, please visit https://thorium-ui-preview.now.sh/.

***Please note, this documentation is only updated periodically and does not always represent the current state of the project***
# Overview
The goal of Throium-UI is to provide an intuitive, user-friendly API with which to build React components, without needing a ton of CSS clutter. This does not mean, however, that you are stuck with the default styling baked into Thorium-UI. Either providing values to the style prop, or styling via CSS will override the built-in styling of any component.

# Getting Started
## Installation
Clone the GitHub repository and copy the Thorium-UI file to the `/src` directory of your React project.

## Setting up your App component
Once the `Thorium-UI` source file is in your project, we need to do some very minimal boilerplate to get things up and running. Start by including the `ThoriumRoot` component in the return statement of your App component (or the render method, if using a class-based App component).

When using ThroiumRoot, you must pass it either a `dark` or `light` prop. This will set the default theme to use (this can always be toggled later inside your components).

Your App.js file should look like this:

```
import React from "react";
import ThoriumRoot from "../Thorium-UI/ThoriumRoot";

const App = () => {
  return (
    <ThoriumRoot dark>
      /* YOUR Code HERE */
    </ThoriumRoot>
  );
};
export default App;
```

You're now ready to begin using Thorium components!
