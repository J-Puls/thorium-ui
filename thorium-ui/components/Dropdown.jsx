/* React */
import React, { Children, Component, cloneElement } from "react";
/* Subcomponents */
import { DropdownDivider as Divider } from "./DropdownDivider";
import { DropdownItem as Item } from "./DropdownItem";
import { DropdownLink as Link } from "./DropdownLink";
import { DropdownMenu as Menu } from "./DropdownMenu";
import { DropdownTrigger as Trigger } from "./DropdownTrigger";
import { DropdownContainer as Container } from "./DropdownContainer";
/* Utils */
import { mapPropsToAttrs, validProps } from "../utils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  triggerType: PropTypes.oneOf(["click", "hover"]),
  defaultState: PropTypes.oneOf(["open", "closed"]),
  icons: PropTypes.bool,
  remoteTrigger: PropTypes.bool,
  text: PropTypes.string,
  variant: PropTypes.oneOf(validProps.variants),
  size: PropTypes.oneOf(["sm", "normal", "lg"]),
  displayType: PropTypes.oneOf(["block", "float"]),
  targetID: PropTypes.string,
};

const defaultProps = {
  triggerType: "click",
  targetID: null,
  defaultState: "closed",
  icons: false,
  remoteTrigger: false,
  text: null,
  variant: "primary",
  size: "normal",
  displayType: "block",
};

/**
 * A collapsable menu with a customizable trigger.
 */
export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.defaultState === "open",
      menuTop: 0,
    };
    this.toggle = () => {
      this.props.triggerType === "click" &&
        this.setState({ active: !this.state.active });
    };
    this.collapse = () => {
      this.props.collapseOnClick && this.props.toggleBurger();
      this.setState({ active: false });
    };
    this.handleMouseEnter = () => {
      this.props.triggerType === "hover" && this.setState({ active: true });
    };
    this.handleMouseLeave = () => {
      this.props.triggerType === "hover" && this.setState({ active: false });
    };
  }
  componentDidMount() {
    this.setState({ menuTop: this.trigger.offsetHeight });
  }
  render() {
    let children;
    if (this.props.collapseOnClick) {
      children = Children.map(this.props.children, (child) => {
        return cloneElement(child, {
          onClick: () => this.collapse(),
        });
      });
    }
    let style;
    this.props.remoteTrigger && (style = { display: "none" });

    return (
      <Container
        {...mapPropsToAttrs(this.props)}
        style={{ marginLeft: 0, marginRight: 0, ...this.props.style }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Trigger
          ref={(el) => (this.trigger = el)}
          variant={this.props.variant}
          icons={this.props.icons}
          active={this.state.active}
          onClick={this.toggle}
          text={this.props.text}
          size={this.props.size}
          id={this.props.targetID || this.props.id}
          style={style}
        />
        <Menu
          displayType={this.props.displayType}
          active={this.state.active}
          height={this.props.height}
          top={this.state.menuTop}
          scrollable={this.props.scrollable}
        >
          {children || this.props.children}
        </Menu>
      </Container>
    );
  }
}

Dropdown.Divider = Divider;
Dropdown.Item = Item;
Dropdown.Link = Link;
Dropdown.Menu = Menu;
Dropdown.Trigger = Trigger;
Dropdown.Container = Container;
Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;
export default Dropdown;
