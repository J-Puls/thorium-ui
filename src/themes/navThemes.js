import { colors } from "./colors";

const mapThemes = (variant) => {
  const themes = { dark: null, light: null };

  for (const theme in themes) {
    const opTheme = theme === "dark" ? "light" : "dark";
    themes[theme] = {
      active: {
        normal: {
          backgroundColor: colors[theme][variant],
          color: colors[theme][`${variant}Text`],
          fontWeight: 900
        },
        pills: {
          backgroundColor: colors[theme][variant],
          margin: "0 .25rem",
          borderRadius: ".25rem",
          color: colors[theme][`${variant}Text`],
          fontWeight: 900
        },
        tabs: {
          borderLeft: `1px solid ${colors[theme][variant]}`,
          borderRight: `1px solid ${colors[theme][variant]}`,
          borderTop: `1px solid ${colors[theme][variant]}`,
          color: colors[theme].linkText,
          backgroundColor: colors[theme][variant],
          fontWeight: 900
        }
      },
      hover: {
        normal: {
          backgroundColor: colors[theme][`${variant}Hover`],
          color: colors[theme][`${variant}Text`]
        },
        tabs: {
          borderLeft: `2px solid ${colors[theme][variant]}`,
          borderRight: `2px solid ${colors[theme][variant]}`,
          borderTop: `2px solid ${colors[theme][variant]}`
        },
        pills: {
          borderRadius: ".25rem",
          backgroundColor: colors[theme][variant],
          color: colors[theme][`${variant}Text`],
          margin: "0 .25rem"
        }
      },
      inactive: {
        normal: {
          backgroundColor: "transparent",
          color: colors[theme].linkText
        },
        tabs: { borderBottom: `2px solid ${colors[theme][variant]}` },
        pills: {
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

export const navLinkThemes = {
  dark: { color: colors.dark.linkText },
  light: { color: colors.light.linkText }
};

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
    },
    link: navLinkThemes.dark
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
    },
    link: navLinkThemes.light
  }
};

export default navThemes;
