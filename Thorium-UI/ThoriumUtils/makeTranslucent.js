import { hexToRGB, parseRGBValues, stringToRGB } from ".";

/**
 * Checks the format of the given color string, and converts
 * to the equivelant RGBa string with slight transparancy
*/
export const makeTranslucent = color => {
  const hex = /#/;
  const rgb = /(rgb\(\d{1,3}, \d{1,3}, \d{1,3}\))/;
  let rgbValues;
  if (color) {
    if (hex.test(color)) rgbValues = hexToRGB(color);
    else if (rgb.test(color)) rgbValues = parseRGBValues(color);
    else rgbValues = stringToRGB(color);
  }
  return `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, .85)`;
};
