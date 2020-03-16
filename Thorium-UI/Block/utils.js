import { updateJustify, makeBGTranslucent } from "../ThoriumUtils";

// Update component width based on viewport size
const updateSize = size => {
  switch (size) {
    case 12:
      return { flex: "0 0 100%", maxWidth: "100%" };
    case 11:
      return { flex: "0 0 91.666667%", maxWidth: "91.666667%" };
    case 10:
      return { flex: "0 0 83.333333%", maxWidth: "83.333333%" };
    case 9:
      return { flex: "0 0 75%", maxWidth: "75%" };
    case 8:
      return { flex: "0 0 66.666667%", maxWidth: "66.666667%" };
    case 7:
      return { flex: "0 0 58.333333%", maxWidth: "58.333333%" };
    case 6:
      return { flex: "0 0 50%", maxWidth: "50%" };
    case 5:
      return { flex: "0 0 41.666667%", maxWidth: "41.666667%" };
    case 4:
      return { flex: "0 0 33.333333%", maxWidth: "33.333333%" };
    case 3:
      return { flex: "0 0 25%", maxWidth: "25%" };
    case 2:
      return { flex: "0 0 16.666667%", maxWidth: "16.666667%" };
    case 1:
      return { flex: "0 0 8.333333%", maxWidth: "8.333333%" };
    default:
      return null;
  }
};

// Update the block style when breakpoints are reached
export const updateFromProps = (props, vs) => {
  let updated = {};

  // Dynamically update the style if a 'size' prop is given
  props[vs] && (updated = { ...updated, ...updateSize(props[vs]) });
  props.all && (updated = { ...updated, ...updateSize(props.all) });

  // Dynamically update the style if a 'justify' prop is given
  props.justify && (updated = { ...updated, ...updateJustify(props.justify) });

  // Add border radius if 'rounded' or 'round' props given
  if (props.rounded) {
    updated.borderRadius = "1rem";
  } else if (props.round) {
    updated.borderRadius = "50%";
  }

  //Add background color if 'bg' prop given
  props.bg && (updated.backgroundColor = props.bg);

  // Make background semi-transparent if 'translucent' prop given
  props.translucent && (updated.backgroundColor = makeBGTranslucent(props.bg));

  // Change flex-direction to vertical (for vertical Navs etc...)
  props.vertical &&
    (updated = { ...updated, display: "flex", flexDirection: "column" });
    
  return updated;
};
