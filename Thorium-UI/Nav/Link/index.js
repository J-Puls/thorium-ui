/* React */
import React, { useState, useContext, useEffect } from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../../";
/* Style */
import { navLinkStyle } from "../../Styles";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";
/* NavContext */
import NavContext from "../context";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  noHover: PropTypes.bool,
};

const defaultProps = {
  noHover: false,
};

/**
 * A styled React Router wrapper
 */
export const NavLink = (props) => {
  const navContext = useContext(NavContext);

  let [isHovered, setIsHovered] = useState(false);
  let [isActive, setIsActive] = useState(navContext.activeItem === props.to);

  useEffect(() => {
    const status = navContext.activeItem === props.to;
    setIsActive(status);
  }, [navContext.activeItem, props.to]);

  const handleClick = (e) => {
    !isActive && navContext.setActive(props.to);
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <ThoriumConsumer>
      {(context) => {
        let style = { ...navLinkStyle.general };

        if (isHovered && !props.noHover) {
          style = { ...style, ...context.theme.nav.link.hover };
        } else if (navContext.trackActive && isActive)
          style = { ...style, ...context.theme.nav.link.active };
        else style = { ...style, ...context.theme.nav.link.normal };
        if (context.hasRouterEnabled && !props.asAnchor) {
          const Link = require("react-router-dom").Link;
          return (
            <Link
              {...mapPropsToAttrs(props, "anchor")}
              onClick={(e) => handleClick(e)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ ...style, ...props.style }}
              to={props.to}
            >
              {props.children}
            </Link>
          );
        } else if (props.asAnchor || !context.hasRouterEnabled) {
          return (
            <a
              {...mapPropsToAttrs(props, "anchor")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ ...style, ...props.style }}
            >
              {props.children}
            </a>
          );
        }
      }}
    </ThoriumConsumer>
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
