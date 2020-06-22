import React, { Component, Children, cloneElement } from "react";
import { Block } from "../";
import Link from "./Link";
import Item from "./Item";
import PropTypes from "prop-types";

import { mapPropsToResponsiveSize, mapPropsToAttrs } from "../ThoriumUtils";
const justifyOps = ["start", "end", "center", "around", "between", "evenly"];
const propTypes = {
  justify: PropTypes.oneOf(justifyOps),
  vertical: PropTypes.bool,
};

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.defaultActive || 0,
    };
    this.setActive = (item) => {
      this.setState({ activeItem: item });
    };
  }

  render() {
    let children;
    if (this.props.children.length >= 0) {
      children = Children.map(this.props.children, (child, key) => {
        if (!["NavItem", "NavLink"].includes(child.type.name)) return child;
        else {
          if (this.props.trackActive) {
            const navId = key;
            return cloneElement(child, {
              activeItem: this.state.activeItem,
              navId,
              isActive: this.state.activeItem === navId,
              setActive: () => this.setActive(navId),
              boldActive: this.props.boldActive,
              style: this.props.centerLinks && { textAlign: "center" },
            });
          } else
            return cloneElement(child, {
              style: this.props.centerLinks && { textAlign: "center" },
            });
        }
      });
    }

    return (
      <Block
        {...mapPropsToAttrs(this.props)}
        {...mapPropsToResponsiveSize(this.props)}
        justify={this.props.justify}
        vertical={this.props.vertical}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {children || this.props.children}
      </Block>
    );
  }
}

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
export default Nav;
