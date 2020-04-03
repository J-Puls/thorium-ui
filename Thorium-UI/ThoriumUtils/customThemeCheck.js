const success = `Custom theme found.`;
const failure = `Custom theme not found. Using default theme.
To use a custom theme, create a customTheme.js file in the /src directory.`;

// Checks for customThemes.js in the '/src' directory. If found, it returns the object
export const customThemeCheck = () => {
  try {
    const data = require("../../customThemes");
    console.info(success);
    return data.customThemes;
  } catch {
    console.info(failure);
    return null;
  }
};
export default customThemeCheck;
