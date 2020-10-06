/* React */
import React, { useState, useEffect } from "react";
/* Thorium-UI */
import { Block } from "./Block";
/* Subcomponents */
import { NavLink as Link } from "./NavLink";
import { NavItem as Item } from "./NavItem";
/* NavContext */
import { NavProvider } from "../context/NavContext";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { validProps } from "../utils/propValidation";
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  justify: PropTypes.oneOf(validProps.justify),
  vertical: PropTypes.bool,
  trackActive: PropTypes.bool,
  centerLinks: PropTypes.bool,
  variant: PropTypes.oneOf(validProps.variants),
  type: PropTypes.oneOf(["normal", "tabs", "pills"])
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

  // Define context to be accessible by Nav subcomponents
  const navContext = {
    activeItem: activeItem,
    setActive: (id) => setActiveItem(id),
    currentURL: window.location.pathname,
    trackActive: props.trackActive,
    variant: props.variant,
    type: props.type
  };

  useEffect(() => {
    props.onActiveItemChange && props.onActiveItemChange(navContext);
  }, [navContext, props]);

  let style = { ...props.style };
  props.centerLinks && (style.textAlign = "center");
  return (
    <NavProvider value={navContext}>
      {props.withMotion && (
        <Block
          {...mapPropsToAttrs(props)}
          {...mapPropsToResponsiveSize(props)}
          justify={props.justify}
          vertical={props.vertical}
          style={style}
          class={props.className}
          withMotion={true}
          {...mapPropsToMotion(props)}
        >
          {props.children}
        </Block>
      )}
      {!props.withMotion && (
        <Block
          {...mapPropsToAttrs(props)}
          {...mapPropsToResponsiveSize(props)}
          justify={props.justify}
          vertical={props.vertical}
          style={style}
          class={props.className}
        >
          {props.children}
        </Block>
      )}
    </NavProvider>
  );
};

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
