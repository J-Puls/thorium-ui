////////////////////////////////
//  Breakpoints:              //
//    xs: < 576               //
//    sm: >= 576 && < 1024    //
//    md: >= 1024 && < 1366   //
//    lg: >= 1366 && < 1920   //
//     xl: > 1920             //
////////////////////////////////

/**
 * Returns the viewportSizeName based on the given width
 * @param {Number} w The current viewport width
 * @returns {String} The matching breakpoint size name
 */
export const updateVpName = (w) => {
  if (w < 576) return "xs";
  else if (w >= 576 && w < 1024) return "sm";
  else if (w >= 1024 && w < 1366) return "md";
  else if (w >= 1366 && w < 1920) return "lg";
  else return "xl";
};
