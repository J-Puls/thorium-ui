import { makeTranslucent, updateJustify } from "../../ThoriumUtils";
import config from "../../config";

const updateSize = (size) => {
  const rs = config.responsiveSizes[size];
  if (rs) {
    return {
      flexBasis: `${rs}%`,
      flexGrow: 0,
      maxWidth: `${rs}%`,
    };
  } else return { display: "none" };
};

// Default block styling
export const blockStyle = {
  general: {
    position: "relative",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: "100%",
    boxSizing: "inherit",
  },
  round: {
    borderRadius: "50%",
  },
  rounded: {
    borderRadius: ".25rem",
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
  justify: (value) => updateJustify(value),
  translucent: (value) => makeTranslucent(value),
  all: (value) => updateSize(value),
  xs: (value) => updateSize(value),
  sm: (value) => updateSize(value),
  md: (value) => updateSize(value),
  lg: (value) => updateSize(value),
  xl: (value) => updateSize(value),
};
