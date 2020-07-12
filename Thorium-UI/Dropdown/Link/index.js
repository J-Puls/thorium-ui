/* React */
import React from "react";
/* ThoriumContext */
import { Dropdown, ThoriumConsumer } from "../../";
/* Style */
import { dropdownLinkStyle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";

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
        if (context.hasRouterEnabled && !props.asAnchor)
          Link = require("react-router-dom").Link;
        let style = {
          ...dropdownLinkStyle.general,
          color: "inherit",
        };

        return (
          <Dropdown.Item onClick={(e) => handleClick(e)} navKey={props.navKey}>
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
          </Dropdown.Item>
        );
      }}
    </ThoriumConsumer>
  );
};

export default DropdownLink;
