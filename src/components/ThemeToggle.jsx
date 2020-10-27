/* React */
import React, { useState } from "react";
/* Thorium-UI */
import { ToggleSwitch } from "./ToggleSwitch";
/* Utils */
import { mapPropsToAttrs } from "../utils/mapPropsToAttrs";
/* Hooks */
import { useToggleTheme } from "../hooks/thoriumRoot/useToggleTheme";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "normal", "lg"])
};

const defaultProps = {
  size: "normal"
};

/**
 * A specialized ToggleSwitch for toggling the ThoriumContext theme.
 */
export const ThemeToggle = (props) => {
  const toggleTheme = useToggleTheme();
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => {
    setIsActive(!isActive);
    toggleTheme();
  };

  return (
    <ToggleSwitch
      {...mapPropsToAttrs(props, "input")}
      className="th-theme-toggle"
      data-testid="th-theme-toggle"
      checked={isActive}
      label={props.label}
      size={props.size}
      onChange={() => handleChange()}
      style={props.style}
      variant="themeToggle"
    />
  );
};

ThemeToggle.propTypes = propTypes;
ThemeToggle.defaultProps = defaultProps;
export default ThemeToggle;
