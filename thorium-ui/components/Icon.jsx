/* React */
import React from "react";
import { mapPropsToAttrs } from "../utils";

/**
 * A wrapper to easily create SVG icons
 */
export const Icon = (props) => (
  <svg
    {...mapPropsToAttrs(props)}
    width={props.width}
    height={props.height}
    style={props.style}
  >
    <use xlinkHref={props.src} fill={props.fill} />
  </svg>
);

export default Icon;
