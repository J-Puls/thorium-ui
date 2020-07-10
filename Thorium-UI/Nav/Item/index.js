/* React */
import React from "react";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";
/* style */
import { navItemStyle as style } from "../../Styles/nav/navItem";

/**
 * A simple padded wrapper to encapsulate different items within a Nav
 */
export const NavItem = (props) => (
  <div {...mapPropsToAttrs(props)} style={{ ...style, ...props.style }}>
    {props.children}
  </div>
);

export default NavItem;
