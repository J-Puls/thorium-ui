import React, { Component } from "react";
import { ThoriumConsumer } from "../../ThoriumContext";
import { dropdownDividerStyle } from "../../Styles";
import PropTypes from "prop-types";
import { mapPropsToAttrs } from "../../ThoriumUtils";

const propTypes = {
  label: PropTypes.string
};

class DropdownDivider extends Component {
  render() {
    return (
      <ThoriumConsumer>
        {context => {
          return (
            <div
              {...mapPropsToAttrs(this.props)}
              style={{
                ...dropdownDividerStyle,
                ...context.theme.dropdown.divider,
                ...this.props.style
              }}
            >
              {this.props.label}
            </div>
          );
        }}
      </ThoriumConsumer>
    );
  }
}
DropdownDivider.propTypes = propTypes;
export default DropdownDivider;
