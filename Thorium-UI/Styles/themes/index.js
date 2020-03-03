import { button } from "./button-themes";
import { body } from "./body-themes";
import { link } from "./link-themes";

// Centralizes all component theme styling
export const themes = {
  dark: {
    body: body.dark,
    button: button.dark,
    link: link.dark
  },
  light: {
    body: body.light,
    button: button.light,
    link: link.light
  }
};
