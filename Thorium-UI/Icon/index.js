/* React */
import React from "react";

/**
 * A wrapper to easily create SVG icons
 */
export const Icon = (props) => (
  <svg width={props.width} height={props.height}>
    <use xlinkHref={props.src} fill={props.fill} />
  </svg>
);

export default Icon;
