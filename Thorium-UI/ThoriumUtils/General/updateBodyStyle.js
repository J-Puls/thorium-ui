/////////////////////////////////////////////////////////////////////////////////////////
// Because the DOM body element resides outside of the ThoriumRoot component, we must  //
// explicitly update it when the theme is changed. The value comes from a Javascript   //
// object, so we must format it to valid CSS syntax first                              //
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Formats JSX styling to CSS syntax, and explicitly updates the DOM body
 * @param { Object } style Object containing styling to be processed
 * @param { Object } [customStyle] Object containing custom styling, if applicable
 */
export const updateBodyStyle = (style, customTheme) => {
  const quotesAndBraces = /["{}]/g,
    commas = /[,]/g;
  // If a customTheme module exists, overwrite the default style
  customTheme && (style = { ...style, ...customTheme });

  // Format to CSS syntax
  const bodyStyle =
    JSON.stringify(style)
      .replace(quotesAndBraces, " ")
      .replace(commas, ";")
      .trim() + ";";

  // Explicitely set the body styling
  document.body.style.cssText = bodyStyle;
};
export default updateBodyStyle;
