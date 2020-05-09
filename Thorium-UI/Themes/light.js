import { colors } from "./colors";

export const light = {
  body: {
    "background-color": colors.neutral.pureWhite,
    color: colors.neutral.pitchBlack,
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    margin: "0",
    "transition-duration": ".15s",
  },
  button: {
    normal: {
      danger: {
        backgroundColor: colors.light.danger,
        color: colors.neutral.pureWhite,
      },
      dark: {
        backgroundColor: colors.neutral.medGray,
        color: colors.neutral.pureWhite,
      },
      light: {
        backgroundColor: colors.neutral.medWhite,
        color: colors.neutral.pitchBlack,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.light.linkText,
      },
      primary: {
        backgroundColor: colors.light.primary,
        color: colors.neutral.pureWhite,
      },
      secondary: {
        backgroundColor: colors.light.secondary,
        color: colors.neutral.pureWhite,
      },
      success: {
        backgroundColor: colors.light.success,
        color: colors.neutral.pureWhite,
      },
      warning: {
        backgroundColor: colors.light.warning,
        color: colors.neutral.pitchBlack,
      },
    },
    hover: {
      danger: {
        backgroundColor: colors.light.dangerHover,
        color: colors.neutral.pureWhite,
      },
      dark: {
        backgroundColor: colors.neutral.darkGray,
        color: colors.neutral.pureWhite,
      },
      light: {
        backgroundColor: colors.neutral.darkWhite,
        color: colors.neutral.pitchBlack,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.neutral.darkGray,
      },
      primary: {
        backgroundColor: colors.light.primaryHover,
        color: colors.light.primaryText,
      },
      secondary: {
        backgroundColor: colors.light.secondaryHover,
        color: colors.light.secondaryText,
      },
      success: {
        backgroundColor: colors.light.successHover,
        color: colors.light.successText,
      },
      warning: {
        backgroundColor: colors.light.warningHover,
        color: colors.light.warningText,
      },
    },
  },
  codeblock: {
    backgroundColor: colors.neutral.lightWhite,
    color: colors.light.secondary,
    boxShadow: "2px 2px 2px 0px #00000055 inset",
  },
  colors: colors.light,
  dropdown: {
    divider: {
      backgroundColor: "#dddddd",
    },
    item: {
      hover: {
        backgroundColor: "#f0f0f0",
        color: colors.light.linkText,
      },
      normal: {
        backgroundColor: "#dddddd",
        color: colors.light.linkText,
      },
    },
    link: {
      hover: {
        backgroundColor: "#f0f0f0",
        color: colors.light.linkText,
      },
      normal: {
        backgroundColor: "#dddddd",
        color: colors.light.linkText,
      },
    },
    menu: {
      backgroundColor: "#dddddd",
    },
  },
  input: {
    backgroundColor: colors.neutral.medWhite,
    color: colors.neutral.pitchBlack,
  },
  link: {
    color: colors.light.linkText,
  },
  name: "light",
  nav: {
    link: {
      hover: {
        color: colors.neutral.darkGray,
      },
      normal: {
        color: colors.light.linkText,
      },
    },
  },
};
