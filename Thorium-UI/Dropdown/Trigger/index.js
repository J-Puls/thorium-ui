/* React */
import React from "react";
/* Thorium-UI */
import { Button, Icon, ThoriumConsumer } from "../../";
/* Icons */
import Icons from "../../icons";

/**
 * The button which toggles the "active" state of the Menu
 */
export const DropdownTrigger = React.forwardRef((props, ref) => (
  <ThoriumConsumer>
    {(context) => {
      return (
        <div ref={ref}>
          <Button
            onClick={props.onClick}
            stretch
            variant={props.variant}
            size={props.size}
            id={props.id}
            style={{ zIndex: 9999, width: "100%", ...props.style }}
          >
            {props.text}
            {props.icons && props.active && (
              <span>
                {" "}
                <Icon
                  width={10}
                  height={10}
                  src={`${Icons}#chevron-up`}
                  fill={context.theme.button[props.variant].normal.color}
                />
              </span>
            )}
            {props.icons && !props.active && (
              <span>
                {" "}
                <Icon
                  width={10}
                  height={10}
                  src={`${Icons}#chevron-down`}
                  fill={context.theme.button[props.variant].normal.color}
                />
              </span>
            )}
          </Button>
        </div>
      );
    }}
  </ThoriumConsumer>
));

export default DropdownTrigger;
