import { colors } from "./colors";

export const linkThemes = {
  dark: {
    wrapper: {
      boxShadow: `0 2px 0 0 ${colors.dark.primary}`,
    },
    text: {
      color: colors.dark.primary,
    },
  },
  light: {
    wrapper: {
      boxShadow: `0 2px 0 0 ${colors.light.primary}`,
    },
    text: {
      color: colors.light.primary,
    },
  },
};
