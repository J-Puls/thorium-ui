/* React */
import React, { useState } from "react";
/* Thorium-UI */
import { Block, ThoriumConsumer } from "../../";
/* Style */
import { dropdownItemStyle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs, mapPropsToResponsiveSize } from "../../ThoriumUtils";

/**
 * A styalized container that can hold any other component
 */
export const DropdownItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <ThoriumConsumer>
      {(context) => {
        let style;
        !isHovered
          ? (style = context.theme.dropdown.item.normal)
          : (style = context.theme.dropdown.item.hover);
        return (
          <Block
            {...mapPropsToAttrs(props)}
            {...mapPropsToResponsiveSize(props)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ ...dropdownItemStyle, ...style, ...props.style }}
          >
            {props.children}
          </Block>
        );
      }}
    </ThoriumConsumer>
  );
};

export default DropdownItem;
