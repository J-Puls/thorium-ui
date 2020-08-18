import React from "react";
import { Block, ThoriumConsumer } from "../";
import { dropdownMenuStyle as dms } from "../styles";

export const DropdownMenu = (props) => {
  return (
    <ThoriumConsumer>
      {(context) => {
        let style = { ...dms.general, ...context.theme.dropdown.menu };
        if (props.active)
          style = { ...style, ...dms[props.displayType].active };
        else style = { ...style, ...dms[props.displayType].inactive };
        props.displayType === "float" && (style.top = props.top);
        props.scrollable && (style.overflowY = "auto");
        return (
          <Block
            all={12}
            justify="center"
            style={{ ...style, height: props.height, flexDirection: "column" }}
          >
            {props.children}
          </Block>
        );
      }}
    </ThoriumConsumer>
  );
};
export default DropdownMenu;
