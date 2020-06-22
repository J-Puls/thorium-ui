import React, { Component, Children, cloneElement } from "react";

export class TableBody extends Component {
  render() {
    let children;
    if (this.props.children.length !== 0) {
      children = Children.map(this.props.children, (child) => {
        return cloneElement(child, {
          body: true,
        });
      });
    }
    return <tbody>{children}</tbody>;
  }
}

export default TableBody;
