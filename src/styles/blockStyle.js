import updateJustify from "../utils/updateJustify";

export const blockStyle = {
  general: {
    boxSizing: "inherit",
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    position: "relative"
  },
  justify: (value) => updateJustify(value),
  order: (value) => ({
    order: value
  }),
  responsiveSize: (size) => ({
    flexBasis: `${size}%`,
    flexGrow: 0,
    maxWidth: `${size}%`
  }),
  rounded: {
    borderRadius: ".25rem"
  },
  vertical: {
    display: "flex",
    flexDirection: "column"
  }
};
