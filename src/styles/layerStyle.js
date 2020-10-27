import updateJustify from "../utils/updateJustify";

// Default layer styling
export const layerStyle = {
  general: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "15px",
    marginLeft: "15px",
    boxSizing: "border-box"
  },
  rounded: {
    borderRadius: ".25rem"
  },
  sticky: {
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  vertical: {
    flexDirection: "column"
  },
  reverse: {
    flexDirection: "row-reverse"
  },
  verticalReverse: {
    flexDirection: "column-reverse"
  },
  justify: (value) => updateJustify(value)
};
