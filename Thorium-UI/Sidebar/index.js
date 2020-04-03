import React from "react";
import Block from "../Block";
import { mapPropsToResposiveSize } from "../ThoriumUtils";

const Sidebar = props => {
  return (
    <Block
      {...mapPropsToResposiveSize(props)}
      bg={props.bg}
      translucent={props.translucent}
      vertical
      className={props.className}
      id={props.id}
      style={props.style}
    >
      {props.children}
    </Block>
  );
};

export default Sidebar;
