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
