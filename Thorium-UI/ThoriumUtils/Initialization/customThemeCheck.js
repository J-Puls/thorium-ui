const success = `\nCustom theme found.`;
const failure = `\nCustom themes not found.
To use custom styles, create a customThemes.js file in the /src directory.`;

/**
 * Checks if a customThemes file exists, provides a warning if not.
 * @returns An object containing the custom themes, or null
 */
export const customThemeCheck = () => {
  try {
    const data = require("../../../customThemes");
    console.info(success);
    return data.customThemes;
  } catch {
    console.info(failure);
    return null;
  }
};
export default customThemeCheck;
