/* React */
import React, { useState, useContext, useEffect } from "react";
/* ThoriumContext */
import { ThoriumConsumer, Nav } from "../../";
/* Style */
import { navLinkStyle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs, validProps } from "../../ThoriumUtils";
/* NavContext */
import NavContext from "../context";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  noHover: PropTypes.bool,
  variant: PropTypes.oneOf(validProps.variants),
};

const defaultProps = {
  noHover: false,
  variant: "link",
};

/**
 * A styled React Router wrapper
 */
export const NavLink = (props) => {
  const navContext = useContext(NavContext);
  let [isActive, setIsActive] = useState(
    navContext.activeItem === props.navKey
  );
  let link;
  useEffect(() => {
    const status = navContext.activeItem === props.navKey;
    setIsActive(status);
  }, [navContext.activeItem, props.navKey]);

  const handleClick = (e) => {
    !isActive && navContext.setActive(props.navKey);
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
          ...navLinkStyle.general,
          color: "inherit",
        };

        return (
          <Nav.Item onClick={(e) => handleClick(e)} navKey={props.navKey}>
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
          </Nav.Item>
        );
      }}
    </ThoriumConsumer>
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
