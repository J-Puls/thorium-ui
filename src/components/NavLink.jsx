/* React */
import React, { useContext, useEffect, useState } from "react";
/* ThoriumContext */
import NavItem from "./NavItem";
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { navLinkStyle } from "../styles/navLinkStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { validProps } from "../utils/propValidation";
/* NavContext */
import { NavContext } from "../context/NavContext";
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
    navContext.activeItem === props.navkey
  );
  let link;
  useEffect(() => {
    const status = navContext.activeItem === props.navkey;
    setIsActive(status);
  }, [navContext.activeItem, props.navkey]);

  const handleClick = (e) => {
    !isActive && navContext.setActive(props.navkey);
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
        let style = { ...navLinkStyle.general };

        return (
          <NavItem onClick={(e) => handleClick(e)} navkey={props.navkey}>
            {context.hasRouterEnabled && !props.asAnchor && (
              <Link
                {...mapPropsToAttrs(props, "anchor")}
                to={props.to}
                style={style}
                ref={(el) => (link = el)}
              >
                {props.children}
              </Link>
            )}
            {(props.asAnchor || !context.hasRouterEnabled) && (
              <a
                {...mapPropsToAttrs(props, "anchor")}
                style={style}
                ref={(el) => (link = el)}
              >
                {props.children}
              </a>
            )}
          </NavItem>
        );
      }}
    </ThoriumConsumer>
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
