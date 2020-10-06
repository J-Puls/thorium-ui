/* React */
import React from "react";
/* Style */
import { pictureStyle } from "../styles/pictureStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import appendStyle from "../utils/appendStyle";
/* PropTypes */
import PropTypes from "prop-types";

const validRatios = ["original", "1x1", "3x4", "16x9"];
const propTypes = {
  fluid: PropTypes.oneOf(["full", "half", null]),
  ratio: PropTypes.oneOf(validRatios),
  src: PropTypes.string.isRequired
};

const defaultProps = {
  fluid: "full",
  round: false,
  rounded: false,
  ratio: "original"
};

// All valid props to be used by appendStyle
const stylingProps = ["fluid", "round", "rounded", "ratio"];

export const Picture = (props) => {
  let width, height, pic;
  let style = { ...pictureStyle.general };
  if (props.ratio) {
    pic = new Image();
    pic.src = props.src;
    width = pic.naturalWidth;
    height = pic.naturalHeight;
    if (props.ratio === "1x1") {
      style.height = height;
      style.width = width;
    }
    props.ratio === "16x9" && (style.width = height * 1.77);
  }
  style = appendStyle(props, stylingProps, style, pictureStyle);

  props.style && (style = { ...style, ...props.style });

  return (
    <picture
      {...mapPropsToAttrs(props, "img")}
      alt={props.alt}
      data-testid="image"
      style={style}
      ref={(el) => (pic = el)}
    >
      {props.children}
    </picture>
  );
};

Picture.propTypes = propTypes;
Picture.defaultProps = defaultProps;
export default Picture;
