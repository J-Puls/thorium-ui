import { config } from "../../config";

/**
 *
 * @param { String } vpName The current context viewportSizeName
 * @param { number } vpWidth The current context viewportWidth
 * @returns {number} The adjusted width for the current viewport size
 */
export const updateFromVPName = (vpName, vpWidth) => {
  return vpWidth / config.containerSizes[vpName];
};
