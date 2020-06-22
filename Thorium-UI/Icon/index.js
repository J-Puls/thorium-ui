import React from "react";

export const Icon = (props) => (
  <svg width={props.width} height={props.height}>
    <use xlinkHref={props.src} fill={props.fill} />
  </svg>
);

export default Icon;
