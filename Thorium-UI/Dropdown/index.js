import React, { useState, createRef, useEffect } from "react";
import Button from "../Button";
import { DropdownMenu } from "./Menu";
export { DropdownItem } from "./Item";
export { DropdownLink } from "./Link";
export { DropdownDivider } from "./Divider";
export { DropdownMenu } from "./Menu";

const Dropdown = props => {
  const [visible, setVisible] = useState(props.autofocused || false);
  const [menuHeight, setMenuHeight] = useState(0);

  const ref = createRef();

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => setVisible(false);

  useEffect(() => {
    const currHeight = ref.current.scrollHeight;
    return function setCurrentHeight() {
      !visible && setMenuHeight(currHeight);
    };
  }, [visible, ref]);

  return (
    <>
      {props.clickable && (
        <div id={props.id} ref={ref}>
          <Button
            stretch
            variant={props.variant}
            size={props.size}
            onClick={() => handleClick()}
          >
            {props.text}{" "}
            {props.icon && visible && (
              <span style={{ fontWeight: 900 }}>&#8211;</span>
            )}
            {props.icon && !visible && (
              <span style={{ fontWeight: 900 }}>&#43;</span>
            )}
          </Button>
          <DropdownMenu
            vertical
            floating={props.floating}
            visible={visible}
            menuHeight={menuHeight}
          >
            {props.children}
          </DropdownMenu>
        </div>
      )}
      {props.hoverable && (
        <div
          ref={ref}
          id={props.id}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Button stretch variant={props.variant} size={props.size}>
            {props.text}
          </Button>
          <DropdownMenu
            vertical
            floating={props.floating}
            visible={visible}
            menuHeight={menuHeight}
          >
            {props.children}
          </DropdownMenu>
        </div>
      )}
    </>
  );
};

export default Dropdown;
