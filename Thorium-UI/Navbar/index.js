import React from "react";
import Layer from "../Layer";

export const Navbar = props => {
  return (
    <Layer
      bg={props.bg}
      className={props.className}
      id={props.id}
      justify={props.justify}
      rounded={props.rounded}
      sticky={props.sticky}
      style={{ padding: ".5rem", ...props.style }}
      translucent={props.translucent}
    >
      {props.children}
    </Layer>
  );
};

export default Navbar;
