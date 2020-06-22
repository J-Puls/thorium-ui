const success = `\nCustom styles found.`;
const failure = `\nCustom styles not found.
To use custom styles, create a customStyles.js file in the /src directory.`;

/**
 * Checks if a customStyles file exists, provides a warning if not.
 * @returns An object containing the custom styles, or null
 */
export const checkForCustomStyles = (...args) => {
  try {
    // eslint-disable-next-line
    const data = require("../../../customStyles");
    console.info(success);
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
