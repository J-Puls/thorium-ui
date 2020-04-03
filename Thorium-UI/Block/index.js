import React, { Component } from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { blockStyle } from "../Styles";
import { updateFromProps } from "./utils";
import PropTypes from "prop-types";
import { mapPropsToAttrs } from "../ThoriumUtils";

const propTypes = {
  all: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  justify: PropTypes.string,
  vertical: PropTypes.bool,
  rounded: PropTypes.bool,
  round: PropTypes.bool,
  bg: PropTypes.string,
  transucent: PropTypes.bool
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
        {context => {
          return (
            <div
              {...mapPropsToAttrs(this.props)}
              style={{
                ...blockStyle,
                ...updateFromProps(this.props, context.viewportSizeName),
                ...this.props.style
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
