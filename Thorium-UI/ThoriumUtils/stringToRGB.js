import { parseRGBValues } from "./parseRGBValues";

// Converts HTML standard color name strings to RGB string format
export const stringToRGB = str => {
  const e = document.createElement("div");
  e.style.color = str;
  document.body.appendChild(e);
  const calcColor = window.getComputedStyle(e).color;
  const rgbValues = parseRGBValues(calcColor);
  document.body.removeChild(e);
  return rgbValues;
};
