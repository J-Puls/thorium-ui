/* React */
import React, { useState } from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../../ThoriumContext";
/* Style */
import { toggleSwitchStyle as toggle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";
/* Prop Validation */
import { validProps } from "../../ThoriumUtils";

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
  const body = { ...toggle[props.size].body };
  const slider = {
    ...toggle[props.size][position],
    ...toggle[props.size].slider,
  };
  const rail = { ...toggle.rail };
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
