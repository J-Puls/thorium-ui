import { colors } from "./colors";

const mapThemes = (variant) => {
  const themes = { dark: null, light: null };
  for (let theme in themes) {
    themes[theme] = {
      hover: {
        backgroundColor: colors[theme][`${variant}Hover`],
        color:
          colors[theme][`${variant}TextHover`] ||
          colors[theme][`${variant}Text`],
      },
      normal: {
        backgroundColor: colors[theme][variant],
        color: colors[theme][`${variant}Text`],
      },
      disabled: {
        backgroundColor: `${colors[theme][variant]}aa`,
        color: colors[theme][`${variant}Text`],
      },
    };
  }
  return themes;
};

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
