/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { dropdownDividerStyle as dds } from "../styles/dropdownDividerStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
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
            ...dds,
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
