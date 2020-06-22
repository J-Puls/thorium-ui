import React from "react";
import Layer from "../Layer";

export class Footer extends Layer {
  render() {
    return <Layer {...this.props}>{this.props.children}</Layer>;
  }
}

export default Footer;
