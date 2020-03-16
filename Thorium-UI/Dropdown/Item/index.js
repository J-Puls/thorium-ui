import React, { useState, useContext, useEffect } from "react";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { dropdownItemStyle } from "../../Styles";

export const DropdownItem = props => {
  const context = useContext(ThoriumContext);

  const [style, setStyle] = useState({
    ...dropdownItemStyle,
    ...context.theme.dropdown.item.normal
  });

  useEffect(() => {
    setStyle({ ...dropdownItemStyle, ...context.theme.dropdown.item.normal });
  }, [context.theme]);
  const handleMouseEnter = () => {
    setStyle({ ...dropdownItemStyle, ...context.theme.dropdown.item.hover });
  };
  const handleMouseLeave = () => {
    setStyle({ ...dropdownItemStyle, ...context.theme.dropdown.item.normal });
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, ...props.style }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};
export default DropdownItem;
