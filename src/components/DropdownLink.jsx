/* React */
import React from "react";
/* ThoriumContext */
import DropdownItem from "./DropdownItem";
/* Style */
import { dropdownLinkStyle as ddlStyle } from "../styles/dropdownLinkStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";

/**
 * A stylized Link component
 */
export const DropdownLink = (props) => {
  let style = { ...ddlStyle.general, color: "inherit", ...props.style };

  const genericProps = {
    ...mapPropsToAttrs(props, "anchor"),
    className: "th-dropdown-link",
    "data-testid": "th-dropdown-link",
    style
  };

  return (
    <DropdownItem navKey={props.navKey} noHover={props.noHover}>
      {!props.asAnchor && ReactRouterDom && (
        <ReactRouterDom.Link {...genericProps} to={props.to}>
          {props.children}
        </ReactRouterDom.Link>
      )}
      {(props.asAnchor || !ReactRouterDom) && (
        <a {...genericProps}>{props.children}</a>
      )}
    </DropdownItem>
  );
};

export default DropdownLink;
