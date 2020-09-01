/* React */
import React, { useContext, useState, useEffect } from "react";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import mapPropsToMotion from "../utils/mapPropsToMotion";
/* style */
import { navItemStyle } from "../styles/navItemStyle";
import { ThoriumConsumer } from "../context/ThoriumContext";
import { NavContext } from "../context/NavContext";

/**
 * A simple padded wrapper to encapsulate different items within a Nav
 */
export const NavItem = (props) => {
  const navContext = useContext(NavContext);

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

  return (
    <ThoriumConsumer>
      {(context) => {
        let motion;
        if (context.hasFramerEnabled && props.withMotion) {
          motion = require("framer-motion").motion;
        }
        let style = { ...navItemStyle.general };
        if (isActive) {
          style = {
            ...style,
            ...context.theme.nav.item[navContext.variant].active[
              navContext.type
            ],
          };
        } else if (isHovered) {
          style = {
            ...style,
            ...context.theme.nav.item[navContext.variant].hover[
              navContext.type
            ],
          };
        } else {
          style = {
            ...style,
            ...context.theme.nav.item[navContext.variant].inactive[
              navContext.type
            ],
          };
        }

        const genericProps = {
          ...mapPropsToAttrs(props),
          style: { ...style, ...props.style },
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onClick: handleClick,
          navkey: props.navkey,
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
      }}
    </ThoriumConsumer>
  );
};

export default NavItem;
