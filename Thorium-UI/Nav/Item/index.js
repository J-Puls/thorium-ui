import React from "react";
import { mapPropsToAttrs } from "../../ThoriumUtils";
import { navItemStyle as style } from "../../Styles/nav/navItem";
import { Component } from "react";

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = () => {
      this.props.setActive && this.props.setActive(this.props.navId);
    };
    this.weight = null;
  }

  render() {
    if (this.props.boldActive && this.props.navId === this.props.activeItem) {
      this.weight = 900;
    } else {
      this.weight = 400;
    }
    return (
      <div
        {...mapPropsToAttrs(this.props)}
        style={{ ...style, fontWeight: this.weight, ...this.props.style }}
        onClick={() => this.handleClick()}
      >
        {this.props.children}
      </div>
    );
  }
}

export default NavItem;
