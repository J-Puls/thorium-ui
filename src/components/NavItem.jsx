/* React */
import React, { useContext, useState, useEffect } from "react";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* Style */
import { navItemStyle } from "../styles/navItemStyle";
import { NavContext } from "../context/NavContext";
/* Hooks */
import { useTheme } from "../hooks/thoriumRoot/useTheme";

/**
 * A simple padded wrapper to encapsulate different items within a Nav
 */
export const NavItem = (props) => {
  const navContext = useContext(NavContext);
  const theme = useTheme().nav.item;
  let [isHovered, setIsHovered] = useState(false);
  let [isActive, setIsActive] = useState(
    navContext.activeItem === props.navkey
  );

  useEffect(() => {
    const status = navContext.activeItem === props.navkey;
    setIsActive(status);
  }, [navContext.activeItem, props.navkey]);

  const handleClick = (e) => {
    !isActive && navContext.setActive(props.navkey);
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  let style = { ...navItemStyle.general };
  if (isActive) {
    style = {
      ...style,
      ...theme[navContext.variant].active[navContext.type]
    };
  } else if (isHovered) {
    style = {
      ...style,
      ...theme[navContext.variant].hover[navContext.type]
    };
  } else {
    style = {
      ...style,
      ...theme[navContext.variant].inactive[navContext.type]
    };
  }

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

export default NavItem;
