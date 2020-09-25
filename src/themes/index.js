import { colors } from './colors';
import { bodyThemes as body } from './bodyThemes';
import { buttonThemes as button } from './buttonThemes';
import { codeThemes as code } from './codeThemes';
import { codeBlockThemes as codeBlock } from './codeBlockThemes';
import { dropdownThemes as dropdown } from './dropdownThemes';
import { textInputThemes as textInput } from './textInputThemes';
import { linkThemes as link } from './linkThemes';
import { navThemes as nav } from './navThemes';
import { tableThemes as table } from './tableThemes';
import { toggleSwitchThemes as toggleSwitch } from './toggleSwitchThemes';
import { toolTipThemes as toolTip } from './toolTipThemes';
import { messageThemes as message } from './messageThemes';

export const darkTheme = {
  name: 'dark',
  colors: colors.dark,
  body: body.dark,
  button: button.dark,
  code: code.dark,
  codeBlock: codeBlock.dark,
  dropdown: dropdown.dark,
  textInput: textInput.dark,
  link: link.dark,
  nav: nav.dark,
  table: table.dark,
  toggleSwitch: toggleSwitch.dark,
  toolTip: toolTip.dark,
  message: message.dark
};

export const lightTheme = {
  name: 'light',
  colors: colors.light,
  body: body.light,
  button: button.light,
  code: code.light,
  codeBlock: codeBlock.light,
  dropdown: dropdown.light,
  textInput: textInput.light,
  link: link.light,
  nav: nav.light,
  table: table.light,
  toggleSwitch: toggleSwitch.light,
  toolTip: toolTip.light,
  message: message.light
};

// Export for inclusion in ThoriumContext
export const themes = { dark: darkTheme, light: lightTheme };

export { colors } from './colors';
export default themes;
