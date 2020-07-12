import { dividerThemes as divider } from "./divider";
import { itemThemes as item } from "./item";
import { linkThemes as link } from "./link";
import { menuThemes as menu } from "./menu";

export const dropdownThemes = {
  dark: {
    divider: divider.dark,
    item: item.dark,
    link: link.dark,
    menu: menu.dark,
  },
  light: {
    divider: divider.light,
    item: item.light,
    link: link.light,
    menu: menu.light,
  },
};
