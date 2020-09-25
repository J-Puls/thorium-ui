/* React */
import React, { forwardRef, Fragment } from 'react';
/* Style */
import { textInputStyle } from '../styles/textInputStyle';
/* Utils */
import appendStyle from '../utils/appendStyle';
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
/* PropTypes */
import PropTypes from 'prop-types';
/* Hooks */
import { useTheme } from '../utils/useTheme';

const propTypes = {
  size: PropTypes.oneOf(['sm', 'normal', 'lg']),
  bordered: PropTypes.bool,
  label: PropTypes.string
};

const defaultProps = {
  size: 'normal',
  bordered: false,
  label: ''
};

// All valid props to be used by appendStyle
const stylingProps = ['size', 'bordered'];

export const TextInput = forwardRef((props, ref) => {
  const theme = useTheme().textInput;

  let style = { ...textInputStyle.general, ...theme };
  style = appendStyle(props, stylingProps, style, textInputStyle);

  return (
    <Fragment>
      {props.label && (
        <label form={props.form} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input ref={ref} {...mapPropsToAttrs(props, 'input')} style={style} />
    </Fragment>
  );
});

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
export default TextInput;
