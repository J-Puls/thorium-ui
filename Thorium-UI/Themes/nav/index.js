import item from "./item";
import { linkThemes as link } from "./link";

export const navThemes = {
  dark: {
    item: {
      danger: item.danger.dark,
      dark: item.dark.dark,
      light: item.light.dark,
      link: item.link.dark,
      primary: item.primary.dark,
      secondary: item.secondary.dark,
      success: item.success.dark,
      warning: item.warning.dark,
    },
    link: link.dark,
  },
  light: {
    item: {
      danger: item.danger.light,
      dark: item.dark.light,
      light: item.light.light,
      link: item.link.light,
      primary: item.primary.light,
      secondary: item.secondary.light,
      success: item.success.light,
      warning: item.warning.light,
    },
    link: link.light,
  },
};
