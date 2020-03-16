import React, { useState, useEffect } from "react";
import Block from "../../Block";
import { dropdownStyle } from "../../Styles";

export const DropdownMenu = React.forwardRef((props, ref) => {
  const checkFloat = () => {
    if (!props.floating) return dropdownStyle.normal.hidden;
    else return dropdownStyle.floating.hidden;
  };
  const [style, setStyle] = useState({ ...checkFloat() });

  useEffect(() => {
    if (props.visible) {
      !props.floating &&
        setStyle({
          ...dropdownStyle.normal.visible,
          maxHeight: props.menuHeight
        });
      props.floating && setStyle({ ...dropdownStyle.floating.visible });
    } else {
      !props.floating && setStyle({ ...dropdownStyle.normal.hidden });
      props.floating && setStyle({ ...dropdownStyle.floating.hidden });
    }
  }, [props.visible, props.floating, props.menuHeight]);
  return (
    <Block
      ref={ref}
      vertical
      style={{
        ...style,
        ...dropdownStyle.body,
        ...props.style
      }}
      className={props.className}
    >
      {props.children}
    </Block>
  );
});
export default DropdownMenu;
