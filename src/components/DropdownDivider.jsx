/* React */
import React from 'react';
/* Style */
import { dropdownDividerStyle as dds } from '../styles/dropdownDividerStyle';
/* Utils */
// import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { useTheme } from '../utils/hooks/useTheme';
/* PropTypes */
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string
};
const defaultProps = {
  label: ''
};

/**
 * A stylized horizontal divider used to separate different sections in the Menu
 */
export const DropdownDivider = (props) => {
  const theme = useTheme();

  return (
    <div style={{ ...dds, ...theme.dropdown.divider, ...props.style }}>
      {props.label && <span>{props.label}</span>}
    </div>
  );
};

DropdownDivider.propTypes = propTypes;
DropdownDivider.defaultProps = defaultProps;
export default DropdownDivider;
