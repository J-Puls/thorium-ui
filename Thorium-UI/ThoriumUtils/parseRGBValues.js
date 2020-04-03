// Parses an HTML RGB string and returns an object with the individual values
export const parseRGBValues = rgb => {
  const parsed = rgb
    .replace("rgb(", "")
    .replace(")", "")
    .split(",");
  return { r: parsed[0], g: parsed[1], b: parsed[2] };
};
