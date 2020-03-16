import React, { useState, useContext, useEffect } from "react";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { dropdownDividerStyle } from "../../Styles";

export const DropdownDivider = props => {
  const context = useContext(ThoriumContext);

  const [style, setStyle] = useState({
    ...dropdownDividerStyle,
    ...context.theme.dropdown.divider
  });

  useEffect(() => {
    setStyle({ ...dropdownDividerStyle, ...context.theme.dropdown.divider });
  }, [context.theme]);

  return (
    <div style={{ ...style, ...props.style }} className={props.className}>
      {props.label}
    </div>
  );
};
export default DropdownDivider;
