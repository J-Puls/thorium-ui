import { hexToRGB, parseRGBValues, stringToRGB } from "../";

/**
 * Converts hexadecimal and rgb color string to the equivelant RGBa string with reduced opacity
 *
 * @param {String} color A hexadecimal or rgb() formatted color string
 * @returns {String} An rgba() formatted color string
 */
export const makeTranslucent = (color) => {
  const hex = /#/;
  const rgb = /(rgb\(\d{1,3}, \d{1,3}, \d{1,3}\))/;
  let rgbValues;
  if (color) {
    if (hex.test(color)) rgbValues = hexToRGB(color).values;
    else if (rgb.test(color)) rgbValues = parseRGBValues(color);
    else rgbValues = stringToRGB(color);
  }
  return `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, .85)`;
};
