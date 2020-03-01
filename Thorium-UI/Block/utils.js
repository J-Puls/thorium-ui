const updateSize = size => {
  switch (size) {
    case 12:
      return { flex: "0 0 100%", maxWidth: "100%" };
    case 9:
      return { flex: "0 0 75%", maxWidth: "75%" };
    case 8:
      return { flex: "0 0 66.666667%", maxWidth: "66.666667%" };
    case 6:
      return { flex: "0 0 50%", maxWidth: "50%" };
    case 4:
      return { flex: "0 0 33.333333%", maxWidth: "33.333333%" };
    case 3:
      return { flex: "0 0 25%", maxWidth: "25%" };
  }
};

const updateJustify = justify => {
  let x = {display: "flex", alignItems: "baseline"}
  switch (justify) {
    case "center":
      return { ...x, justifyContent: "center" };
    case "start":
      return { ...x, justifyContent: "flex-start" };
    case "end":
      return { ...x, justifyContent: "flex-end" };
    case "around":
      return { ...x, justifyContent: "space-around" };
    case "between":
      return { ...x, justifyContent: "space-between" };
  }
};

// Update the block style when breakpoints are reached
export const updateBlockStyle = (props, vs, style, setStyle) => {
  let updated = {};

  // Dynamically update the style if a 'size' prop is given
  props[vs] && (updated = { ...updateSize(props[vs]) });

  // Dynamically update the style if a 'justify' prop is given
  props["justify"] &&
    (updated = { ...updated, ...updateJustify(props.justify) });

  // Update the style state with updated values
  setStyle(style => ({ ...style, ...updated }));
};
