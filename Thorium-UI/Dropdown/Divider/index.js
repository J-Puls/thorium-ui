/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../../";
/* Style */
import { dropdownDividerStyle as style } from "../../Styles";
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
      return (
        <div
          {...mapPropsToAttrs(props)}
          style={{
            ...style,
            ...context.theme.dropdown.divider,
            ...props.style,
          }}
        >
          {props.label && <span>{props.label}</span>}
        </div>
      );
    }}
  </ThoriumConsumer>
);

DropdownDivider.propTypes = propTypes;
export default DropdownDivider;
