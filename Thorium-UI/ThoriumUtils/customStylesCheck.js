const success = `
Custom styles found.`;
const failure = `
Custom styles not found.
To use custom styles, create a customStyles.js file in the /src directory.`;

export const checkForCustomStyles = (theme) => {
  try {
    // eslint-disable-next-line
    const data = require("../../customStyles");
    console.info(success);
    if (typeof data.customStyles === "function") {
      return data.customStyles(theme);
    } else if (typeof data.customStyles === "object") {
      return data.customStyles;
    }
  } catch {
    console.info(failure);
    return null;
  }
};
