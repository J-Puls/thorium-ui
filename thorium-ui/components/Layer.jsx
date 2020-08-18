/* React */
import React, { forwardRef } from "react";
/* Thorium-UI */
import { ThoriumConsumer } from "../";
/* Style */
import { layerStyle } from "../styles";
/* Utils */
import {
  mapPropsToAttrs,
  appendStyle,
  makeTranslucent,
  mapPropsToMotion,
} from "../utils";

// All valid props to be used by appendStyle
const stylingProps = ["justify", "rounded", "sticky", "vertical"];

/**
 * A horizontal row in the page grid, segmented into 12 blocks.
 */
export const Layer = forwardRef((props, ref) => {
  let style = { ...layerStyle.general };
  style = appendStyle(props, stylingProps, style, layerStyle);
  props.style && (style = { ...style, ...props.style });
  if (props.translucent) {
    style.backgroundColor = makeTranslucent(style.backgroundColor);
  }
  return (
    <ThoriumConsumer>
      {(context) => {
        const motion =
          context.hasFramerEnabled && props.withMotion
            ? require("framer-motion").motion
            : null;

        if (motion && props.withMotion) {
          return (
            <motion.div
              {...mapPropsToAttrs(props)}
              style={style}
              ref={ref}
              {...mapPropsToMotion(props)}
            >
              {props.children}
            </motion.div>
          );
        } else {
          return (
            <div {...mapPropsToAttrs(props)} style={style} ref={ref}>
              {props.children}
            </div>
          );
        }
      }}
    </ThoriumConsumer>
  );
});

export default Layer;
