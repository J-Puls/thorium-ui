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
  }
};

const updateJustify = justify => {
  let x = { display: "flex", alignItems: "baseline" };
  switch (justify) {
    case "center":
      return { ...x, justifyContent: "center" };
    case "start":
      return { ...x, justifyContent: "flex-start" };
    case "end":
      return { ...x, justifyContent: "flex-end" };
    case "around":
      return { ...x, justifyContent: "space-around" };
    case "between":
      return { ...x, justifyContent: "space-between" };
  }
};

const hexToRgb = hex => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

const parseRGBValues = rgb => {
  const parsed = rgb
    .replace("rgb(", "")
    .replace(")", "")
    .split(",");
  return { r: parsed[0], g: parsed[1], b: parsed[2] };
};

const stringToRgb = str => {
  const e = document.createElement("div");
  e.style.color = str;
  document.body.appendChild(e);
  const calcColor = window.getComputedStyle(e).color;
  const rgbValues = parseRGBValues(calcColor);
  document.body.removeChild(e);
  return rgbValues;
};

const updateTransparancy = color => {
  const hex = /#/;
  const rgb = /(rgb\(\d{1,3}, \d{1,3}, \d{1,3}\))/;
  let rgbValues;
  if (color) {
    if (hex.test(color)) rgbValues = hexToRgb(color);
    else if (rgb.test(color)) rgbValues = parseRGBValues(color);
    else rgbValues = stringToRgb(color);
  }
  return {
    backgroundColor: `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, .5)`
  };
};

// Update the block style when breakpoints are reached
export const updateFromProps = (props, vs) => {
  let updated = {};

  // Dynamically update the style if a 'size' prop is given
  props[vs] && (updated = { ...updated, ...updateSize(props[vs]) });

  // Dynamically update the style if a 'justify' prop is given
  props["justify"] &&
    (updated = { ...updated, ...updateJustify(props.justify) });
  // Dynamically update the style if a 'justify' prop is given
  if (props["rounded"]) {
    updated.borderRadius = "1rem";
  } else if (props["round"]) {
    updated.borderRadius = "50%";
  }
  props["bg"] && (updated.backgroundColor = props.bg);
  props["translucent"] &&
    (updated = { ...updated, ...updateTransparancy(props.bg) });
  return updated;
};
