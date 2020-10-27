import { colors } from "./colors";

const mapThemes = (variant) => {
  const themes = { dark: null, light: null };

  for (const theme in themes) {
    themes[theme] = {
      active: {
        normal: {
          backgroundColor: colors[theme][variant],
          color: colors[theme][`${variant}Text`],
          fontWeight: 700
        },
        pills: {
          backgroundColor: colors[theme][variant],
          margin: "0 .25rem",
          borderRadius: ".25rem",
          color: colors[theme][`${variant}Text`],
          fontWeight: 700
        },
        tabs: {
          color: colors[theme][`${variant}Text`],
          backgroundColor: colors[theme][variant],
          fontWeight: 700
        }
      },
      hover: {
        normal: {
          backgroundColor: colors[theme][`${variant}Hover`],
          color: colors[theme][`${variant}HoverText`]
        },
        tabs: {
          boxShadow: ` 0px 3px 0px 3px inset ${colors[theme][variant]}`,
          color: colors[theme].linkText
        },
        pills: {
          borderRadius: ".25rem",
          backgroundColor: colors[theme][`${variant}Hover`],
          color: colors[theme][`${variant}HoverText`],
          margin: "0 .25rem"
        }
      },
      inactive: {
        normal: {
          backgroundColor: "transparent",
          color: colors[theme].linkText
        },
        tabs: {
          boxShadow: `inset ${colors[theme][variant]} 0px -3px 0px 0px`,
          color: colors[theme].linkText
        },
        pills: {
          color: colors[theme].linkText,
          boxShadow: `0 0 0 2px inset ${colors[theme][variant]}`,
          borderRadius: ".25rem",
          margin: "0 .25rem"
        }
      }
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
  "warning"
];
const itemThemes = {};
variants.forEach((variant) => {
  itemThemes[variant] = mapThemes(variant);
});

export const navItemThemes = itemThemes;

export const navThemes = {
  dark: {
    item: {
      danger: navItemThemes.danger.dark,
      dark: navItemThemes.dark.dark,
      light: navItemThemes.light.dark,
      link: navItemThemes.link.dark,
      primary: navItemThemes.primary.dark,
      secondary: navItemThemes.secondary.dark,
      success: navItemThemes.success.dark,
      warning: navItemThemes.warning.dark
    }
  },
  light: {
    item: {
      danger: navItemThemes.danger.light,
      dark: navItemThemes.dark.light,
      light: navItemThemes.light.light,
      link: navItemThemes.link.light,
      primary: navItemThemes.primary.light,
      secondary: navItemThemes.secondary.light,
      success: navItemThemes.success.light,
      warning: navItemThemes.warning.light
    }
  }
};

export default navThemes;
