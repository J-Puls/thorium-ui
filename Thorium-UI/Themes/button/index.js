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
const themes = {};

variants.forEach((variant) => {
  themes[variant] = mapThemes(variant);
});

export const buttonThemes = {
  dark: {
    danger: themes.danger.dark,
    dark: themes.dark.dark,
    light: themes.light.dark,
    link: themes.link.dark,
    primary: themes.primary.dark,
    secondary: themes.secondary.dark,
    success: themes.success.dark,
    warning: themes.warning.dark,
  },
  light: {
    danger: themes.danger.light,
    dark: themes.dark.light,
    light: themes.light.light,
    link: themes.link.light,
    primary: themes.primary.light,
    secondary: themes.secondary.light,
    success: themes.success.light,
    warning: themes.warning.light,
  },
};
export default buttonThemes;
