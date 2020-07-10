/* React */
import React from "react";
/* Style */
import { imageStyle } from "../Styles";
/* Utils */
import { mapPropsToAttrs, appendStyle } from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const validRatios = ["original"];
const propTypes = {
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  fluid: PropTypes.bool,
  fluidHalf: PropTypes.bool,
  ratio: PropTypes.oneOf(validRatios),
  src: PropTypes.string.isRequired,
};

const defaultProps = {
  round: false,
  rounded: false,
  fluid: false,
  fluidHald: false,
  ratio: "original",
};

// All valid props to be used by appendStyle
const stylingProps = ["round", "rounded", "fluid", "fluidHalf"];

export const Image = (props) => {
  let style = { ...imageStyle.general };
  style = appendStyle(props, stylingProps, style, imageStyle);
  props.style && (style = { ...style, ...props.style });

  return (
    <img
      {...mapPropsToAttrs(props, "img")}
      alt={props.alt}
      data-testid="image"
      style={style}
    />
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
export default Image;
