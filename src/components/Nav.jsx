/* React */
import React, { useState, useEffect, cloneElement } from "react";
/* Thorium-UI */
import { Block } from "./Block";
/* Sub-components */
import { NavLink as Link } from "./NavLink";
import { NavItem as Item } from "./NavItem";
/* NavContext */
import { NavProvider } from "../context/NavContext";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { variants, justify } from "../utils/propValidation";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  justify: PropTypes.oneOf(justify),
  vertical: PropTypes.bool,
  trackActive: PropTypes.bool,
  centerLinks: PropTypes.bool,
  variant: PropTypes.oneOf(variants),
  type: PropTypes.oneOf(["normal", "tabs", "pills"]),
  onActiveItemChange: PropTypes.func
};

const defaultProps = {
  justify: "start",
  vertical: false,
  trackActive: false,
  centerLinks: false,
  defaultActive: 0,
  variant: "link",
  type: "normal"
};

/**
 *  A pre-styled navigation menu that can be included in any layout component
 */
export const Nav = (props) => {
  const [activeItem, setActiveItem] = useState(props.defaultActive);

  // Define context to be accessible by Nav sub-components
  const navContext = {
    activeItem: activeItem,
    setActiveItem,
    currentURL: window.location.pathname,
    trackActive: props.trackActive,
    variant: props.variant,
    type: props.type
  };

  useEffect(() => {
    props.onActiveItemChange && props.onActiveItemChange(navContext);
  }, [navContext, props]);

  const children = React.Children.map(props.children, (child) => {
    return cloneElement(child, {
      variant: props.variant,
      type: props.type
    });
  });

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
          {children}
        </Block>
      )}
      {!props.withMotion && <Block {...genericProps}>{children}</Block>}
    </NavProvider>
  );
};

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
