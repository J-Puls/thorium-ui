import React from "react";
import { Button, Icon } from "../../";
import Icons from "../../icons";
import { ThoriumConsumer } from "../../ThoriumContext";

export const DropdownTrigger = React.forwardRef((props, ref) => {
  return (
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
                    fill={context.theme.button.normal[props.variant].color}
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
                    fill={context.theme.button.normal[props.variant].color}
                  />
                </span>
              )}
            </Button>
          </div>
        );
      }}
    </ThoriumConsumer>
  );
});

export default DropdownTrigger;
