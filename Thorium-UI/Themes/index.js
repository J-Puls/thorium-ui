import { colors } from "./colors";
import { bodyThemes as body } from "./body";
import { buttonThemes as button } from "./button";
import { codeThemes as code } from "./code";
import { codeBlockThemes as codeBlock } from "./codeBlock";
import { dropdownThemes as dropdown } from "./dropdown";
import { inputThemes as input } from "./input";
import { linkThemes as link } from "./link";
import { navThemes as nav } from "./nav";
import { tableThemes as table } from "./table";
import { toggleSwitchThemes as toggleSwitch } from "./toggleSwitch";
import { tooltipThemes as tooltip } from "./tooltip";

const dark = {
  name: "dark",
  colors: colors.dark,
  body: body.dark,
  button: button.dark,
  code: code.dark,
  codeBlock: codeBlock.dark,
  dropdown: dropdown.dark,
  input: input.dark,
  link: link.dark,
  nav: nav.dark,
  table: table.dark,
  toggleSwitch: toggleSwitch.dark,
  tooltip: tooltip.dark,
};

const light = {
  name: "light",
  colors: colors.light,
  body: body.light,
  button: button.light,
  code: code.light,
  codeBlock: codeBlock.light,
  dropdown: dropdown.light,
  input: input.light,
  link: link.light,
  nav: nav.light,
  table: table.light,
  toggleSwitch: toggleSwitch.light,
  tooltip: tooltip.light,
};

// Export for inclusion in ThoriumContext
export const Themes = { dark, light };
export { colors } from "./colors";
export default Themes;
