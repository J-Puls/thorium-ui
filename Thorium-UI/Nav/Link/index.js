import React, { Component } from "react";
import ThoriumContext from "../../ThoriumContext";
import { navLinkStyle } from "../../Styles";
import { mapPropsToAttrs } from "../../ThoriumUtils";

export class NavLink extends Component {
  static contextType = ThoriumContext;
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.handleClick = (e) => {
      this.props.setActive && !this.state.isActive && this.props.setActive();
      if (this.props.onClick) {
        e.preventDefault();
        this.props.onClick();
      }
    };
    this.handleMouseEnter = () => this.setState({ isHovered: true });
    this.handleMouseLeave = () => this.setState({ isHovered: false });
    if (
      this.props.activeByURL &&
      this.props.urlKey === window.location.pathname
    ) {
      this.props.setActive();
    }
  }
  render() {
    let style = {};
    !this.state.isHovered &&
      !this.props.isActive &&
      (style = this.context.theme.nav.link.normal);
    this.state.isHovered &&
      !this.props.noHover &&
      (style = this.context.theme.nav.link.hover);
    this.props.isActive && (style = this.context.theme.nav.link.active);

    if (this.context.hasRouterEnabled && !this.props.asAnchor) {
      const Link = require("react-router-dom").Link;
      return (
        <Link
          {...mapPropsToAttrs(this.props, "anchor")}
          onClick={(e) => this.handleClick(e)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{ ...navLinkStyle, ...style, ...this.props.style }}
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
          style={{ ...navLinkStyle, ...style, ...this.props.style }}
        >
          {this.props.children}
        </a>
      );
    }
  }
}

export default NavLink;
