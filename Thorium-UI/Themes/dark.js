import { colors } from "./colors";

// Defines the "dark" color scheme
export const dark = {
  body: {
    "background-color": colors.neutral.b2,
    "box-sizing": "border-box !important",
    color: colors.neutral.w4,
    "font-family": "'Lato', 'Roboto', Arial, sans-serif",
    margin: "0",
    "transition-duration": ".15s",
  },
  button: {
    disabled: {
      backgroundColor: colors.neutral.b4,
      color: colors.neutral.g3,
    },
    hover: {
      danger: {
        backgroundColor: colors.dark.dangerHover,
        color: colors.neutral.b0,
      },
      dark: {
        backgroundColor: colors.neutral.b4,
        color: colors.neutral.w4,
      },
      light: {
        backgroundColor: colors.neutral.g4,
        color: colors.neutral.b0,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.neutral.g2,
      },
      primary: {
        backgroundColor: colors.dark.primaryHover,
        color: colors.neutral.b0,
      },
      secondary: {
        backgroundColor: colors.dark.secondaryHover,
        color: colors.neutral.b0,
      },
      success: {
        backgroundColor: colors.dark.successHover,
        color: colors.neutral.b0,
      },
      warning: {
        backgroundColor: colors.dark.warningHover,
        color: colors.neutral.b0,
      },
    },
    normal: {
      danger: {
        backgroundColor: colors.dark.danger,
        color: colors.neutral.b0,
      },
      dark: {
        backgroundColor: colors.neutral.g0,
        color: colors.neutral.w4,
      },
      light: {
        backgroundColor: colors.neutral.w2,
        color: colors.neutral.b0,
      },
      link: {
        backgroundColor: "transparent",
        color: colors.dark.linkText,
      },
      primary: {
        backgroundColor: colors.dark.primary,
        color: colors.neutral.b0,
      },
      secondary: {
        backgroundColor: colors.dark.secondary,
        color: colors.neutral.b0,
      },
      success: {
        backgroundColor: colors.dark.success,
        color: colors.neutral.b0,
      },
      warning: {
        backgroundColor: colors.dark.warning,
        color: colors.neutral.b0,
      },
    },
  },
  codeblock: {
    backgroundColor: colors.neutral.b1,
    boxShadow: `2px 2px 5px 0px ${colors.neutral.b0} inset`,
    color: colors.neutral.w4,
  },
  colors: colors.dark,
  dropdown: {
    divider: {
      label: {
        color: colors.dark.primary,
        fontWeight: 700,
      },
    },
    item: {
      hover: {
        backgroundColor: colors.neutral.b3,
        color: colors.dark.linkText,
      },
      normal: {
        backgroundColor: colors.neutral.b2,
        color: colors.dark.linkText,
      },
    },
    link: {
      hover: {
        backgroundColor: colors.neutral.b3,
        color: colors.dark.linkText,
      },
      normal: {
        backgroundColor: colors.neutral.b2,
        color: colors.dark.linkText,
      },
    },
    menu: {
      backgroundColor: colors.neutral.b2,
    },
  },
  input: {
    backgroundColor: colors.neutral.b3,
    color: colors.neutral.w4,
    outlineColor: colors.dark.primaryHover,
  },
  link: {
    color: colors.dark.linkText,
  },
  name: "dark",
  nav: {
    item: {
      active: {
        backgroundColor: colors.neutral.b1,
      },
    },
    link: {
      active: {
        backgroundColor: colors.neutral.b1,
        color: colors.neutral.w4,
        fontWeight: 900,
      },
      hover: {
        backgroundColor: colors.neutral.b2,
        color: colors.neutral.g4,
      },
      normal: {
        color: colors.dark.linkText,
      },
    },
  },
  table: {
    row: {
      striped: {
        backgroundColor: colors.neutral.b1,
      },
    },
  },
  toggleSwitch: {
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
  toolTip: {
    backgroundColor: colors.neutral.b0,
    color: colors.neutral.w4,
  },
};
