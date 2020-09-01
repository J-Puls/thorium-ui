const warning = `Motion components require framer-motion.
If you intend to use them, run the following command in the terminal
npm i --save framer-motion`;

/**
 * Checks if React Router is installed, provides a warning if not.
 * @returns true or false
 */
export const checkForFramer = () => {
  try {
    require.resolve("framer-motion");
    return true;
  } catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
      console.warn(warning);
      return false;
    } else throw e;
  }
};
export default checkForFramer;
