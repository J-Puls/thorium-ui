import React from "react";
import Block from "../Block";
import Link from "./Link";
import Item from "./Item";
import PropTypes from "prop-types";
import { Component, Children, cloneElement } from "react";
import { mapPropsToResponsiveSize, mapPropsToAttrs } from "../ThoriumUtils";
const justifyOps = ["start", "end", "center", "around", "between", "evenly"];
const propTypes = {
  justify: PropTypes.oneOf(justifyOps),
  vertical: PropTypes.bool,
};

class Nav extends Component {
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
      children = Children.map(this.props.children, (child) => {
        if (child.type.name !== "NavItem") return child;
        else {
          const navId = this.props.children.indexOf(child);
          return cloneElement(child, {
            activeItem: this.state.activeItem,
            setActive: () => this.setActive(navId),
            navId,
            boldActive: this.props.boldActive,
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
      >
        {children && children}
        {!children && this.props.children}
      </Block>
    );
  }
}

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
export default Nav;
