const warning = `DropdownLink and NavLink components require react-router-dom.
If you intend to use them, run the following command in the terminal
'npm i --save react-router-dom'
For more information visit https://reacttraining.com/react-router/`;

/**
 * Checks if React Router is installed, provides a warning if not.
 * @returns true or false
 */
export const checkForRouter = () => {
  try {
    require.resolve("react-router-dom");
    return true;
  } catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
      console.warn(warning);
      return false;
    } else throw e;
  }
};
export default checkForRouter;
