import { colors } from "../colors";

export const toggleSwitchThemes = {
  dark: {
    off: {
      backgroundColor: colors.neutral.b3,
    },
    on: {
      danger: {
        backgroundColor: colors.dark.danger,
      },
      primary: {
        backgroundColor: colors.dark.primary,
      },
      secondary: {
        backgroundColor: colors.dark.secondary,
      },
      success: {
        backgroundColor: colors.dark.success,
      },
      warning: {
        backgroundColor: colors.dark.warning,
      },
    },
    themeToggle: {
      backgroundColor: "#2c189e",
    },
  },
  light: {
    off: {
      backgroundColor: colors.neutral.w2,
    },
    on: {
      danger: {
        backgroundColor: colors.light.danger,
      },
      primary: {
        backgroundColor: colors.light.primary,
      },
      secondary: {
        backgroundColor: colors.light.secondary,
      },
      success: {
        backgroundColor: colors.light.success,
      },
      warning: {
        backgroundColor: colors.light.warning,
      },
    },
    themeToggle: {
      backgroundColor: "#fffd6e",
    },
  },
};
