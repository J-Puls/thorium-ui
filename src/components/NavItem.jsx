/* React */
import React, { useState, useEffect, useContext } from "react";
/* Utils */
import { mapPropsToAttrs } from "../utils/mapPropsToAttrs";
import { mapPropsToMotion } from "../utils/mapPropsToMotion";
/* Style */
import { navItemStyle } from "../styles/navItemStyle";
/* Hooks */
import { useTheme } from "../hooks/thoriumRoot/useTheme";
import { variants } from "../utils/propValidation";
/* PropTypes */
import PropTypes from "prop-types";
import NavContext from "../context/NavContext";

const propTypes = {
  navkey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variant: PropTypes.oneOf(variants),
  type: PropTypes.oneOf(["normal", "pills", "tabs"]),
  withMotion: PropTypes.bool
};

const defaultProps = {
  withMotion: false
};

/**
 * A simple padded wrapper to encapsulate different items within a Nav
 */
export const NavItem = (props) => {
  const theme = useTheme().nav.item;
  const [isHovered, setIsHovered] = useState(false);
  const navContext = useContext(NavContext);
  const { activeItem, setActiveItem, trackActive, type, variant } = navContext;

  // Allow for individual variant / type if defined
  const thisVariant = props.variant || variant;
  const thisType = props.type || type;

  // Track if this is the currently active item
  const [isActive, setIsActive] = useState(
    trackActive && activeItem === props.navkey
  );
  useEffect(() => {
    trackActive && setIsActive(activeItem === props.navkey);
  }, [activeItem, props.navkey]);

  const handleClick = (e) => {
    !isActive && setActiveItem(props.navkey);
    props.onClick && props.onClick();
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Style modification based on variant / type
  const styleMod = isActive
    ? { ...theme[thisVariant].active[thisType] }
    : isHovered
    ? { ...theme[thisVariant].hover[thisType] }
    : { ...theme[thisVariant].inactive[thisType] };

  const style = { ...navItemStyle.general, ...styleMod };

  const genericProps = {
    ...mapPropsToAttrs(props),
    className: props.className
      ? props.className
      : props.withMotion
      ? "th-motion-nav-item"
      : "th-nav-item",
    "data-testid": props["data-testid"]
      ? props["data-testid"]
      : props.withMotion
      ? "th-motion-nav-item"
      : "th-nav-item",
    style: { ...style, ...props.style },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    navkey: props.navkey
  };

  if (props.withMotion) {
    return (
      <motion.div {...genericProps} {...mapPropsToMotion(props)}>
        {props.children}
      </motion.div>
    );
  } else {
    return <div {...genericProps}>{props.children}</div>;
  }
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
export default NavItem;
