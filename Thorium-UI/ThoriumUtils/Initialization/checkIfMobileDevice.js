/**
 * Checks if the browser is running on a mobile device
 * @returns { boolean } true or false
 */

export const checkIfMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};
