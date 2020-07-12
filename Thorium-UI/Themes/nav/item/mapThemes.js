import { colors } from "../../colors";

export const mapThemes = (variant) => {
  const themes = { dark: null, light: null };
  for (let theme in themes) {
    themes[theme] = {
      active: {
        normal: {
          backgroundColor: colors[theme][variant],
          color: colors[theme][`${variant}Text`],
          fontWeight: 900,
        },
        pills: {
          backgroundColor: colors[theme][variant],
          margin: "0 .25rem",
          borderRadius: ".25rem",
          color: colors[theme][`${variant}Text`],
          fontWeight: 900,
        },
        tabs: {
          borderLeft: `1px solid ${colors[theme][variant]}`,
          borderRight: `1px solid ${colors[theme][variant]}`,
          borderTop: `1px solid ${colors[theme][variant]}`,
          color: colors.neutral.b0,
          fontWeight: 900,
        },
      },
      hover: {
        normal: {
          backgroundColor: colors[theme][`${variant}Hover`],
          color: colors[theme][`${variant}Text`],
        },
        tabs: {
          borderLeft: `2px solid ${colors[theme][variant]}`,
          borderRight: `2px solid ${colors[theme][variant]}`,
          borderTop: `2px solid ${colors[theme][variant]}`,
        },
        pills: {
          borderRadius: ".25rem",
          backgroundColor: colors[theme][variant],
          color: colors[theme][`${variant}Text`],
          margin: "0 .25rem",
        },
      },
      inactive: {
        normal: {
          backgroundColor: "transparent",
        },
        tabs: { borderBottom: `2px solid ${colors[theme][variant]}` },
        pills: {
          boxShadow: `0 0 0 2px inset ${colors[theme][variant]}`,
          borderRadius: ".25rem",
          margin: "0 .25rem",
        },
      },
    };
  }
  return themes;
};
