import React from "react";

const NavItem = props => {
  return (
    <div
      style={{ padding: "0 .25rem", ...props.style }}
      className={props.className}
      id={props.id}
    >
      {props.children}
    </div>
  );
};
export default NavItem;
