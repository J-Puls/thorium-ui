// Returns a 'justify-content' value based on the given 'justify' prop
export const updateJustify = justify => {
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
    case "evenly":
      return { ...x, justifyContent: "space-evenly" };
    default:
      return null;
  }
};
