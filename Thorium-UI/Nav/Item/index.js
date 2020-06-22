import React, { Component } from "react";
import { mapPropsToAttrs } from "../../ThoriumUtils";
import { navItemStyle as style } from "../../Styles/nav/navItem";
import { ThoriumConsumer } from "../../ThoriumContext";

export class NavItem extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      activeColor: null,
      isActive: this.props.isActive,
      isHovered: false,
    };
    this.activeColor = null;
    this.handleClick = () => {
      this.props.setActive && !this.state.isActive && this.props.setActive();
    };
  }

  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          let renderStyle = {};
          const activeColor = context.theme.nav.item.active.backgroundColor;
          if (this.state.isActive) {
            renderStyle = {
              ...style,
              backgroundColor: activeColor,
              fontWeight: 900,
            };
          } else if (this.state.isHovered) {
            renderStyle = { ...style, backgroundColor: activeColor };
          } else renderStyle = style;
          return (
            <div
              {...mapPropsToAttrs(this.props)}
              style={{ ...renderStyle, ...this.props.style }}
              onClick={() => this.handleClick()}
              // onMouseEnter={() => this.handleMouseEnter()}
              // onMouseLeave={() => this.handleMouseLeave()}
            >
              {this.props.children}
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}

export default NavItem;
