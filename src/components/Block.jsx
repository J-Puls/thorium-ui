/* React */
import React, { forwardRef } from 'react';
/* Styling */
import { blockStyle } from '../styles/blockStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { validProps } from '../utils/propValidation';
import appendStyle from '../utils/appendStyle';
import mapPropsToMotion from '../utils/mapPropsToMotion';
/* Hooks */
import { useViewportSizeName } from '../hooks/thoriumRoot/useViewportSizeName';
/* PropTypes */
import PropTypes from 'prop-types';

const propTypes = {
  all: PropTypes.oneOf(validProps.sizes),
  justify: PropTypes.oneOf(validProps.justify),
  lg: PropTypes.oneOf(validProps.sizes),
  md: PropTypes.oneOf(validProps.sizes),
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  sm: PropTypes.oneOf(validProps.sizes),
  vertical: PropTypes.bool,
  xl: PropTypes.oneOf(validProps.sizes),
  xs: PropTypes.oneOf(validProps.sizes)
};

const defaultProps = {
  all: null,
  justify: null,
  lg: null,
  md: null,
  round: false,
  rounded: false,
  sm: null,
  vertical: false,
  withMotion: false,
  xl: null,
  xs: null
};

// All valid props to be used by appendStyle
const stylingProps = [
  'rounded',
  'vertical',
  'justify',
  'all',
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
];

/**
 * Defines a column within a Layer
 */
export const Block = forwardRef(function ThBlock(props, ref) {
  const vpSizeName = useViewportSizeName();

  let style = { ...blockStyle.general };
  style = appendStyle(props, stylingProps, style, blockStyle, { vpSizeName });

  const genericProps = {
    'data-testid': 'th-block',
    ...mapPropsToAttrs(props),
    style: { ...style, ...props.style },
    ref
  };

  if (props.withMotion) {
    return (
      <motion.div
        className='motion-block'
        {...genericProps}
        {...mapPropsToMotion(props)}
      >
        {props.children}
      </motion.div>
    );
  } else return <div {...genericProps}>{props.children}</div>;
});

Block.defaultProps = defaultProps;
Block.propTypes = propTypes;
export default Block;
