import React from "react";
import Block from "../Block";

const Sidebar = props => {
  return (
    <Block
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      bg={props.bg}
      translucent={props.translucent}
      style={{ display: "flex", flexDirection: "column", ...props.style }}
      className={props.className}
      id={props.id}
    >
      {props.children}
    </Block>
  );
};

export default Sidebar;
