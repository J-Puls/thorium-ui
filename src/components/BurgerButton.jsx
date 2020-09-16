/* React */
import React, { useState, forwardRef } from 'react';
/* Thorium-UI */
import Button from './Button';
import { ThoriumConsumer } from '../context/ThoriumContext';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { validProps } from '../utils/propValidation';
import mapPropsToMotion from '../utils/mapPropsToMotion';
/* PropTypes */
import PropTypes from 'prop-types';

const propTypes = {
  animated: PropTypes.bool,
  iconFill: PropTypes.string,
  overrideFill: PropTypes.bool,
  size: PropTypes.string,
  stretch: PropTypes.bool,
  targetID: PropTypes.string,
  variant: PropTypes.oneOf(validProps.variants)
};

const defaultProps = {
  animated: false,
  iconFill: '',
  overrideFill: false,
  size: 'normal',
  stretch: false,
  targetID: '',
  variant: 'link'
};

/**
 *  A pre-styled button to be used as the trigger for a mobile dropdown menu
 */
export const BurgerButton = forwardRef((props, ref) => {
  const [target, setTarget] = useState(props.targetID);
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  const handleClick = () => {
    const slave = document.getElementById(target);
    slave.click();
    toggle();
  };

  return (
    <ThoriumConsumer>
      {(context) => {
        const iconFill =
          props.iconFill || context.theme.button[props.variant].normal.color;
        const burgerIcon = (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            fill={iconFill}
          >
            <rect width='20' height='4' />
            <rect y='8' width='20' height='4' />
            <rect y='16' width='20' height='4' />
          </svg>
        );
        const closeIcon = (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            fill={iconFill}
          >
            <polygon
              points='18.5 4.3 15.7 1.5 10 7.2
        4.3 1.5 1.5 4.3 7.2 10 1.5 15.7 4.3 18.5
        10 12.8 15.7 18.5 18.5 15.7 12.8 10 '
            />
          </svg>
        );
        return (
          <Button
            {...mapPropsToAttrs(props, 'button')}
            id={props.id}
            onClick={handleClick}
            size={props.size}
            stretch={props.stretch}
            style={props.style}
            variant={props.variant}
            withMotion={props.withMotion}
            {...mapPropsToMotion(props)}
            ref={ref}
          >
            {/* Display a burger icon if inactive, or an X icon if active */}
            {!active && burgerIcon}
            {active && closeIcon}
          </Button>
        );
      }}
    </ThoriumConsumer>
  );
});

BurgerButton.defaultProps = defaultProps;
BurgerButton.propTypes = propTypes;
export default BurgerButton;
