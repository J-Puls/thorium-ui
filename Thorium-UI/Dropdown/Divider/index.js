/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../../";
/* Style */
import { dropdownDividerStyle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string,
};

/**
 * A styalized horizontal divider used to separate different sections in the Menu
 */
export const DropdownDivider = (props) => (
  <ThoriumConsumer>
    {(context) => {
      const style = context.theme.dropdown.divider;
      return (
        <div
          {...mapPropsToAttrs(props)}
          style={{
            ...dropdownDividerStyle,
            ...style.body,
            ...props.style,
          }}
        >
          {props.label && <span style={style.label}>{props.label}</span>}
        </div>
      );
    }}
  </ThoriumConsumer>
);

DropdownDivider.propTypes = propTypes;
export default DropdownDivider;
