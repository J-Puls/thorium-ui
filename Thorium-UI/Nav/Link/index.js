import React, { useState, useContext, useEffect } from "react";
import ThoriumContext from "../../ThoriumRoot/ThoriumContext";
import { linkStyle } from "../../Styles";
import { Link } from "react-router-dom";

const NavLink = props => {
  const context = useContext(ThoriumContext);

  const [style, setStyle] = useState({ ...linkStyle, ...context.theme.link });

  useEffect(() => {
    setStyle({ ...linkStyle, ...context.theme.link });
  }, [context.theme]);

  const handleMouseEnter = () => {
    setStyle({ ...style, opacity: 0.7 });
  };
  const handleMouseLeave = () => {
    setStyle({ ...style, opacity: 1 });
  };
  const handleClick = e => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <Link
      className={props.className}
      id={props.id}
      name={props.name}
      href={props.href}
      rel={props.rel}
      style={{ textDecoration: "none", ...style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={e => handleClick(e)}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
export default NavLink;
