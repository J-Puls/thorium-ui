/* React */
import React, { Component } from "react";
/* Context */
import { ThoriumConsumer } from "../ThoriumContext";
/* Styling */
import { blockStyle } from "../Styles";
/* Utils */
import { mapPropsToAttrs, validProps, updateFromProps } from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  all: PropTypes.oneOf(validProps.sizes),
  bg: PropTypes.string,
  justify: PropTypes.oneOf(validProps.justify),
  lg: PropTypes.oneOf(validProps.sizes),
  md: PropTypes.oneOf(validProps.sizes),
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  sm: PropTypes.oneOf(validProps.sizes),
  transucent: PropTypes.bool,
  vertical: PropTypes.bool,
  xl: PropTypes.oneOf(validProps.sizes),
  xs: PropTypes.oneOf(validProps.sizes),
};

const defaultProps = {
  all: null,
  bg: null,
  justify: null,
  lg: null,
  md: null,
  round: false,
  rounded: false,
  sm: null,
  transucent: false,
  vertical: false,
  xl: null,
  xs: null,
};

export class Block extends Component {
  constructor(props) {
    super(props);
    // Pass down mouse events if present
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
              data-testid="block"
              {...mapPropsToAttrs(this.props)}
              style={{
                ...blockStyle,
                ...updateFromProps(
                  "block",
                  this.props,
                  context.viewportSizeName
                ),
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
Block.defaultProps = defaultProps;
Block.propTypes = propTypes;
export default Block;
