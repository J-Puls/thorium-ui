/* React */
import React, { forwardRef } from "react";
/* Style */
import { layerStyle } from "../styles/layerStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import makeTranslucent from "../utils/makeTranslucent";
import appendStyle from "../utils/appendStyle";
import mapPropsToMotion from "../utils/mapPropsToMotion";

// All valid props to be used by appendStyle
const stylingProps = [
  "justify",
  "rounded",
  "sticky",
  "vertical",
  "reverse",
  "verticalReverse"
];

/**
 * A horizontal row in the page grid, segmented into 12 blocks.
 */
export const Layer = forwardRef(function ThLayer(props, ref) {
  let style = { ...layerStyle.general };
  style = appendStyle(props, stylingProps, style, layerStyle);
  props.style && (style = { ...style, ...props.style });
  if (props.translucent) {
    style.backgroundColor = makeTranslucent(style.backgroundColor);
  }
  const genericProps = {
    "data-testid": "layer",
    ...mapPropsToAttrs(props),
    style,
    ref
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
});

export default Layer;
