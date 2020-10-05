/* React */
import React, { forwardRef, useState, useLayoutEffect } from 'react';
/* Style */
import { buttonStyle } from '../styles/buttonStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { validProps } from '../utils/propValidation';
import mapPropsToMotion from '../utils/mapPropsToMotion';
/* Hooks */
import { useTheme } from '../hooks/thoriumRoot/useTheme';
/* PropTypes */
import PropTypes from 'prop-types';

const propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.string,
  stretch: PropTypes.bool,
  variant: PropTypes.oneOf(validProps.variants),
  isDisabled: PropTypes.bool,
  withMotion: PropTypes.bool
};

const defaultProps = {
  animated: false,
  size: 'normal',
  stretch: false,
  variant: 'primary',
  isDisabled: false,
  withMotion: false
};

export const Button = forwardRef(function ThButton(props, ref) {
  const btnTheme = useTheme().button[props.variant];
  let baseStyle = { ...buttonStyle.general, ...buttonStyle[props.size] };
  props.stretch && (baseStyle = { ...baseStyle, ...buttonStyle.stretch });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(props.isDisabled);
  const [renderStyle, setRenderStyle] = useState(
    !isDisabled
      ? { ...baseStyle, ...btnTheme.normal }
      : { ...baseStyle, ...btnTheme.disabled, ...buttonStyle.disabled }
  );

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

  useLayoutEffect(() => {
    setRenderStyle(
      !isDisabled
        ? { ...baseStyle, ...btnTheme.normal }
        : { ...baseStyle, ...btnTheme.disabled, ...buttonStyle.disabled }
    );
  }, [btnTheme, isDisabled, props]);

  useLayoutEffect(() => {
    if (!isDisabled) {
      if (isHovered) {
        setRenderStyle({ ...baseStyle, ...btnTheme.hover });
      } else setRenderStyle({ ...baseStyle, ...btnTheme.normal });
    }
  }, [isHovered, isDisabled]);

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
    style: { ...renderStyle, ...props.style }
  };

  if (props.withMotion) {
    return (
      <motion.div
        {...mapPropsToMotion(props)}
        className='motion-btn-container'
        style={{
          position: 'relative',
          width: renderStyle.width,
          display: 'inline-block'
        }}
      >
        <button {...genericProps} className='motion-btn' onClick={handleClick}>
          {props.children}
        </button>
      </motion.div>
    );
  } else {
    return (
      <div
        style={{
          ...buttonStyle.wrapper,
          width: renderStyle.width,
          ...props.wrapperStyle
        }}
      >
        <button {...genericProps} onClick={handleClick}>
          {props.children}
        </button>
      </div>
    );
  }
});

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
