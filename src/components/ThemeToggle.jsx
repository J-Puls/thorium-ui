/* React */
import React, { useState, useContext } from "react";
/* Thorium-UI */
import ToggleSwitch from "./ToggleSwitch";
import { ThoriumContext } from "../context/ThoriumContext";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";

/**
 * A specialized ToggleSwitch for toggling the ThoriumContext theme.
 */
export const ThemeToggle = (props) => {
  const context = useContext(ThoriumContext);
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setIsActive(!isActive);
    context.toggleTheme();
  };
  return (
    <ToggleSwitch
      {...mapPropsToAttrs(props, "input")}
      checked={isActive}
      label={props.label}
      size={props.size}
      onChange={() => handleChange()}
      style={props.style}
      variant="themeToggle"
    />
  );
};

export default ThemeToggle;
