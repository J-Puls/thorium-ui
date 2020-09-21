/* React */
import React from 'react';
/* ThoriumContext */
import DropdownItem from './DropdownItem';
/* Style */
import { dropdownLinkStyle as ddlStyle } from '../styles/dropdownLinkStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';

/**
 * A stylized Link component
 */
export const DropdownLink = (props) => {
  let style = { ...ddlStyle.general, color: 'inherit', ...props.style };

  return (
    <DropdownItem navKey={props.navKey} noHover={props.noHover}>
      {!props.asAnchor && (
        <ReactRouterDom.Link
          {...mapPropsToAttrs(props, 'anchor')}
          to={props.to}
          style={style}
        >
          {props.children}
        </ReactRouterDom.Link>
      )}
      {props.asAnchor && (
        <a {...mapPropsToAttrs(props, 'anchor')} style={style}>
          {props.children}
        </a>
      )}
    </DropdownItem>
  );
};

export default DropdownLink;
