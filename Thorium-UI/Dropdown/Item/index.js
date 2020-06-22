import React, { Component } from "react";
import { Block } from "../../";
import { ThoriumConsumer } from "../../ThoriumContext";
import { dropdownItemStyle } from "../../Styles";

import { mapPropsToAttrs, mapPropsToResponsiveSize } from "../../ThoriumUtils";

export class DropdownItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isHoverd: false };

    this.handleClick = () => this.props.onClick && this.props.onClick();
    this.handleMouseEnter = () => this.setState({ isHoverd: true });
    this.handleMouseLeave = () => this.setState({ isHoverd: false });
  }
  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          let style;
          !this.state.isHovered
            ? (style = context.theme.dropdown.item.normal)
            : (style = context.theme.dropdown.item.hover);
          return (
            <Block
              {...mapPropsToAttrs(this.props)}
              {...mapPropsToResponsiveSize(this.props)}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              style={{ ...dropdownItemStyle, ...style, ...this.props.style }}
            >
              {this.props.children}
            </Block>
          );
        }}
      </ThoriumConsumer>
    );
  }
}
export default DropdownItem;
