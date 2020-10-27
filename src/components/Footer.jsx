import React from "react";
import { Layer } from "./Layer";

export const Footer = (props) => (
  <Layer className="th-footer" data-testid="th-footer" {...props}>
    {props.children}
  </Layer>
);

export default Footer;
