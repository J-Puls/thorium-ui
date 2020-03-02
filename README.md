# thorium-UI
A live sample app can be found at https://thorium-ui-preview.now.sh/

***Please note, this preview is only updated periodically and does not always represent the current state of the project***

# How to use Thorium-UI in your project
Thorium-UI is in the very early stages of development right now. As such, there is no automated way to add it to your project.
With that said, getting started with its current form is very simple.

### Step 1: Getting it installed
Clone the repo and copy the Thorium-UI file to the `/src` directory of your React project.

### Step 2: Setting up your App
Once the Thorium-UI source file is in your project, we need to do some very minimal boilerplate to get things up and running. Start by importing the `ThoriumRoot` component to the return statement of your App (or the render method, if using a class-based App component).

Your App.js file should look like this.

```
import React from "react";
import ThoriumRoot from "../Thorium-UI/ThoriumRoot";

const App = () => {

  return (
    <ThoriumRoot>
      /* Add your components here! */
    </ThoriumRoot>
  );
};

export default App;
```

You're now ready to begin using Thorium components!

### Step 3: Building with Thorium-UI components
***The "No CSS Required" philosophy***

Thorium-UI is built on the idea of building a full-fledged React application, without the need for an external CSS file, thus containing all the styling within the Javascript itself. This aids in reducing folder clutter, and allowing for styles to be dynamically changed by the application itself natively. This does not mean, however, that you cannot use CSS. It will work as normal, but it isn't necessary.

#### Built in theme toggling:
It is becoming more and more commonplace for a website or application to include separate styling for "light" and "dark" mode variants. Thorium simplifies this right from the get go, with built in themes. Like the rest of Thorium, implementing a theme toggle button is super simple (and will become even easier once a built-in toggle button component is created). The `ThoriumRoot` component includes a React Context provider that allows access to the theme from any child component.

For the current iteration, assuming your App.js component resides in a `/components` directory, the creating of a theme toggle component looks like the following:

```
import React, { useContext } from "react";
import ThoriumContext from "../Thorium-UI/ThoriumRoot/ThoriumContext";
import Button from "../Thorium-UI/Button";

const ToggleButton = () => {
  /* Create a context variable that will contain the theme data */
  const context = useContext(ThoriumContext);
  
  /* Set up a handler that will toggle the theme between dark & light */
  const handleClick = () => {
    if (context.theme === context.themes.dark) {
      context.setTheme(context.themes.light);
    } else {
      context.setTheme(context.themes.dark);
    };
  };
  
  /* Return a button which toggles the theme when clicked */
  return <Button onClick={handleClick}>Toggle Theme</Button>
}

export default ToggleButton;
```

That's all there is to it! You can now add the toggle button anywhere inside the ThoriumRoot component, and it will dynamically change the theme styling for the entire application.
