/* React */
import React, { useState } from "react";
/* Style */
import { toggleSwitchStyle as toggle } from "../styles/toggleSwitchStyle";
/* Utils */
import { mapPropsToAttrs } from "../utils/mapPropsToAttrs";
import { variants } from "../utils/propValidation";
/* PropTypes */
import PropTypes from "prop-types";
/* Hooks */
import { useTheme } from "../hooks/thoriumRoot/useTheme";

const propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.oneOf(["normal", "lg"]),
  variant: PropTypes.oneOf([...variants, "themeToggle"]),
  label: PropTypes.string,
  position: PropTypes.oneOf(["off", "on"]).isRequired
};

const defaultProps = {
  checked: false,
  size: "normal",
  variant: "primary",
  position: "off"
};

export const ToggleSwitch = (props) => {
  const theme = useTheme().toggleSwitch;
  const [isActive, setIsActive] = useState(props.checked);
  const [position, setPosition] = useState(props.position);

  const handleClick = () => {
    setIsActive(!isActive);
    setPosition(position === "off" ? "on" : "off");
    props.onClick && props.onClick();
    props.onChange && props.onChange();
  };

  const rail = {
    ...toggle.rail,
    backgroundColor:
      props.variant === "themeToggle"
        ? theme.themeToggle.backgroundColor
        : isActive
        ? theme[position][props.variant].backgroundColor
        : theme.off.backgroundColor
  };

  return (
    <div
      className={
        props.className ? props.className : "th-toggle-switch-container"
      }
      data-testid={
        props["data-testid"]
          ? props["data-testid"]
          : "th-toggle-switch-container"
      }
      id={props.id}
      name={props.name}
      style={{ ...toggle.container, ...props.style }}
    >
      {props.label && (
        <label
          className="th-toggle-switch-label"
          data-testid="th-toggle-switch-label"
          form={props.form}
          htmlFor={props.id}
          style={{ paddingRight: ".5rem" }}
        >
          {props.label}
        </label>
      )}
      <div
        className="th-toggle-switch-body"
        data-testid="th-toggle-switch-body"
        style={{ ...toggle[props.size].body }}
      >
        <input
          {...mapPropsToAttrs(props, "input")}
          className="th-toggle-hidden-input"
          data-testid="th-toggle-hidden-input"
          type="hidden"
          value={isActive}
        />
        <div
          className="th-toggle-switch-slider"
          data-testid="th-toggle-switch-slider"
          onClick={handleClick}
          style={{
            ...toggle[props.size][position],
            ...toggle[props.size].slider
          }}
        />
        <span
          className="th-toggle-switch-rail"
          data-testid="th-toggle-switch-rail"
          style={rail}
        />
      </div>
    </div>
  );
};

ToggleSwitch.defaultProps = defaultProps;
ToggleSwitch.propTypes = propTypes;
export default ToggleSwitch;
