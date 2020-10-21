/* React */
import React, { useEffect, useState } from "react";
/* ThoriumContext */
import NavItem from "./NavItem";
/* Style */
import { navLinkStyle } from "../styles/navLinkStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { variants } from "../utils/propValidation";
/* PropTypes */
import PropTypes from "prop-types";
/* Hooks */
import useActiveItem from "../hooks/nav/useActiveItem";
import useSetActiveItem from "../hooks/nav/useSetActiveItem";
import useTheme from "../hooks/thoriumRoot/useTheme";

const propTypes = {
  navkey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variant: PropTypes.oneOf(variants),
  type: PropTypes.oneOf(["normal", "pills", "tabs"]),
  withMotion: PropTypes.bool
};

/**
 * A styled React Router wrapper
 */
export const NavLink = (props) => {
  const theme = useTheme();
  const activeItem = useActiveItem();
  const setActiveItem = useSetActiveItem();
  const [isActive, setIsActive] = useState(activeItem === props.navkey);
  let thisLink;
  useEffect(() => {
    const status = activeItem === props.navkey;
    setIsActive(status);
  }, [activeItem, props.navkey]);

  const handleClick = () => {
    !isActive && setActiveItem(props.navkey);
    thisLink.click();
  };

  let style = { ...navLinkStyle.general, ...theme.nav.link };

  return (
    <NavItem
      navkey={props.navkey}
      variant={props.variant}
      type={props.type}
      withMotion={props.withMotion}
      onClick={handleClick}
    >
      {!props.asAnchor && ReactRouterDom && (
        <ReactRouterDom.Link
          ref={(el) => (thisLink = el)}
          {...mapPropsToAttrs(props, "anchor")}
          to={props.to}
          style={style}
        >
          {props.children}
        </ReactRouterDom.Link>
      )}
      {(props.asAnchor || !ReactRouterDom) && (
        <a
          ref={(el) => (thisLink = el)}
          {...mapPropsToAttrs(props, "anchor")}
          style={style}
        >
          {props.children}
        </a>
      )}
    </NavItem>
  );
};

NavLink.propTypes = propTypes;

export default NavLink;
