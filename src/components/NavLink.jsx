/* React */
import React, { useContext, useEffect, useState } from "react";
/* ThoriumContext */
import NavItem from "./NavItem";
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
  variant: PropTypes.oneOf(validProps.variants)
};

const defaultProps = {
  noHover: false,
  variant: "link"
};

/**
 * A styled React Router wrapper
 */
export const NavLink = (props) => {
  const navContext = useContext(NavContext);
  let [isActive, setIsActive] = useState(
    navContext.activeItem === props.navkey
  );

  useEffect(() => {
    const status = navContext.activeItem === props.navkey;
    setIsActive(status);
  }, [navContext.activeItem, props.navkey]);

  const handleClick = () => {
    !isActive && navContext.setActive(props.navkey);
  };

  let style = { ...navLinkStyle.general };

  return (
    <NavItem navkey={props.navkey}>
      {!props.asAnchor && ReactRouterDom && (
        <ReactRouterDom.Link
          onClick={handleClick}
          {...mapPropsToAttrs(props, "anchor")}
          to={props.to}
          style={style}
        >
          {props.children}
        </ReactRouterDom.Link>
      )}
      {(props.asAnchor || !ReactRouterDom) && (
        <a
          onClick={handleClick}
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
NavLink.defaultProps = defaultProps;

export default NavLink;
