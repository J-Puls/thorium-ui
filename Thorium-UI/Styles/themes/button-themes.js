import { colors } from "./colors";

// Defines the dark / light button variants
export const button = {
  dark: {
    primary: {
      backgroundColor: colors.dark.primary,
      color: colors.dark.primaryText
    },
    secondary: {
      backgroundColor: colors.dark.secondary,
      color: colors.dark.secondaryText
    },
    success: {
      backgroundColor: colors.dark.success,
      color: colors.dark.successText
    },
    danger: {
      backgroundColor: colors.dark.danger,
      color: colors.light.dangerText
    },
    warning: {
      backgroundColor: colors.dark.warning,
      color: colors.dark.warningText
    },
    light: {
      backgroundColor: colors.neutral.medWhite,
      color: colors.neutral.pitchBlack
    },
    dark: {
      backgroundColor: colors.neutral.medGray,
      color: colors.neutral.pureWhite
    },
    link: {
      backgroundColor: "transparent",
      color: colors.dark.linkText
    }
  },
  light: {
    primary: {
      backgroundColor: colors.light.primary,
      color: colors.light.primaryText
    },
    secondary: {
      backgroundColor: colors.light.secondary,
      color: colors.light.secondaryText
    },
    success: {
      backgroundColor: colors.light.success,
      color: colors.light.successText
    },
    danger: {
      backgroundColor: colors.light.danger,
      color: colors.light.dangerText
    },
    warning: {
      backgroundColor: colors.light.warning,
      color: colors.light.warningText
    },
    light: {
      backgroundColor: colors.neutral.lightWhite,
      color: colors.neutral.almostBlack
    },
    dark: {
      backgroundColor: colors.neutral.darkGray,
      color: colors.neutral.lightWhite
    },
    link: {
      backgroundColor: "transparent",
      color: colors.light.linkText
    }
  }
};
