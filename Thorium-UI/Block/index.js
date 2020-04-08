import React, { Component } from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { blockStyle } from "../Styles";
import { updateFromProps } from "./utils";
import PropTypes from "prop-types";
import { mapPropsToAttrs } from "../ThoriumUtils";
const validJustify = ["start", "end", "center", "between", "around", "evenly"];
const validSizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const propTypes = {
  all: PropTypes.oneOf(validSizes),
  xs: PropTypes.oneOf(validSizes),
  sm: PropTypes.oneOf(validSizes),
  md: PropTypes.oneOf(validSizes),
  lg: PropTypes.oneOf(validSizes),
  xl: PropTypes.oneOf(validSizes),
  justify: PropTypes.oneOf(validJustify),
  vertical: PropTypes.bool,
  rounded: PropTypes.bool,
  round: PropTypes.bool,
  bg: PropTypes.string,
  transucent: PropTypes.bool,
};

class Block extends Component {
  constructor(props) {
    super(props);
    this.handleClick = () => {
      this.props.onClick && this.props.onClick();
    };
    this.handleMouseEnter = () => {
      this.props.onMouseEnter && this.props.onMouseEnter();
    };
    this.onMouseLeave = () => {
      this.props.onMouseLeave && this.props.onMouseLeave();
    };
  }
  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          return (
            <div
              {...mapPropsToAttrs(this.props)}
              style={{
                ...blockStyle,
                ...updateFromProps(this.props, context.viewportSizeName),
                ...this.props.style,
              }}
            >
              {this.props.children}
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}

Block.propTypes = propTypes;
export default Block;
