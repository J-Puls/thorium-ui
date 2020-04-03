import React from "react";
import { mapPropsToAttrs } from "../../ThoriumUtils";

const NavItem = props => {
  const handleClick = () => props.setActive && props.setActive(props.navId);
  const style = { padding: "0 .25rem" };
  if (props.navId === props.activeItem && props.boldActive)
    style.fontWeight = "900";

  return (
    <div
      {...mapPropsToAttrs(props)}
      style={{ ...style, ...props.style }}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};
export default NavItem;
