/* React */
import React, { Component } from "react";
/* Thorium components */
import { Button, Icon } from "../";
/* Context */
import { ThoriumConsumer } from "../ThoriumContext";
/* Icons */
import Icons from "../icons/icons.svg";
/* Utils */
import { validProps } from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  animated: PropTypes.bool,
  iconFill: PropTypes.string,
  overrideFill: PropTypes.bool,
  size: PropTypes.string,
  stretch: PropTypes.bool,
  targetID: PropTypes.string,
  variant: PropTypes.oneOf(validProps.variants),
};

const defaultProps = {
  animated: false,
  iconFill: "",
  overrideFill: false,
  size: "normal",
  stretch: false,
  targetID: "",
  variant: "link",
};

export class BurgerButton extends Component {
  constructor(props, ref) {
    super(props);
    this.state = {
      target: this.props.targetID,
      active: false,
    };
    this.toggle = () => {
      this.setState({ active: !this.state.active });
    };
    this.handleClick = () => {
      const target = document.querySelector(`#${this.state.target}`);
      target.click();
      this.toggle();
    };
    this.ref = ref;
  }

  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          const iconFill =
            this.props.iconFill ||
            context.theme.button.normal[this.props.variant].color;

          return (
            <Button
              id={this.props.id}
              onClick={() => this.handleClick()}
              size={this.props.size}
              stretch={this.props.stretch}
              style={this.props.style}
              variant={this.props.variant}
            >
              {/* Display a burger icon if inactive, or an X icon if active */}
              {!this.state.active && (
                <Icon
                  width={20}
                  height={20}
                  src={`${Icons}#burger-icon`}
                  fill={iconFill}
                />
              )}
              {this.state.active && (
                <Icon
                  width={20}
                  height={20}
                  src={`${Icons}#close-icon`}
                  fill={iconFill}
                />
              )}
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
