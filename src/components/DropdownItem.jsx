/* React */
import React, { useState } from 'react';
/* Thorium-UI */
import { Block } from './Block';
import { ThoriumConsumer } from '../context/ThoriumContext';
/* Style */
import dropdownItemStyle from '../styles/dropdownItemStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';

/**
 * A styalized container that can hold any other component
 */
export const DropdownItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = (e) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <ThoriumConsumer>
      {(context) => {
        let style = { ...dropdownItemStyle.general };
        if (isHovered && !props.noHover) {
          style = {
            ...style,
            ...context.theme.dropdown.item.hover
          };
        } else {
          style = {
            ...style,
            ...context.theme.nav.item.normal
          };
        }

        return (
          <Block
            {...mapPropsToAttrs(props)}
            style={{ ...style, ...props.style }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            {props.children}
          </Block>
        );
      }}
    </ThoriumConsumer>
  );
};

export default DropdownItem;
