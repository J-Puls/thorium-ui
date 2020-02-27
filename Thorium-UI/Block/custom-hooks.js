export const updateBySize = (style, size) => {
  switch (size) {
    case 12:
      style.flex = "0 0 100%";
      style.maxWidth = "100%";
      break;
    case 9:
      style.flex = "0 0 75%";
      style.maxWidth = "75%";
      break;
    case 8:
      style.flex = "0 0 66.666667%";
      style.maxWidth = "66.666667%";
      break;
    case 6:
      style.flex = "0 0 50%";
      style.maxWidth = "50%";
      break;
    case 4:
      style.flex = "0 0 33.333333%";
      style.maxWidth = "33.333333%";
      break;
    case 3:
      style.flex = "0 0 25%";
      style.maxWidth = "25%";
      break;
  }
  return style;
};
