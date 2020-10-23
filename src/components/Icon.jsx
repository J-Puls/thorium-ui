/* React */
import React from "react";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  width: PropTypes.number.required,
  height: PropTypes.number.required,
  xlinkHref: PropTypes.string.required,
  fill: PropTypes.string.required
};

/**
 * A wrapper to easily create SVG icons
 */
export const Icon = (props) => (
  <svg
    {...mapPropsToAttrs(props)}
    className="th-icon"
    data-testid="th-icon"
    width={props.width}
    height={props.height}
    style={props.style}
  >
    <use xlinkHref={props.src} fill={props.fill} />
  </svg>
);

Icon.propTypes = propTypes;
export default Icon;
