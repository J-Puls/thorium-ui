/* React */
import React, { forwardRef, Fragment } from 'react'
/* ThoriumContext */
import { ThoriumConsumer } from '../context/ThoriumContext'
/* Style */
import { textInputStyle } from '../styles/textInputStyle'
/* Utils */
import appendStyle from '../utils/appendStyle'
import mapPropsToAttrs from '../utils/mapPropsToAttrs'
/* PropTypes */
import PropTypes from 'prop-types'

const propTypes = {
  size: PropTypes.oneOf(['sm', 'normal', 'lg']),
  bordered: PropTypes.bool,
  label: PropTypes.string
}

const defaultProps = {
  size: 'normal',
  bordered: false,
  label: ''
}

// All valid props to be used by appendStyle
const stylingProps = ['size', 'bordered']

export const TextInput = forwardRef((props, ref) => (
  <ThoriumConsumer>
    {(context) => {
      let style = { ...textInputStyle.general, ...context.theme.textInput }
      style = appendStyle(props, stylingProps, style, textInputStyle)

      return (
        <Fragment>
          {props.label && (
            <label form={props.form} htmlFor={props.id}>
              {props.label}
            </label>
          )}
          <input ref={ref} {...mapPropsToAttrs(props, 'input')} style={style} />
        </Fragment>
      )
    }}
  </ThoriumConsumer>
))

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps
export default TextInput
