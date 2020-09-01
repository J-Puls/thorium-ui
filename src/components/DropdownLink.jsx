/* React */
import React from "react";
/* ThoriumContext */
import DropdownItem from "./DropdownItem";
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { dropdownLinkStyle } from "../styles/dropdownLinkStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";

/**
 * A styalized Link component
 */
export const DropdownLink = (props) => {
  let link;
  const handleClick = (e) => {
    link.click();
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <ThoriumConsumer>
      {(context) => {
        let Link;
        if (!props.asAnchor) Link = require("react-router-dom").Link;
        let style = {
          ...dropdownLinkStyle.general,
          color: "inherit",
        };

        return (
          <DropdownItem onClick={(e) => handleClick(e)} navKey={props.navKey}>
            {context.hasRouterEnabled && !props.asAnchor && (
              <Link
                {...mapPropsToAttrs(props, "anchor")}
                to={props.to}
                style={{ ...style }}
                ref={(el) => (link = el)}
              >
                {props.children}
              </Link>
            )}
            {(props.asAnchor || !context.hasRouterEnabled) && (
              <a
                {...mapPropsToAttrs(props, "anchor")}
                style={{ ...style }}
                ref={(el) => (link = el)}
              >
                {props.children}
              </a>
            )}
          </DropdownItem>
        );
      }}
    </ThoriumConsumer>
  );
};

export default DropdownLink;
