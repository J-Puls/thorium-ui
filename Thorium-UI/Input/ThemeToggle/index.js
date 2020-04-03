import React, { useContext, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import ThoriumContext from "../../ThoriumContext";
import { mapPropsToAttrs } from "../../ThoriumUtils";

const ThemeToggle = props => {
  const context = useContext(ThoriumContext);

  // Default to the "off" position
  const [isOn, setIsOn] = useState(false);

  // When clicked, toggle "on/off" position and theme
  const handleChange = () => {
    setIsOn(!isOn);
    if (context.theme.name === "dark") {
      context.customThemes &&
        context.setTheme({
          ...context.themes.light,
          ...context.customThemes.light
        });
      !context.customThemes && context.setTheme(context.themes.light);
    } else {
      context.customThemes &&
        context.setTheme({
          ...context.themes.dark,
          ...context.customThemes.dark
        });
      !context.customThemes && context.setTheme(context.themes.dark);
    }
  };

  return (
    <ToggleSwitch
      {...mapPropsToAttrs(props, "input")}
      large={props.large}
      variant="themeToggle"
      onChange={handleChange}
      label={props.label}
      checked={isOn}
    />
  );
};

export default ThemeToggle;
