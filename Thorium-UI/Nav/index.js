import React, { Component, Children, cloneElement } from "react";
import { Block } from "../";
import Link from "./Link";
import Item from "./Item";
import PropTypes from "prop-types";
import { validProps } from "../ThoriumUtils";
import { mapPropsToResponsiveSize, mapPropsToAttrs } from "../ThoriumUtils";

const propTypes = {
  justify: PropTypes.oneOf(validProps.justify),
  vertical: PropTypes.bool,
  trackActive: PropTypes.bool,
  centerLinks: PropTypes.bool,
  defaultActive: PropTypes.number,
};

const defaultProps = {
  justify: "start",
  vertical: false,
  trackActive: false,
  centerLinks: false,
  defaultActive: 0,
};

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.defaultActive,
    };
    this.setActive = (item) => {
      this.setState({ activeItem: item });
    };

    this.mapChildren = () => {
      let children;

      if (this.props.children.length >= 0) {
        children = Children.map(this.props.children, (child, key) => {
          if (child.type.name !== "NavLink") return child;
          else {
            if (this.props.trackActive) {
              const urlKey = child.props.to || child.props.href || null;
              const navId = key;

              return cloneElement(child, {
                activeItem: this.state.activeItem,
                activeByURL: this.props.activeByURL,
                navId,
                urlKey,
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
      return children;
    };
  }

  render() {
    let children = this.mapChildren();
    return (
      <Block
        {...mapPropsToAttrs(this.props)}
        {...mapPropsToResponsiveSize(this.props)}
        justify={this.props.justify}
        vertical={this.props.vertical}
        style={{ ...this.props.style }}
      >
        {children || this.props.children}
      </Block>
    );
  }
}

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
