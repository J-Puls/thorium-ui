import React, { Component } from "react";
import { imageStyle } from "../Styles";
import { mapPropsToAttrs, appendStyle } from "../ThoriumUtils";
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
const stylingProps = ["round", "rounded", "fluid", "fluidHalf"];

export class Image extends Component {
  render() {
    let style = { ...imageStyle.general };
    style = appendStyle(this.props, stylingProps, style, imageStyle);
    this.props.style && (style = { ...style, ...this.props.style });

    return (
      <img
        {...mapPropsToAttrs(this.props, "img")}
        alt={this.props.alt}
        data-testid="image"
        style={style}
      />
    );
  }
}
Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
export default Image;
