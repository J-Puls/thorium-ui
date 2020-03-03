import React, { useState, useContext, useEffect } from "react";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { linkStyle } from "../../Styles";

const NavLink = props => {
  const context = useContext(ThoriumContext);

  const defaultStyle = {
    ...linkStyle,
    ...context.theme.link
  };
  const [style, setStyle] = useState(defaultStyle);

  useEffect(() => {
    setStyle({ ...style, ...context.theme.link });
  }, [context.theme]);

  const handleMouseEnter = () => {
    setStyle({ ...style, opacity: 0.7 });
  };
  const handleMouseLeave = () => {
    setStyle({ ...style, opacity: 1 });
  };
  const handleClick = e => {
    if (props.onClick) {
        e.preventDefault();
        props.onClick();
    }
  };

  return (
    <a
      href={props.href}
      rel={props.rel}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={e => handleClick(e)}
    >
      {props.children}
    </a>
  );
};
export default NavLink;
