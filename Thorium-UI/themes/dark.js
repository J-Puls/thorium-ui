import { colors } from "./colors";

export const dark = {
  name: "dark",
  colors: colors.dark,
  body: {
    margin: "0",
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    "background-color": colors.neutral.almostBlack,
    color: colors.neutral.pureWhite,
    "transition-duration": ".15s"
  },
  button: {
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
  codeblock: {
    backgroundColor: colors.neutral.darkGray
  },
  input: {
    backgroundColor: colors.neutral.darkGray,
    color: "#fafafa"
  },
  link: {
    color: colors.dark.linkText
  },
  dropdown: {
    item: {
      normal: { color: colors.dark.linkText, backgroundColor: "#222222" },
      hover: { color: colors.dark.linkText, backgroundColor: "#2f2f2f" }
    },
    link: {
      normal: { color: colors.dark.linkText, backgroundColor: "#222222" },
      hover: { color: colors.dark.linkText, backgroundColor: "#2f2f2f" }
    },
    divider: {
      backgroundColor: "#222222"
    }
  }
};
