/* Utils */
import { parseRGBValues } from "./parseRGBValues";

/**
 * Converts HTML standard color name strings to RGB string format
 * @param {String} str A valid HTML color name (eg. "blue")
 * @returns { Object } {r, g, b} An object containing equivelant RGB values
 */
export const stringToRGB = (str) => {
  const e = document.createElement("div");
  e.style.color = str;
  document.body.appendChild(e);

  const calcColor = window.getComputedStyle(e).color;
  const rgbValues = parseRGBValues(calcColor);
  document.body.removeChild(e);
  return rgbValues;
};
export default stringToRGB;
