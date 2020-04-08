// Returns a 'justify-content' value based on the given 'justify' prop
export const updateJustify = (key) => {
  const vals = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    around: "space-around",
    between: "space-between",
    evenly: "space-evenly",
  };
  return { display: "flex", alignItems: "baseline", justifyContent: vals[key] };
};
