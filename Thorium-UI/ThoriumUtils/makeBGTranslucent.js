import { hexToRGB, parseRGBValues, stringToRGB } from "./";

export const makeBGTranslucent = color => {
  const hex = /#/;
  const rgb = /(rgb\(\d{1,3}, \d{1,3}, \d{1,3}\))/;
  let rgbValues;
  if (color) {
    if (hex.test(color)) rgbValues = hexToRGB(color);
    else if (rgb.test(color)) rgbValues = parseRGBValues(color);
    else rgbValues = stringToRGB(color);
  }
  return `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, .5)`;
};
