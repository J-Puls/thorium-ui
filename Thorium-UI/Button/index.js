import React, { Component } from "react";
import ThoriumContext from "../ThoriumContext";
import { buttonStyle } from "../Styles";
import PropTypes from "prop-types";
import { mapPropsToAttrs } from "../ThoriumUtils";

const propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.string,
  stretch: PropTypes.bool,
  variant: PropTypes.string
};

class Button extends Component {
  static contextType = ThoriumContext;
  constructor(props) {
    super(props);
    this.ref = this.props.widthRef;
    this.state = { isHovered: false, isClicked: false };

    this.handleMouseDown = () => {
      this.setState({ isClicked: true });
      this.props.onMouseDown && this.props.onMouseDown();
    };
    this.handleMouseUp = () => {
      this.setState({ isClicked: false });
      this.props.onMouseUp && this.props.onMouseUp();
    };
    this.handleClick = () => this.props.onClick && this.props.onClick();
    this.handleMouseEnter = () => {
      this.setState({ isHovered: true });
      this.props.onMouseEnter && this.props.onMouseEnter();
    };
    this.handleMouseLeave = () => {
      this.setState({ isHovered: false, isClicked: false });
      this.props.onMouseLeave && this.props.onMouseLeave();
    };
  }

  render() {
    let style;
    if (!this.state.isHovered) {
      style =
        this.context.theme.button.normal[this.props.variant] ||
        this.context.theme.button.normal.primary;
    } else {
      style =
        this.context.theme.button.hover[this.props.variant] ||
        this.context.theme.button.hover.primary;
    }

    if (this.props.animated) {
      if (this.state.isClicked && !this.state.stretch) {
        style = { ...style, ...buttonStyle.animate.normal };
      } else if (this.state.isClicked && this.state.stretch) {
        style = { ...style, ...buttonStyle.animate.stretch };
      }
    }

    let renderStyle = {
      ...buttonStyle.general,
      ...(buttonStyle[this.props.size] || buttonStyle.default),
      ...style
    };
    this.props.stretch &&
      (renderStyle = { ...renderStyle, ...buttonStyle.stretch });
    return (
      <button
        {...mapPropsToAttrs(this.props, "button")}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        ref={this.ref}
        style={{ ...renderStyle, ...this.props.style }}
      >
        {this.props.children}
      </button>
    );
  }
}
Button.propTypes = propTypes;
export default Button;
