// Dynamically update the style if a 'size' prop is given
export const updateBySize = (style, size) => {
  const styleCopy = {...style};
  switch (size) {
    case 12:
      styleCopy.flex = "0 0 100%";
      styleCopy.maxWidth = "100%";
      break;
    case 9:
      styleCopy.flex = "0 0 75%";
      styleCopy.maxWidth = "75%";
      break;
    case 8:
      styleCopy.flex = "0 0 66.666667%";
      styleCopy.maxWidth = "66.666667%";
      break;
    case 6:
      styleCopy.flex = "0 0 50%";
      styleCopy.maxWidth = "50%";
      break;
    case 4:
      styleCopy.flex = "0 0 33.333333%";
      styleCopy.maxWidth = "33.333333%";
      break;
    case 3:
      styleCopy.flex = "0 0 25%";
      styleCopy.maxWidth = "25%";
      break;
    default:
      break;
  }
  return styleCopy;
};
