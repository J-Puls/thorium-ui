import React from "react";
import Layer from "./Layer";
import Block from "./Block";

/**
 * A wrapper containing all other Dropdown subcomponents
 */
export const DropdownContainer = (props) => (
  <Layer
    style={props.style}
    justify="center"
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  >
    <Block all={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
      {props.children}
    </Block>
  </Layer>
);

export default DropdownContainer;
