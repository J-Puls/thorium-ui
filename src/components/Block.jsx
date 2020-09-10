/* React */
import React, { Component, Fragment } from 'react';
/* ThoriumContext */
import { ThoriumConsumer } from '../context/ThoriumContext';
/* Styling */
import { blockStyle } from '../styles/blockStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { validProps } from '../utils/propValidation';
import appendStyle from '../utils/appendStyle';
import mapPropsToMotion from '../utils/mapPropsToMotion';
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
  translucent: PropTypes.bool,
  vertical: PropTypes.bool,
  xl: PropTypes.oneOf(validProps.sizes),
  xs: PropTypes.oneOf(validProps.sizes)
};

const defaultProps = {
  all: null,
  justify: null,
  lg: null,
  md: null,
  rounded: false,
  sm: null,
  translucent: false,
  vertical: false,
  xl: null,
  xs: null,
  withMotion: false
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
export const Block = (props) => {
  return (
    <ThoriumConsumer>
      {(context) => {
        let motion;
        if (context.hasFramerEnabled && props.withMotion) {
          motion = require('framer-motion').motion;
        }
        let style = { ...blockStyle.general };
        style = appendStyle(props, stylingProps, style, blockStyle, context);
        const genericProps = {
          'data-testid': 'block',
          ...mapPropsToAttrs(props),
          style: { ...style, ...props.style }
        };

        return (
          <Fragment>
            {props.withMotion && (
              <motion.div {...mapPropsToMotion(props)} {...genericProps}>
                {props.children}
              </motion.div>
            )}
            {!props.withMotion && <div {...genericProps}>{props.children}</div>}
          </Fragment>
        );
      }}
    </ThoriumConsumer>
  );
};
Block.defaultProps = defaultProps;
Block.propTypes = propTypes;
export default Block;
