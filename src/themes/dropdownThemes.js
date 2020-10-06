import { colors } from "./colors";

export const dropdownDivider = {
  dark: {
    color: colors.dark.primary,
    fontWeight: 700
  },
  light: {
    color: colors.light.primary,
    fontWeight: 700
  }
};

export const dropdownItem = {
  dark: {
    hover: {
      backgroundColor: colors.neutral.b3,
      color: colors.dark.linkText
    },
    normal: {
      backgroundColor: colors.neutral.b2,
      color: colors.dark.linkText
    }
  },
  light: {
    hover: {
      backgroundColor: colors.neutral.w2,
      color: colors.light.linkText
    },
    normal: {
      backgroundColor: colors.neutral.w3,
      color: colors.light.linkText
    }
  }
};

export const dropdownLink = {
  dark: {
    hover: {
      backgroundColor: colors.neutral.b3,
      color: colors.dark.linkText
    },
    normal: {
      backgroundColor: colors.neutral.b2,
      color: colors.dark.linkText
    }
  },
  light: {
    hover: {
      backgroundColor: colors.neutral.w2,
      color: colors.light.linkText
    },
    normal: {
      backgroundColor: colors.neutral.w3,
      color: colors.light.linkText
    }
  }
};

export const dropdownMenu = {
  dark: {
    backgroundColor: colors.neutral.b2
  },
  light: {
    backgroundColor: colors.neutral.w3
  }
};

export const dropdownThemes = {
  dark: {
    divider: dropdownDivider.dark,
    item: dropdownItem.dark,
    link: dropdownLink.dark,
    menu: dropdownMenu.dark
  },
  light: {
    divider: dropdownDivider.light,
    item: dropdownItem.light,
    link: dropdownLink.light,
    menu: dropdownMenu.light
  }
};

export default dropdownThemes;
