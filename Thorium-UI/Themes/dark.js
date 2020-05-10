import { colors } from "./colors";

export const dark = {
  body: {
    "background-color": colors.neutral.almostBlack,
    color: colors.neutral.pureWhite,
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    margin: "0",
    "transition-duration": ".15s",
    "box-sizing": "border-box !important",
  },
  button: {
    normal: {
      danger: {
        backgroundColor: colors.dark.danger,
        color: colors.neutral.pitchBlack,
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
        color: colors.dark.linkText,
      },
      primary: {
        backgroundColor: colors.dark.primary,
        color: colors.neutral.pitchBlack,
      },
      secondary: {
        backgroundColor: colors.dark.secondary,
        color: colors.neutral.pitchBlack,
      },
      success: {
        backgroundColor: colors.dark.success,
        color: colors.neutral.pitchBlack,
      },
      warning: {
        backgroundColor: colors.dark.warning,
        color: colors.neutral.pitchBlack,
      },
    },
    hover: {
      danger: {
        backgroundColor: colors.dark.dangerHover,
        color: colors.neutral.pitchBlack,
      },
      dark: {
        backgroundColor: colors.neutral.darkGray,
        color: colors.neutral.pureWhite,
      },
      light: {
        backgroundColor: colors.neutral.lightGray,
        color: colors.neutral.pitchBlack,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.neutral.lightGray,
      },
      primary: {
        backgroundColor: colors.dark.primaryHover,
        color: colors.neutral.pitchBlack,
      },
      secondary: {
        backgroundColor: colors.dark.secondaryHover,
        color: colors.neutral.pitchBlack,
      },
      success: {
        backgroundColor: colors.dark.successHover,
        color: colors.neutral.pitchBlack,
      },
      warning: {
        backgroundColor: colors.dark.warningHover,
        color: colors.neutral.pitchBlack,
      },
    },
  },
  codeblock: {
    backgroundColor: colors.neutral.darkGray,
    color: colors.dark.secondary,
    boxShadow: "2px 2px 2px 0px #000000aa",
  },
  colors: colors.dark,
  dropdown: {
    divider: {
      body: { backgroundColor: "#222222" },
      label: { color: colors.dark.primary, fontWeight: 700 },
    },
    item: {
      hover: {
        backgroundColor: "#2f2f2f",
        color: colors.dark.linkText,
      },
      normal: {
        backgroundColor: "#222222",
        color: colors.dark.linkText,
      },
    },
    link: {
      hover: {
        backgroundColor: "#2f2f2f",
        color: colors.dark.linkText,
      },
      normal: {
        backgroundColor: "#222222",
        color: colors.dark.linkText,
      },
    },
    menu: {
      backgroundColor: "#222222",
    },
  },
  input: {
    backgroundColor: colors.neutral.darkGray,
    color: "#fafafa",
  },
  link: {
    color: colors.dark.linkText,
  },
  name: "dark",
  nav: {
    link: {
      hover: {
        color: colors.neutral.lightGray,
      },
      normal: {
        color: colors.dark.linkText,
      },
    },
  },
};
