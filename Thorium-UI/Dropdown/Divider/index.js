import React, { Component } from "react";
import { ThoriumConsumer } from "../../ThoriumContext";
import { dropdownDividerStyle } from "../../Styles";
import PropTypes from "prop-types";
import { mapPropsToAttrs } from "../../ThoriumUtils";

const propTypes = {
  label: PropTypes.string,
};

export class DropdownDivider extends Component {
  render() {
    return (
      <ThoriumConsumer>
        {(context) => {
          const style = context.theme.dropdown.divider;
          return (
            <div
              {...mapPropsToAttrs(this.props)}
              style={{
                ...dropdownDividerStyle,
                ...style.body,
                ...this.props.style,
              }}
            >
              {this.props.label && (
                <span style={style.label}>{this.props.label}</span>
              )}
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}
DropdownDivider.propTypes = propTypes;
export default DropdownDivider;
