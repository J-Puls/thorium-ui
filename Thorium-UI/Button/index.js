import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { updateFromProps } from "./utils";
import { buttonStyle } from "../Styles";

const Button = props => {
  const context = useContext(ThoriumContext);
  const defaultStyle = {
    ...buttonStyle,
    ...updateFromProps(props, context.theme.button)
  };

  const [style, setStyle] = useState(defaultStyle);

  // Track click state
  const [isClicked, setIsClicked] = useState(false);

  // Update the button styling based on provided props and current theme
  useEffect(() => {
    setStyle({
      ...buttonStyle,
      ...updateFromProps(props, context.theme.button)
    });
  }, [context.theme, props]);

  /**
   * Animate the button if click state is true
   *
   * Will return to normal state if button is unhovered while clicked
   */

  const animateDown = () => {
    if (props.animated && !props.stretch) {
      setStyle({ ...style, transform: "scale(.95, .9)" });
    } else if (props.animated && props.stretch) {
      setStyle({ ...style, transform: "scale(.98, .9)" });
    }
  };
  const animateUp = () => {
    if (props.animated) {
      setStyle({ ...style, transform: "scale(1)" });
    }
  };

  // Changes style when button is hovered ('onHover' does not exist in React)
  const handleMouseEnter = () => {
    // Any variant except 'link'
    if (style.backgroundColor !== "transparent") {
      setStyle({
        ...style,
        boxShadow: "inset 0 0 15px 10px #00000044",
        borderColor: "#00000044"
      });
      props.onMouseEnter && props.onMouseEnter();
    }
    // 'link' variant hover effect
    else {
      if (context.theme === context.themes.dark)
        setStyle({ ...style, opacity: 0.7 });
      else setStyle({ ...style, color: "black" });
    }
  };

  // Resets style when unhovered
  const handleMouseLeave = () => {
    setStyle({
      ...style,
      boxShadow: "none",
      borderColor: "transparent",
      opacity: 1
    });
    if (style.backgroundColor === "transparent") {
      setStyle({
        ...style,
        color: context.theme.button.link.color,
        opacity: 1
      });
    }
    if (isClicked) {
      setIsClicked(false);
      animateUp();
    }
    props.onMouseLeave && props.onMouseLeave();
  };

  // Update 'clicked' state and run any code passed to onMouseDown
  const handleMouseDown = () => {
    setIsClicked(true);
    animateDown();
    props.onMouseDown && props.onMouseDown();
  };

  // Update 'clicked' state and run any code passed to onMouseUp
  const handleMouseUp = () => {
    setIsClicked(false);
    animateUp();
    props.onMouseUp && props.onMouseUp();
  };
  const handleClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      autoFocus={props.autofocus}
      disabled={props.disabled}
      form={props.form}
      formAction={props.formaction}
      formEncType={props.formenctype}
      formMethod={props.formmethod}
      formNoValidate={props.formnovalidate}
      formTarget={props.formtarget}
      name={props.name}
      value={props.value}
      style={{ ...style, ...props.style }}
    >
      {props.children}
    </button>
  );
};

export default Button;
