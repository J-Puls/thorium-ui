import updateJustify from "../utils/updateJustify";
import makeTranslucent from "../utils/makeTranslucent";
// Default layer styling
export const layerStyle = {
  general: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "15px",
    marginLeft: "15px",
    boxSizing: "border-box",
  },
  rounded: {
    borderRadius: ".25rem",
  },
  sticky: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
  justify: (value) => updateJustify(value),
  translucent: (value) => makeTranslucent(value),
};
