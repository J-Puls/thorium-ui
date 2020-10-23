/* React */
import React, { forwardRef, useLayoutEffect, useState } from "react";
/* Styling */
import { blockStyle } from "../styles/blockStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
import { sizes, justify } from "../utils/propValidation";
import { responsiveSizes as rs } from "../config";
import appendStyle from "../utils/appendStyle";
import mapPropsToMotion from "../utils/mapPropsToMotion";
import makeTranslucent from "../utils/makeTranslucent";
/* Hooks */
import { useViewportSizeName } from "../hooks/thoriumRoot/useViewportSizeName";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  all: PropTypes.oneOf(sizes),
  justify: PropTypes.oneOf(justify),
  lg: PropTypes.oneOf(sizes),
  md: PropTypes.oneOf(sizes),
  order: PropTypes.number,
  round: PropTypes.bool,
  sm: PropTypes.oneOf(sizes),
  translucent: PropTypes.bool,
  vertical: PropTypes.bool,
  xl: PropTypes.oneOf(sizes),
  xs: PropTypes.oneOf(sizes)
};

const defaultProps = {
  justify: null,
  round: false,
  translucent: false,
  vertical: false,
  withMotion: false
};

// All valid props to be used by appendStyle
const stylingProps = ["rounded", "vertical", "justify", "order"];

/**
 * Defines a column within a Layer
 */
export const Block = forwardRef(function ThBlock(props, ref) {
  const vpSizeName = useViewportSizeName();

  // Calculate responsive flex-box sizing based on provided props & current viewportSizeName
  // The "all" prop overrides any other sizing props given
  const [responsiveSize, setResponsiveSize] = useState(
    props.all
      ? blockStyle.responsiveSize(rs[props.all])
      : Object.keys(props).includes(vpSizeName)
      ? blockStyle.responsiveSize(rs[props[vpSizeName]])
      : null
  );

  // Update responsive flex-box sizing if viewportSizeName changes
  useLayoutEffect(() => {
    !props.all &&
      setResponsiveSize(
        Object.keys(props).includes(vpSizeName)
          ? blockStyle.responsiveSize(rs[props[vpSizeName]])
          : null
      );
  }, [vpSizeName]);

  let style = { ...blockStyle.general };
  style = appendStyle(props, stylingProps, style, blockStyle);

  // Append the responsive sizing if it has been calculated
  responsiveSize && (style = { ...style, ...responsiveSize });

  // Reduce the background color alpha value if translucent prop is true
  if (
    props.makeTranslucent &&
    (style.backgroundColor || style["background-color"])
  ) {
    style.backgroundColor = makeTranslucent(style.backgroundColor);
  }

  const genericProps = {
    ...mapPropsToAttrs(props),
    className: props.className
      ? props.className
      : props.withMotion
      ? "th-motion-block"
      : "th-block",
    "data-testid": props["data-testid"]
      ? props["data-testid"]
      : props.withMotion
      ? "th-motion-block"
      : "th-block",
    style: { ...style, ...props.style },
    ref
  };

  if (props.withMotion) {
    return (
      <motion.div {...genericProps} {...mapPropsToMotion(props)}>
        {props.children}
      </motion.div>
    );
  } else return <div {...genericProps}>{props.children}</div>;
});

Block.defaultProps = defaultProps;
Block.propTypes = propTypes;
export default Block;
