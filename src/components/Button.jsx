/* React */
import React, { forwardRef, useState } from 'react';
/* ThoriumContext */
import { ThoriumConsumer } from '../context/ThoriumContext';
/* Style */
import { buttonStyle as bs } from '../styles/buttonStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { validProps } from '../utils/propValidation';
import mapPropsToMotion from '../utils/mapPropsToMotion';
/* PropTypes */
import PropTypes from 'prop-types';

const propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.string,
  stretch: PropTypes.bool,
  variant: PropTypes.oneOf(validProps.variants),
  disabled: PropTypes.bool
};

const defaultProps = {
  animated: false,
  size: 'normal',
  stretch: false,
  variant: 'primary',
  isDisabled: false,
  withMotion: false
};

export const Button = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(props.isDisabled);
  const handleClick = () => props.onClick && !isDisabled && props.onClick();
  const handleMouseDown = () => {
    if (!isDisabled) {
      setIsClicked(true);
      props.onMouseDown && props.onMouseDown();
    }
  };
  const handleMouseUp = () => {
    if (!isDisabled) {
      setIsClicked(false);
      props.onMouseUp && props.onMouseUp();
    }
  };
  const handleMouseEnter = () => {
    if (!isDisabled) {
      setIsHovered(true);
      props.onMouseEnter && props.onMouseEnter();
    }
  };
  const handleMouseLeave = () => {
    if (!isDisabled) {
      setIsHovered(false);
      setIsClicked(false);
      props.onMouseLeave && props.onMouseLeave();
    }
  };
  const handleTouchStart = () => {
    if (!isDisabled) {
      setIsHovered(true);
      setIsClicked(true);
      props.onTouchStart && props.onTouchStart();
    }
  };
  const handleTouchEnd = () => {
    if (!isDisabled) {
      setIsHovered(false);
      setIsClicked(false);
      props.onTouchEnd && props.onTouchEnd();
    }
  };

  return (
    <ThoriumConsumer>
      {(context) => {
        let motion;
        if (context.hasFramerEnabled && props.withMotion) {
          motion = require('framer-motion').motion;
        }
        const btnTheme = context.theme.button;
        // Build render style from props & state
        let rs = {
          ...bs.general,
          ...bs[props.size],
          ...btnTheme[props.variant].normal,
          width: props.stretch ? '100%' : 'initial'
        };

        // Change style when hovered
        isHovered && (rs = { ...rs, ...btnTheme[props.variant].hover });

        // Add respective animation when clicked
        if (props.animated && isClicked) {
          rs = props.stretch
            ? { ...rs, ...bs.animate.stretch }
            : { ...rs, ...bs.animate.normal };
        }

        props.isDisabled &&
          (rs = {
            ...rs,
            ...btnTheme[props.variant].disabled,
            cursor: 'default'
          });

        const genericProps = {
          'data-testid': 'button',
          ...mapPropsToAttrs(props, 'button'),
          disabled: isDisabled,
          onMouseDown: handleMouseDown,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onMouseUp: handleMouseUp,
          onTouchEnd: handleTouchEnd,
          onTouchStart: handleTouchStart,
          ref: ref,
          style: { ...rs, ...props.style }
        };
        if (props.withMotion) {
          return (
            <motion.div
              {...mapPropsToMotion(props)}
              className='motion-btn-container'
              style={{
                position: 'relative',
                width: rs.width,
                display: 'inline-block'
              }}
            >
              <button
                {...genericProps}
                className='motion-btn'
                onClick={handleClick}
              >
                {props.children}
              </button>
            </motion.div>
          );
        } else {
          return (
            <div
              style={{
                ...bs.wrapper,
                width: rs.width,
                ...props.wrapperStyle
              }}
            >
              <button {...genericProps} onClick={handleClick}>
                {props.children}
              </button>
            </div>
          );
        }
      }}
    </ThoriumConsumer>
  );
});

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
