import React, { Component } from "react";
import Button from "../../Button";

class Submit extends Component {
  render() {
    return (
      <Button
        type="submit"
        stretch={this.props.stretch}
        animated={this.props.animated}
        size={this.props.size}
        variant={this.props.size}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default Submit;
