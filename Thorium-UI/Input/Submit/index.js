import React, { Component } from "react";
import { Button } from "../../";

export class Submit extends Component {
  render() {
    return (
      <Button
        data-testid="submit"
        animated={this.props.animated}
        size={this.props.size}
        stretch={this.props.stretch}
        type="submit"
        variant={this.props.size}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default Submit;
