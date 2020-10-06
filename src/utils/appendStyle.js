/**
 * Dynamically append style modifications, based on supplied prop values
 * @param {object} props React props object
 * @param {Array} stylingProps List of valid styling props
 * @param {object} style The default style object to be appended to
 * @param {object} styleRoot The root style object containing all possible styling properties
 * @param {object?} options
 * @returns {object} An object containing the updated style
 */
export const appendStyle = (props, stylingProps, style, styleRoot, options) => {
  let newStyle = { ...style };
  let stylesToAdd;
  let vpSizeName;
  if (options) {
    vpSizeName = options.vpSizeName || null;
  }

  const breakpoints = ["all", "xs", "sm", "md", "lg", "xl"];

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
        } else if (key === vpSizeName) {
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
