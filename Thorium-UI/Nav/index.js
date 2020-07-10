/* React */
import React, { useState } from "react";
/* Thorium-UI */
import { Block } from "../";
/* Subcomponents */
import Link from "./Link";
import Item from "./Item";
/* NavContext */
import { NavProvider } from "./context";
/* Utils */
import {
  mapPropsToResponsiveSize,
  mapPropsToAttrs,
  validProps,
} from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  justify: PropTypes.oneOf(validProps.justify),
  vertical: PropTypes.bool,
  trackActive: PropTypes.bool,
  centerLinks: PropTypes.bool,
};

const defaultProps = {
  justify: "start",
  vertical: false,
  trackActive: false,
  centerLinks: false,
  defaultActive: 0,
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
  };

  let style = { ...props.style };
  props.centerLinks && (style.textAlign = "center");
  return (
    <NavProvider value={navContext}>
      <Block
        {...mapPropsToAttrs(props)}
        {...mapPropsToResponsiveSize(props)}
        justify={props.justify}
        vertical={props.vertical}
        style={style}
      >
        {props.children}
      </Block>
    </NavProvider>
  );
};

Nav.Link = Link;
Nav.Item = Item;
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
