/* React */
import React, { forwardRef } from "react";
/* Thorium-UI */
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { layerStyle } from "../styles/layerStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import makeTranslucent from "../utils/makeTranslucent";
import appendStyle from "../utils/appendStyle";
import mapPropsToMotion from "../utils/mapPropsToMotion";

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
        let motion;
        if (context.hasFramerEnabled && props.withMotion) {
          motion = require("framer-motion").motion;
        }

        if (props.withMotion) {
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
