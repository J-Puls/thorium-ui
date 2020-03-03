const updateJustify = justify => {
  let x = { display: "flex", alignItems: "baseline" };
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

export const updateFromProps = props => {
  let updated = {};

  // Dynamically update the style if a 'justify' prop is given
  props["justify"] &&
    (updated = { ...updated, ...updateJustify(props.justify) });

  return updated;
};
