import { colors } from "./colors";

export const dark = {
  body: {
    "background-color": colors.neutral.almostBlack,
    color: colors.neutral.pureWhite,
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    margin: "0",
    "transition-duration": ".15s",
    "box-sizing": "border-box !important"
  },
  button: {
    normal: {
      danger: {
        backgroundColor: colors.dark.danger,
        color: colors.neutral.pureWhite
      },
      dark: {
        backgroundColor: colors.neutral.medGray,
        color: colors.neutral.pureWhite
      },
      light: {
        backgroundColor: colors.neutral.medWhite,
        color: colors.neutral.pitchBlack
      },
      link: {
        backgroundColor: "transparent",
        color: colors.dark.linkText
      },
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
      warning: {
        backgroundColor: colors.dark.warning,
        color: colors.dark.warningText
      }
    },
    hover: {
      danger: {
        backgroundColor: colors.dark.dangerHover,
        color: colors.neutral.pureWhite
      },
      dark: {
        backgroundColor: colors.neutral.darkGray,
        color: colors.neutral.pureWhite
      },
      light: {
        backgroundColor: colors.neutral.lightGray,
        color: colors.neutral.pitchBlack
      },
      link: {
        backgroundColor: "transparent",
        color: colors.neutral.lightGray
      },
      primary: {
        backgroundColor: colors.dark.primaryHover,
        color: colors.dark.primaryText
      },
      secondary: {
        backgroundColor: colors.dark.secondaryHover,
        color: colors.dark.secondaryText
      },
      success: {
        backgroundColor: colors.dark.successHover,
        color: colors.dark.successText
      },
      warning: {
        backgroundColor: colors.dark.warningHover,
        color: colors.dark.warningText
      }
    }
  },
  codeblock: {
    backgroundColor: colors.neutral.darkGray
  },
  colors: colors.dark,
  dropdown: {
    divider: {
      backgroundColor: "#222222"
    },
    item: {
      hover: {
        backgroundColor: "#2f2f2f",
        color: colors.dark.linkText
      },
      normal: {
        backgroundColor: "#222222",
        color: colors.dark.linkText
      }
    },
    link: {
      hover: {
        backgroundColor: "#2f2f2f",
        color: colors.dark.linkText
      },
      normal: {
        backgroundColor: "#222222",
        color: colors.dark.linkText
      }
    },
    menu: {
      backgroundColor: "#222222"
    }
  },
  input: {
    backgroundColor: colors.neutral.darkGray,
    color: "#fafafa"
  },
  link: {
    color: colors.dark.linkText
  },
  name: "dark",
  nav: {
    link: {
      hover: {
        color: colors.neutral.lightGray
      },
      normal: {
        color: colors.dark.linkText
      }
    }
  }
};
