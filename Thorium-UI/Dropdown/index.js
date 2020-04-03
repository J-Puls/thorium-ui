import React, { createRef, Component, Children } from "react";
import Button from "../Button";
// Subcomponents
import Menu from "./Menu";
import Item from "./Item";
import Link from "./Link";
import Divider from "./Divider";
import ThoriumContext from "../ThoriumContext";
import { dropdownStyle as ds } from "../Styles";

import PropTypes from "prop-types";
import { cloneElement } from "react";
import { mapPropsToAttrs } from "../ThoriumUtils";

const propTypes = {
  defaultOpen: PropTypes.bool,
  clickable: PropTypes.bool,
  hoverable: PropTypes.bool,
  floating: PropTypes.bool,
  icons: PropTypes.bool,
  variant: PropTypes.string,
  text: PropTypes.string
};

class Dropdown extends Component {
  static contextType = ThoriumContext;
  constructor(props, context) {
    super(props);
    if (!props.defaultOpen) {
      this.initStyle = ds.hidden;
    } else {
      if (!props.floating)
        this.initStyle = {
          ...ds.visible.normal,
          ...context.theme.dropdown.menu
        };
      else
        this.initStyle = {
          ...ds.visible.floating,
          ...context.theme.dropdown.menu
        };
    }
    this.state = {
      visible: this.props.defaultOpen || false,
      menuStyle: this.initStyle,
      menuWidth: 0
    };

    this.handleClick = () => {
      if (this.state.visible) {
        this.setState({ visible: false, menuStyle: ds.hidden });
      } else {
        this.setState({
          visible: true,
          menuStyle: !props.floating
            ? {
                ...ds.visible.normal,
                ...context.theme.dropdown.menu
              }
            : {
                ...ds.visible.floating,
                ...context.theme.dropdown.menu
              }
        });
      }
    };

    this.handleMouseEnter = () => {
      this.setState({
        visible: true,
        menuStyle: !props.floating ? ds.visible.normal : ds.visible.floating
      });
    };
    this.handleMouseLeave = () => {
      this.setState({
        visible: false,
        menuStyle: ds.hidden
      });
    };
    this.menuRef = createRef();
    this.collapse = () => {
      this.setState({ visible: false, menuStyle: ds.hidden });
    };
  }
  componentDidMount() {
    this.setState({ menuWidth: this.menuRef.current.offsetWidth });
  }

  render() {
    const children = Children.map(this.props.children, child => {
      return cloneElement(child, {
        onClick: () => this.collapse()
      });
    });
    return (
      <>
        {this.props.clickable && (
          <div {...mapPropsToAttrs(this.props)}>
            <Button
              widthRef={this.menuRef}
              stretch
              variant={this.props.variant}
              size={this.props.size}
              onClick={() => this.handleClick()}
            >
              {this.props.text}{" "}
              {this.props.icon && this.state.visible && (
                <span style={{ fontWeight: 900 }}>&#8211;</span>
              )}
              {this.props.icon && !this.state.visible && (
                <span style={{ fontWeight: 900 }}>&#43;</span>
              )}
            </Button>
            <Menu
              vertical
              style={{ ...this.state.menuStyle, width: this.state.menuWidth }}
            >
              {!this.props.collapseOnClick && this.props.children}
              {this.props.collapseOnClick && children}
            </Menu>
          </div>
        )}
        {this.props.hoverable && (
          <div
            {...mapPropsToAttrs(this.props)}
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
          >
            <Button
              stretch
              variant={this.props.variant}
              size={this.props.size}
              widthRef={this.menuRef}
            >
              {this.props.text}
            </Button>
            <div>
              <Menu
                vertical
                style={{ ...this.state.menuStyle, width: this.state.menuWidth }}
              >
                {!this.props.collapseOnClick && this.props.children}
                {this.props.collapseOnClick && children}
              </Menu>
            </div>
          </div>
        )}
      </>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
Dropdown.Link = Link;
Dropdown.Divider = Divider;
export default Dropdown;
