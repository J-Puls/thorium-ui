import React from "react";
import { Layer, Block } from "../../";

export const DropdownContainer = (props) => {
  return (
    <Layer
      style={props.style}
      justify="center"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <Block all={12} style={{paddingLeft: 0, paddingRight: 0}}>
      {props.children}
      </Block>
    </Layer>
  );
};

export default DropdownContainer;
