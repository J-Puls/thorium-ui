/**
 * Dynamically append style modifications, based on supplied prop values
 * @param {Object} props React props object
 * @param {Array} stylingProps List of valid styling props
 * @param {Object} style The default style object to be appended to
 * @param {Object} styleRoot The root style object containing all possible styling properties
 * @param {Object} context The current context, if necessary for theme-dependant styles
 * @returns {Object} An object containing the updated style
 */
export const appendStyle = (props, stylingProps, style, styleRoot, context) => {
  let newStyle = { ...style };
  let stylesToAdd;
  let ctxt;
  context && (ctxt = { ...context });
  let breakpoints = ["all", "xs", "sm", "md", "lg", "xl"];

  const addStyles = (styles) => {
    stylesToAdd = { ...stylesToAdd, ...styles };
  };

  stylingProps.forEach((key) => {
    if (props[key]) {
      const type = typeof props[key];
      const isFunction = typeof styleRoot[key] === "function";

      // Block sizing
      if (breakpoints.includes(key)) {
        if (key === "all") {
          addStyles(styleRoot.all(props.all));
        } else if (key === ctxt.viewportSizeName) {
          stylesToAdd = styleRoot[key](props[key]);
        }
      }

      if (type === "string") {
        isFunction
          ? addStyles(styleRoot[key](props[key]))
          : addStyles(styleRoot[key][props[key]]);
      }

      if (type === "boolean") addStyles(styleRoot[key]);
    }
  });
  if (stylesToAdd) newStyle = { ...newStyle, ...stylesToAdd };

  return newStyle;
};
export default appendStyle;
