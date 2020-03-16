import React, { useState, useEffect, useContext } from "react";
import { updateFromProps } from "./utils";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { toggleSwitchStyle as toggle } from "../../Styles";

const ToggleSwitch = props => {
  const context = useContext(ThoriumContext);
  const containerStyle = {
    display: "inline-flex",
    alignItems: "flex-end"
  };
  // Set up the initial render state via props
  const defaultStyle = {};
  if (!props.checked) {
    defaultStyle.switchState = toggle.on;
    defaultStyle.value = true;
  } else {
    defaultStyle.switchState = toggle.off;
    defaultStyle.value = false;
  }
  if (props.large) {
    defaultStyle.body = toggle.large.body;
    defaultStyle.slider = toggle.large.slider;
  } else {
    defaultStyle.body = toggle.normal.body;
    defaultStyle.slider = toggle.normal.slider;
  }

  const [switchState, setSwitchState] = useState(defaultStyle.switchState);
  const [isChecked, setIsChecked] = useState(defaultStyle.value);
  const [railStyle, setRailStyle] = useState(toggle.rail);
  const [sliderStyle, setSliderStyle] = useState({
    ...defaultStyle.slider,
    ...switchState
  });

  /*
   * When the slider is clicked:
   * - Toggle the state to display (indicates if the switch is "on" or "off").
   * - Change the value of the underlying checkbox element.
   * - Run any code supplied to onChange.
   */
  const handleClick = () => {
    if (!props.large) {
      if (!isChecked) setSwitchState(toggle.normal.off);
      else setSwitchState(toggle.normal.on);
    } else {
      if (!isChecked) setSwitchState(toggle.large.off);
      else setSwitchState(toggle.large.on);
    }
    if (isChecked) setIsChecked(false);
    else setIsChecked(true);
    props.onChange && props.onChange();
  };

  // Update the position of the slider when clicked
  useEffect(() => {
    setSliderStyle({ ...defaultStyle.slider, ...switchState });
  }, [switchState, defaultStyle.slider]);

  // Update the variant styling when theme is changed
  useEffect(() => {
    props.variant &&
      setRailStyle({
        ...toggle.rail,
        ...updateFromProps(props.variant, context.theme, toggle.rail)
      });
  }, [context.theme, props.variant]);

  return (
    <thor-toggle
      style={{ ...containerStyle, ...props.style }}
      id={props.id}
      className={props.className}
      name={props.name}
    >
      <label htmlFor={props.name} style={{ paddingRight: ".5rem" }}>
        {props.label}
      </label>
      <div style={defaultStyle.body}>
        <input
          type="checkbox"
          name={props.name}
          style={toggle.origin}
          value={isChecked}
        />
        <div style={sliderStyle} onClick={handleClick} />
        <span style={railStyle} />
      </div>
    </thor-toggle>
  );
};

export default ToggleSwitch;
