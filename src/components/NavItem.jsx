/* React */
import React, { useState, useEffect } from "react";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* Style */
import { navItemStyle } from "../styles/navItemStyle";
/* Hooks */
import { useTheme } from "../hooks/thoriumRoot/useTheme";
import { useActiveItem } from "../hooks/nav/useActiveItem";
import useSetActiveItem from "../hooks/nav/useSetActiveItem";
import PropTypes from "prop-types";
import { variants } from "../utils/propValidation";

const propTypes = {
  navkey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variant: PropTypes.oneOf(variants),
  type: PropTypes.oneOf(["normal", "pills", "tabs"]),
  withMotion: PropTypes.bool
};

const defaultProps = {
  type: "normal",
  withMotion: false
};

/**
 * A simple padded wrapper to encapsulate different items within a Nav
 */
export const NavItem = (props) => {
  const theme = useTheme().nav.item;
  const [isHovered, setIsHovered] = useState(false);
  const activeItem = useActiveItem();
  const setActiveItem = useSetActiveItem();
  const [isActive, setIsActive] = useState(activeItem === props.navkey);
  useEffect(() => {
    setIsActive(activeItem === props.navkey);
  }, [activeItem, props.navkey]);

  const handleClick = (e) => {
    !isActive && setActiveItem(props.navkey);
    if (props.onClick) {
      props.onClick();
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const styleMod = isActive
    ? { ...theme[props.variant].active[props.type] }
    : isHovered
    ? { ...theme[props.variant].hover[props.type] }
    : { ...theme[props.variant].inactive[props.type] };

  const style = { ...navItemStyle.general, ...styleMod };

  const genericProps = {
    ...mapPropsToAttrs(props),
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
