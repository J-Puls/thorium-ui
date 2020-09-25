/* React */
import React, { useLayoutEffect, useState } from 'react';
/* Thorium-UI */
import { Block } from './Block';
/* Style */
import dropdownItemStyle from '../styles/dropdownItemStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
/* Hooks */
import { useTheme } from '../utils/hooks/useTheme';

/**
 * A stylized container that can hold any other component
 */
export const DropdownItem = (props) => {
  const theme = useTheme().dropdown.item;
  const baseStyle = { ...dropdownItemStyle.general };
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({ ...baseStyle, ...theme.normal });
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useLayoutEffect(() => {
    setStyle({ ...baseStyle, ...theme.normal });
  }, [theme]);

  useLayoutEffect(() => {
    if (!props.noHover) {
      isHovered
        ? setStyle({ ...baseStyle, ...theme.hover })
        : setStyle({ ...baseStyle, ...theme.normal });
    }
  }, [isHovered, props.noHover]);

  return (
    <Block
      {...mapPropsToAttrs(props)}
      style={{ ...style, ...props.style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </Block>
  );
};

export default DropdownItem;
