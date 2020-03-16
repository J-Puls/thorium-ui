import React, { useState, useContext, useEffect } from "react";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { Link } from "react-router-dom";
import { dropdownLinkStyle } from "../../Styles";

export const DropdownLink = props => {
  const context = useContext(ThoriumContext);

  const [style, setStyle] = useState({
    ...dropdownLinkStyle,
    ...context.theme.dropdown.link.normal
  });

  useEffect(() => {
    setStyle({ ...dropdownLinkStyle, ...context.theme.dropdown.link.normal });
  }, [context.theme]);

  const handleMouseEnter = () => {
    setStyle({ ...dropdownLinkStyle, ...context.theme.dropdown.link.hover });
  };
  const handleMouseLeave = () => {
    setStyle({ ...dropdownLinkStyle, ...context.theme.dropdown.link.normal });
  };

  return (
    <Link
      href={props.href}
      rel={props.rel}
      style={{ ...style, ...props.style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
export default DropdownLink;
