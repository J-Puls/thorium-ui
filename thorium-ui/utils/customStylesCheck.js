const success = `\nCustom styles found.`;
const failure = `\nCustom styles not found.
To use custom styles, create a customStyles.js file in the root directory.`;

/**
 * Checks if a customStyles file exists, provides a warning if not.
 * @returns true or false
 */
export const checkForCustomStyles = () => {
  try {
    require.resolve("../customThemes.js");
    console.info(success);
    return true;
  } catch {
    console.info(failure);
    return false;
  }
};

/**
 * Checks if a customStyles file exists, provides a warning if not.
 * @returns An object containing the custom styles for the current theme
 */
export const getCustomStyles = (...args) => {
  try {
    const data = require("../../customStyles");
    if (typeof data.customStyles === "function") {
      return data.customStyles(...args);
    } else if (typeof data.customStyles === "object") {
      return data.customStyles;
    }
  } catch {
    console.info(failure);
    return null;
  }
};
