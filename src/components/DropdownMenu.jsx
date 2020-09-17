import React from 'react';
import { Block } from './Block';
import { ThoriumConsumer } from '../context/ThoriumContext';
import { dropdownMenuStyle as dms } from '../styles/dropdownMenuStyle';

export const DropdownMenu = (props) => {
  return (
    <ThoriumConsumer>
      {(context) => {
        let style = { ...dms.general, ...context.theme.dropdown.menu };
        if (props.active)
          style = { ...style, ...dms[props.displayType].active };
        else style = { ...style, ...dms[props.displayType].inactive };
        props.displayType === 'float' && (style.top = props.top);
        props.scrollable && props.height && (style.overflowY = 'auto');
        return (
          <Block all={12} style={{ ...style, height: props.height }} vertical>
            {props.children}
          </Block>
        );
      }}
    </ThoriumConsumer>
  );
};
export default DropdownMenu;
