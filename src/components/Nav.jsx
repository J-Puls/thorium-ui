/* React */
import React, { Component, cloneElement, useEffect, useState } from "react";
/* Thorium-UI */
import { Block } from "./Block";
/* Sub-components */
import { NavLink as Link } from "./NavLink";
import { NavItem as Item } from "./NavItem";
/* NavContext */
import { NavProvider } from "../context/NavContext";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { justify, variants } from "../utils/propValidation";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  centerLinks: PropTypes.bool,
  defaultActive: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justify: PropTypes.oneOf(justify),
  onActiveItemChange: PropTypes.func,
  trackActive: PropTypes.bool,
  type: PropTypes.oneOf(["normal", "tabs", "pills"]),
  variant: PropTypes.oneOf(variants),
  vertical: PropTypes.bool
};

const defaultProps = {
  centerLinks: false,
  defaultActive: 0,
  justify: "start",
  trackActive: false,
  type: "normal",
  variant: "link",
  vertical: false
};

export class Nav extends Component {
  constructor(props, ref) {
    super(props);
    this.ref = ref;
    this.state = {
      activeItem: props.defaultActive
    };
    this.setActiveItem = (item) => {
      this.setState({ activeItem: item }, () => {
        props.onActiveItemChange && props.onActiveItemChange(item);
      });
    };
    this.getActiveItem = () => this.state.activeItem;
  }

  render() {
    let style = { ...this.props.style };
    this.props.centerLinks && (style.textAlign = "center");

    const genericProps = {
      ...mapPropsToAttrs(this.props),
      ...mapPropsToResponsiveSize(this.props),
      className: this.props.className
        ? this.props.className
        : this.props.withMotion
        ? "th-motion-nav"
        : "th-nav",
      "data-testid": this.props["data-testid"]
        ? this.props["data-testid"]
        : this.props.withMotion
        ? "th-motion-nav"
        : "th-nav",
      justify: this.props.justify,
      vertical: this.props.vertical,
      style
    };

    const navContext = {
      activeItem: this.state.activeItem,
      currentURL: window.location.pathname,
      setActiveItem: this.setActiveItem,
      trackActive: this.props.trackActive,
      type: this.props.type,
      variant: this.props.variant
    };
    return (
      <NavProvider value={navContext}>
        {this.props.withMotion && (
          <Block
            {...genericProps}
            withMotion={true}
            {...mapPropsToMotion(props)}
          >
            {this.props.children}
          </Block>
        )}
        {!this.props.withMotion && (
          <Block {...genericProps}>{this.props.children}</Block>
        )}
      </NavProvider>
    );
  }
}

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
