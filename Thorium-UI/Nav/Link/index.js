import React, { Component } from "react";
import ThoriumContext from "../../ThoriumContext";
import { linkStyle } from "../../Styles";
import { mapPropsToAttrs } from "../../ThoriumUtils";

class NavLink extends Component {
  static contextType = ThoriumContext;
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.handleClick = (e) => {
      if (this.props.onClick) {
        e.preventDefault();
        this.props.onClick();
      }
    };
    this.handleMouseEnter = () => this.setState({ isHovered: true });
    this.handleMouseLeave = () => this.setState({ isHovered: false });
  }
  render() {
    let style;
    !this.state.isHovered
      ? (style = this.context.theme.nav.link.normal)
      : (style = this.context.theme.nav.link.hover);
    if (this.context.hasRouterEnabled && !this.props.asAnchor) {
      const Link = require("react-router-dom").Link;

      return (
        <Link
          {...mapPropsToAttrs(this.props, "anchor")}
          style={{ ...linkStyle, ...style }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={(e) => this.handleClick(e)}
          to={this.props.to}
        >
          {this.props.children}
        </Link>
      );
    } else if (this.props.asAnchor || !this.context.hasRouterEnabled) {
      return (
        <a
          {...mapPropsToAttrs(this.props, "anchor")}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{ ...linkStyle, ...style }}
        >
          {this.props.children}
        </a>
      );
    }
  }
}

export default NavLink;
