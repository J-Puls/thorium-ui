import React, { useContext, useEffect, useState } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { updateFromProps } from "./utils";
import { buttonStyle } from "../Styles";

const Button = props => {
  const context = useContext(ThoriumContext);
  const defaultStyle = {
    ...context.theme.button.primary,
    ...buttonStyle
  };

  const [style, setStyle] = useState(defaultStyle);

  // Track click state
  const [isClicked, setIsClicked] = useState(false);

  // Update the button styling based on provided props and current theme
  useEffect(() => {
    setStyle(updateFromProps(style, props, context));
  }, [context.theme]);

  /**
   * Animate the button if click state is true
   *
   * Will return to normal state if button is unhovered while clicked
   */
  useEffect(() => {
    const newStyle = { ...updateFromProps(style, props, context) };
    if (isClicked) {
      if (props.animateOnClick && !props.stretch) {
        newStyle.transform = "scale(.95, .9)";
      } else if (props.animateOnClick && props.stretch) {
        newStyle.transform = "scale(.98, .9)";
      }
    } else {
      // Animates the button if animateOnClick is given
      if (props.animateOnClick) {
        newStyle.transform = "scale(1)";
      }
    }
    setStyle({ ...newStyle });
  }, [isClicked]);

  // Changes style when button is hovered ('onHover' does not exist)
  const handleMouseEnter = () => {
    // Any variant except 'link'
    if (style.backgroundColor !== "transparent") {
      setStyle({
        ...style,
        boxShadow: "inset 0 0 15px 10px #00000044",
        borderColor: "#00000044"
      });
    } else {
      if (context.theme === context.themes.dark)
        setStyle({ ...style, opacity: .7 });
      else setStyle({ ...style, color: "black" });
    }
  };

  // Resets style when un-hovered
  const handleMouseLeave = () => {
    setStyle({
      ...style,
      boxShadow: "none",
      borderColor: "transparent",
      opacity: 1
    });
    if (style.backgroundColor === "transparent") {
      setStyle({ ...style, color: context.theme.button.link.color, opacity: 1 });
    }
    isClicked && setIsClicked(false);
  };

  const handleMouseDown = () => {
    setIsClicked(true);
    // Executes any onMouseDown actions passed to props
    props.onMouseDown && props.onMouseDown();
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    // Executes any onMouseUp actions passed to props
    props.onMouseUp && props.onMouseUp();
  };

  return (
    <button
      onClick={props.onClick}
      style={{ ...style, ...props.style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
