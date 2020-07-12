import { mapThemes } from "./mapThemes";

const variants = [
  "dark",
  "danger",
  "light",
  "link",
  "primary",
  "secondary",
  "success",
  "warning",
];
const itemThemes = {};

variants.forEach((variant) => {
  itemThemes[variant] = mapThemes(variant);
});

export default itemThemes;
