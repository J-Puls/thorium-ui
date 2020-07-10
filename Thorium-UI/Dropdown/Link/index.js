/* React */
import React, { useContext, useState } from "react";
/* ThoriumContext */
import ThoriumContext from "../../ThoriumContext";
/* Style */
import { dropdownLinkStyle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";

/**
 * A styalized Link component
 */
export const DropdownLink = (props) => {
  const context = useContext(ThoriumContext);
  const [style, setStyle] = useState(context.theme.dropdown.link.normal);
  const handleClick = () => props.onClick && props.onClick();
  const handleMouseEnter = () => setStyle(context.theme.dropdown.link.hover);
  const handleMouseLeave = () => setStyle(context.theme.dropdown.link.normal);

  if (context.hasRouterEnabled) {
    const Link = require("react-router-dom").Link;
    return (
      <Link
        {...mapPropsToAttrs(props, "anchor")}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ ...dropdownLinkStyle, ...style }}
        to={props.to}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <a
        {...mapPropsToAttrs(props, "anchor")}
        href={props.href || props.to}
        rel={props.rel}
        style={{ ...dropdownLinkStyle }}
      >
        {props.children}
      </a>
    );
  }
};
export default DropdownLink;
