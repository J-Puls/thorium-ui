import { colors } from "./colors";

export const light = {
  body: {
    "background-color": colors.neutral.w4,
    color: colors.neutral.b0,
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    margin: "0",
    "transition-duration": ".15s",
  },
  button: {
    disabled: {
      backgroundColor: colors.neutral.g2,
      color: colors.neutral.w1,
    },
    hover: {
      danger: {
        backgroundColor: colors.light.dangerHover,
        color: colors.neutral.w4,
      },
      dark: {
        backgroundColor: colors.neutral.b3,
        color: colors.neutral.w4,
      },
      light: {
        backgroundColor: colors.neutral.w1,
        color: colors.neutral.b0,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.neutral.g1,
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
    normal: {
      danger: {
        backgroundColor: colors.light.danger,
        color: colors.neutral.w4,
      },
      dark: {
        backgroundColor: colors.neutral.b5,
        color: colors.neutral.w4,
      },
      light: {
        backgroundColor: colors.neutral.w3,
        color: colors.neutral.b0,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.light.linkText,
      },
      primary: {
        backgroundColor: colors.light.primary,
        color: colors.neutral.w4,
      },
      secondary: {
        backgroundColor: colors.light.secondary,
        color: colors.neutral.w4,
      },
      success: {
        backgroundColor: colors.light.success,
        color: colors.neutral.w4,
      },
      warning: {
        backgroundColor: colors.light.warning,
        color: colors.neutral.b0,
      },
    },
  },
  codeblock: {
    backgroundColor: colors.neutral.w3,
    boxShadow: `2px 2px 5px 0px ${colors.neutral.g1} inset`,
    color: colors.neutral.b0,
  },
  colors: colors.light,
  dropdown: {
    divider: {
      body: {
        backgroundColor: colors.neutral.w3,
      },
      label: {
        color: colors.light.primary,
        fontWeight: 700,
      },
    },
    item: {
      hover: {
        backgroundColor: colors.neutral.w2,
        color: colors.light.linkText,
      },
      normal: {
        backgroundColor: colors.neutral.w3,
        color: colors.light.linkText,
      },
    },
    link: {
      hover: {
        backgroundColor: colors.neutral.w2,
        color: colors.light.linkText,
      },
      normal: {
        backgroundColor: colors.neutral.w3,
        color: colors.light.linkText,
      },
    },
    menu: {
      backgroundColor: colors.neutral.w3,
    },
  },
  input: {
    backgroundColor: colors.neutral.w3,
    color: colors.neutral.b0,
    outlineColor: colors.light.primaryHover,
  },
  link: {
    color: colors.light.linkText,
  },
  name: "light",
  nav: {
    item: {
      active: {
        backgroundColor: colors.neutral.medWhite,
      },
    },
    link: {
      active: {
        backgroundColor: colors.neutral.w2,
        color: colors.neutral.b0,
        fontWeight: 900,
      },
      hover: {
        backgroundColor: colors.neutral.w2,
        color: colors.neutral.b3,
      },
      normal: {
        color: colors.light.linkText,
      },
    },
  },
  toolTip: {
    backgroundColor: colors.neutral.b0,
    color: colors.neutral.w4,
  },
};
