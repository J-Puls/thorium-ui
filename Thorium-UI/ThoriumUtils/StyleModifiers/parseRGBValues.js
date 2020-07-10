/**
 * Parses an rgb(r, g, b) formatted color string and returns an object containing the individual values
 * @param {String} rgb An rgb(r, g, b) formatted color string
 * @returns { Object } {r, g, b} An object containing the parsed values of the color string
 */
export const parseRGBValues = (rgb) => {
  const parsed = rgb.replace("rgb(", "").replace(")", "").split(",");
  return { r: parsed[0], g: parsed[1], b: parsed[2] };
};
