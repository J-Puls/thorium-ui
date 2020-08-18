/**
 * Returns a CSS 'justify-content' value based on the given value
 * @param { String } value The "justify" value
 * @returns { String } The corresponding CSS value
 */
export const updateJustify = (value) => {
  const vals = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    around: "space-around",
    between: "space-between",
    evenly: "space-evenly",
  };
  return {
    display: "flex",
    justifyContent: vals[value],
  };
};
