import { colors } from "./colors";

/**
 * Body styling is diffrerent from other component styling. Because
 * it resides outside of the ThroiumRoot component, it is explicitly
 * updated in a hook when the ThoriumRoot theme state changes
 */
export const body = {
  dark: {
    "background-color": colors.neutral.almostBlack,
    color: colors.neutral.pureWhite,
    "transition-duration": ".15s"
  },
  light: {
    "background-color": colors.neutral.pureWhite,
    color: colors.neutral.pitchBlack,
    "transition-duration": ".15s"
  }
};
