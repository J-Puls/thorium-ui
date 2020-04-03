import React from "react";
import Block from "../../Block";

export const DropdownMenu = React.forwardRef((props, ref) => {
  return (
    <Block
      all={12}
      ref={ref}
      vertical
      style={{ ...props.style }}
      className={props.className}
    >
      {props.children}
    </Block>
  );
});
export default DropdownMenu;
