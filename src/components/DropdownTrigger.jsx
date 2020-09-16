/* React */
import React from 'react';
/* Thorium-UI */
import Button from './Button';
import { ThoriumConsumer } from '../context/ThoriumContext';

/**
 * The button which toggles the "active" state of the Menu
 */
export const DropdownTrigger = React.forwardRef((props, ref) => (
  <ThoriumConsumer>
    {(context) => {
      const chevronUp = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          height='.75em'
          width='.75em'
          fill={context.theme.button[props.variant].normal.color}
        >
          <path d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z' />
        </svg>
      );
      const chevronDown = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          height='.75em'
          width='.75em'
          fill={context.theme.button[props.variant].normal.color}
        >
          <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
        </svg>
      );
      return (
        <div ref={ref}>
          <Button
            onClick={props.onClick}
            stretch
            variant={props.variant}
            size={props.size}
            id={props.id}
            style={{ zIndex: 9999, width: '100%', ...props.style }}
          >
            {props.text}
            {props.active && <span> {chevronUp}</span>}
            {!props.active && <span> {chevronDown}</span>}
          </Button>
        </div>
      );
    }}
  </ThoriumConsumer>
));

export default DropdownTrigger;
