import React from "react";
import Layer from "../Layer";

const Navbar = props => {
  return (
    <Layer
      className={props.className}
      id={props.id}
      justify={props.justify}
      bg={props.bg}
      translucent={props.translucent}
      rounded={props.rounded}
      sticky={props.sticky}
      style={{ padding: ".5rem", ...props.style }}
    >
      {props.children}
    </Layer>
  );
};

export default Navbar;
