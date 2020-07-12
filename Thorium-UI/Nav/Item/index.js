/* React */
import React, { useContext, useState, useEffect } from "react";
/* Utils */
import { mapPropsToAttrs } from "../../ThoriumUtils";
/* style */
import { navItemStyle } from "../../Styles/nav/item";
import { ThoriumConsumer } from "../../ThoriumContext";
import { NavContext } from "../context";

/**
 * A simple padded wrapper to encapsulate different items within a Nav
 */
export const NavItem = (props) => {
  const navContext = useContext(NavContext);

  let [isHovered, setIsHovered] = useState(false);
  let [isActive, setIsActive] = useState(
    navContext.activeItem === props.navKey
  );

  useEffect(() => {
    const status = navContext.activeItem === props.navKey;
    setIsActive(status);
  }, [navContext.activeItem, props.navKey]);

  const handleClick = (e) => {
    !isActive && navContext.setActive(props.navKey);
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

        return (
          <nav-item
            {...mapPropsToAttrs(props)}
            style={{ ...style, ...props.style }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            navKey={props.navKey}
          >
            {props.children}
          </nav-item>
        );
      }}
    </ThoriumConsumer>
  );
};

export default NavItem;
