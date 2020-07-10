/* React */
import React from "react";
/* Style */
import { layerStyle } from "../Styles";
/* Utils */
import { mapPropsToAttrs, appendStyle, makeTranslucent } from "../ThoriumUtils";

// All valid props to be used by appendStyle
const stylingProps = ["justify", "rounded", "sticky"];

/**
 * A horizontal row in the page grid, segmented into 12 blocks.
 */
export const Layer = (props) => {
  let style = { ...layerStyle.general };
  style = appendStyle(props, stylingProps, style, layerStyle);
  props.style && (style = { ...style, ...props.style });
  if (props.translucent) {
    style.backgroundColor = makeTranslucent(style.backgroundColor);
  }
  return (
    <div {...mapPropsToAttrs(props)} style={style}>
      {props.children}
    </div>
  );
};

export default Layer;
