/* React */
import React, { Component } from 'react';
/* Thorium-UI */
import { Button } from './Button';
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
  targetID: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(validProps.variants)
};

const defaultProps = {
  animated: false,
  overrideFill: false,
  size: 'normal',
  stretch: false,
  variant: 'link'
};

/**
 *  A pre-styled button to be used as the trigger for a mobile dropdown menu
 */
export class BurgerButton extends Component {
  constructor(props) {
    super();
    this.state = {
      target: props.targetID,
      active: false
    };

    this.toggle = () => this.setState({ active: !this.state.active });
    this.handleClick = () => {
      const slave = document.getElementById(this.state.target);
      slave.click();
      this.toggle();
    };
  }

  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          const iconFill =
            this.props.iconFill ||
            context.theme.button[this.props.variant].normal.color;
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
              {...mapPropsToAttrs(this.props, 'button')}
              id={this.props.id}
              onClick={this.handleClick}
              size={this.props.size}
              stretch={this.props.stretch}
              style={this.props.style}
              variant={this.props.variant}
              withMotion={this.props.withMotion}
              {...mapPropsToMotion(this.props)}
              ref={this.ref}
            >
              {/* Display a burger icon if inactive, or an X icon if active */}
              {!this.state.active && burgerIcon}
              {this.state.active && closeIcon}
            </Button>
          );
        }}
      </ThoriumConsumer>
    );
  }
}

BurgerButton.defaultProps = defaultProps;
BurgerButton.propTypes = propTypes;
export default BurgerButton;
