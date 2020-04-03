import { updateJustify, makeTranslucent } from "../ThoriumUtils";

// Update component width based on viewport size
const updateSize = size => {
  switch (size) {
    case 12:
      return { flexGrow: 0, flexBasis: "100%", maxWidth: "100%" };
    case 11:
      return { flexGrow: 0, flexBasis: "91.666667%", maxWidth: "91.666667%" };
    case 10:
      return { flexGrow: 0, flexBasis: "83.333333%", maxWidth: "83.333333%" };
    case 9:
      return { flexGrow: 0, flexBasis: "75%", maxWidth: "75%" };
    case 8:
      return { flexGrow: 0, flexBasis: "66.666667%", maxWidth: "66.666667%" };
    case 7:
      return { flexGrow: 0, flexBasis: "58.333333%", maxWidth: "58.333333%" };
    case 6:
      return { flexGrow: 0, flexBasis: "50%", maxWidth: "50%" };
    case 5:
      return { flexGrow: 0, flexBasis: "41.666667%", maxWidth: "41.666667%" };
    case 4:
      return { flexGrow: 0, flexBasis: "33.333333%", maxWidth: "33.333333%" };
    case 3:
      return { flexGrow: 0, flexBasis: "25%", maxWidth: "25%" };
    case 2:
      return { flexGrow: 0, flexBasis: "16.666667%", maxWidth: "16.666667%" };
    case 1:
      return { flexGrow: 0, flexBasis: "8.333333%", maxWidth: "8.333333%" };
    case 0:
      return { display: "none" };
    default:
      return null;
  }
};

// Update the block style when breakpoints are reached
export const updateFromProps = (props, size) => {
  let mods = {};

  // Dynamically update the style if a 'size' prop is given
  props[size] && (mods = { ...mods, ...updateSize(props[size]) });
  props.all && (mods = { ...mods, ...updateSize(props.all) });

  // Dynamically update the style if a 'justify' prop is given
  props.justify && (mods = { ...mods, ...updateJustify(props.justify) });

  // Add border radius if 'rounded' or 'round' props given
  if (props.rounded) {
    mods.borderRadius = "1rem";
  } else if (props.round) {
    mods.borderRadius = "50%";
  }

  //Add background color if 'bg' prop given
  props.bg && (mods.backgroundColor = props.bg);

  // Make background semi-transparent if 'translucent' prop given
  props.translucent && (mods.backgroundColor = makeTranslucent(props.bg));

  // Change flex-direction to vertical (for vertical Navs etc...)
  (props.vertical && props[size] !== "hidden") &&
    (mods = { ...mods, display: "flex", flexDirection: "column" });
  return mods;
};
