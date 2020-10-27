/* React */
import React, { cloneElement, useEffect, useState } from "react";
/* Thorium-UI */
import { Block } from "./Block";
/* Sub-components */
import { NavLink as Link } from "./NavLink";
import { NavItem as Item } from "./NavItem";
/* NavContext */
import { NavProvider } from "../context/NavContext";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { justify, variants } from "../utils/propValidation";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  centerLinks: PropTypes.bool,
  defaultActive: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justify: PropTypes.oneOf(justify),
  onActiveItemChange: PropTypes.func,
  trackActive: PropTypes.bool,
  type: PropTypes.oneOf(["normal", "tabs", "pills"]),
  variant: PropTypes.oneOf(variants),
  vertical: PropTypes.bool
};

const defaultProps = {
  centerLinks: false,
  defaultActive: 0,
  justify: "start",
  trackActive: false,
  type: "normal",
  variant: "link",
  vertical: false
};

/**
 *  A pre-styled navigation menu that can be included in any layout component
 */
export const Nav = (props) => {
  const [activeItem, setActiveItem] = useState(props.defaultActive);

  // Define context to be accessible by Nav sub-components
  const navContext = {
    activeItem: activeItem,
    currentURL: window.location.pathname,
    setActiveItem,
    trackActive: props.trackActive,
    type: props.type,
    variant: props.variant
  };

  useEffect(() => {
    props.onActiveItemChange && props.onActiveItemChange(navContext);
  }, [navContext, props]);

  let style = { ...props.style };
  props.centerLinks && (style.textAlign = "center");

  const genericProps = {
    ...mapPropsToAttrs(props),
    ...mapPropsToResponsiveSize(props),
    className: props.className
      ? props.className
      : props.withMotion
      ? "th-motion-nav"
      : "th-nav",
    "data-testid": props["data-testid"]
      ? props["data-testid"]
      : props.withMotion
      ? "th-motion-nav"
      : "th-nav",
    justify: props.justify,
    vertical: props.vertical,
    style
  };

  return (
    <NavProvider value={navContext}>
      {props.withMotion && (
        <Block {...genericProps} withMotion={true} {...mapPropsToMotion(props)}>
          {props.children}
        </Block>
      )}
      {!props.withMotion && <Block {...genericProps}>{props.children}</Block>}
    </NavProvider>
  );
};

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
