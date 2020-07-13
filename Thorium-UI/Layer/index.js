/* React */
import React, { forwardRef } from "react";
/* Style */
import { layerStyle } from "../Styles";
/* Utils */
import { mapPropsToAttrs, appendStyle, makeTranslucent } from "../ThoriumUtils";

// All valid props to be used by appendStyle
const stylingProps = ["justify", "rounded", "sticky"];

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
    <th-layer {...mapPropsToAttrs(props)} style={style} ref={ref}>
      {props.children}
    </th-layer>
  );
});

export default Layer;
