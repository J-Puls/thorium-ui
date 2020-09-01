/* React */
import React, { useState } from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { toggleSwitchStyle as toggle } from "../styles/toggleSwitchStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { validProps } from "../utils/propValidation";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.oneOf(["normal", "lg"]),
  variant: PropTypes.oneOf([...validProps.variants, "themeToggle"]),
};

const defaultProps = {
  checked: false,
  size: "normal",
  variant: "primary",
};

export const ToggleSwitch = (props) => {
  const [isActive, setIsActive] = useState(props.checked);
  const [position, setPosition] = useState("off");

  const handleClick = () => {
    setIsActive(!isActive);
    position === "off" ? setPosition("on") : setPosition("off");
    props.onChange && props.onChange();
  };
  let body = { ...toggle[props.size].body };
  let slider = {
    ...toggle[props.size][position],
    ...toggle[props.size].slider,
  };
  let rail = { ...toggle.rail };
  return (
    <ThoriumConsumer>
      {(context) => {
        const ts = context.theme.toggleSwitch;
        if (props.variant === "themeToggle") {
          rail.backgroundColor = ts.themeToggle.backgroundColor;
        } else {
          rail.backgroundColor = isActive
            ? ts[position][props.variant].backgroundColor
            : ts.off.backgroundColor;
        }

        return (
          <div
            className={props.className}
            id={props.id}
            name={props.name}
            style={{ ...toggle.container, ...props.style }}
          >
            <label
              form={props.form}
              htmlFor={props.id}
              style={{ paddingRight: ".5rem" }}
            >
              {props.label}
            </label>
            <div style={body}>
              <input
                {...mapPropsToAttrs(props, "input")}
                type="hidden"
                value={isActive}
              />
              <div onClick={handleClick} style={slider} />
              <span style={rail} />
            </div>
          </div>
        );
      }}
    </ThoriumConsumer>
  );
};

ToggleSwitch.defaultProps = defaultProps;
ToggleSwitch.propTypes = propTypes;
export default ToggleSwitch;
