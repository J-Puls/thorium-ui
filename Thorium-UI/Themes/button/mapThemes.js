import { colors } from "../colors";

export const mapThemes = (variant) => {
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
        backgroundColor: colors[theme].disabled,
        color: colors[theme].disabledText,
      },
    };
  }
  return themes;
};
