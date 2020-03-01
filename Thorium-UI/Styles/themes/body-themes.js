import { colors } from "./colors";

/**
 * Body styling is diffrerent from other component styling.
 * Because it resides outside of the ThroiumRoot component,
 * it is explicitly updated in a hook when the ThoriumRoot theme
 * state changes.
 *
 * This requires us to use CSS naming conventions here, rather than JSX
 */

const defaultBody = {
  margin: "0",
  "font-family": "'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif"
};
export const body = {
  dark: {
    ...defaultBody,
    "background-color": colors.neutral.almostBlack,
    color: colors.neutral.pureWhite,
    "transition-duration": ".15s"
  },
  light: {
    ...defaultBody,
    "background-color": colors.neutral.pureWhite,
    color: colors.neutral.pitchBlack,
    "transition-duration": ".15s"
  }
};
