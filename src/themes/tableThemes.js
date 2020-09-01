import { colors } from "./colors";

export const tableRowThemes = {
  dark: {
    striped: {
      backgroundColor: colors.neutral.b1,
    },
  },
  light: {
    striped: {
      backgroundColor: colors.neutral.w2,
    },
  },
};

export const tableThemes = {
  dark: {
    row: tableRowThemes.dark,
  },
  light: {
    row: tableRowThemes.light,
  },
};

export default tableThemes;
