import React from "react";
import { Block } from "../../";
import { dropdownMenuStyle as ds } from "../../Styles";

export const DropdownMenu = (props) => {
  let style = { ...ds.general };
  if (props.active) style = { ...style, ...ds[props.displayType].active };
  else style = { ...style, ...ds[props.displayType].inactive };
  props.displayType === "float" && (style.top = props.top);
  props.scrollable && (style.overflowY = "auto");
  return (
    <Block
      all={12}
      vertical
      justify="center"
      style={{ ...style, height: props.height }}
    >
      {props.children}
    </Block>
  );
};
export default DropdownMenu;
