import { colors } from "./colors";

export const light = {
  name: "light",
  colors: colors.light,
  body: {
    margin: "0",
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    "background-color": colors.neutral.pureWhite,
    color: colors.neutral.pitchBlack,
    "transition-duration": ".15s"
  },
  button: {
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
  },
  codeblock: {
    backgroundColor: colors.neutral.lightWhite
  },
  input: {
    backgroundColor: colors.neutral.lightWhite,
    color: "#000000"
  },
  link: {
    color: colors.light.linkText
  },
  dropdown: {
    item: {
      normal: { color: colors.light.linkText, backgroundColor: "#dddddd" },
      hover: { color: colors.light.linkText, backgroundColor: "#f0f0f0" }
    },
    link: {
      normal: { color: colors.light.linkText, backgroundColor: "#dddddd" },
      hover: { color: colors.light.linkText, backgroundColor: "#f0f0f0" }
    },
    divider: {
      backgroundColor: "#dddddd"
    }
  }
};
