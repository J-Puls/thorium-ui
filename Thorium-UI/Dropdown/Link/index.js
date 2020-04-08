import React, { Component } from "react";
import ThoriumContext from "../../ThoriumContext";
import { dropdownLinkStyle } from "../../Styles";
import { mapPropsToAttrs } from "../../ThoriumUtils";

class DropdownLink extends Component {
  static contextType = ThoriumContext;
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.handleClick = () => {
      this.props.onClick && this.props.onClick();
    };
    this.handleMouseEnter = () => {
      this.setState({ isHovered: true });
    };
    this.handleMouseLeave = () => {
      this.setState({ isHovered: false });
    };
  }
  render() {
    if (this.context.hasRouterEnabled) {
      const Link = require("react-router-dom").Link;
      let style;
      !this.state.isHovered
        ? (style = this.context.theme.dropdown.link.normal)
        : (style = this.context.theme.dropdown.link.hover);
      return (
        <Link
          {...mapPropsToAttrs(this.props, "anchor")}
          style={{
            ...dropdownLinkStyle,
            ...style,
          }}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          to={this.props.to}
        >
          {this.props.children}
        </Link>
      );
    } else {
      return (
        <a
          {...mapPropsToAttrs(this.props, "anchor")}
          href={this.props.href || this.props.to}
          rel={this.props.rel}
          style={{
            ...dropdownLinkStyle,
          }}
        >
          {this.props.children}
        </a>
      );
    }
  }
}

export default DropdownLink;
