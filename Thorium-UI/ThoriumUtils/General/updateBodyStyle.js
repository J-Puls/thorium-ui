// Because the DOM body element resides outside of the ThoriumRoot component, we must
// explicitly update it when the theme is changed. The value comes from a JSON object,
// so we must format it to valid CSS syntax first

/**
 * Formats JSX styling to CSS syntax, and explicitly updates the DOM body
 * @param { Object } style Object containing styling to be processed
 * @param { Object } [customStyle] Object containing custom styling, if applicable
 */
export const updateBodyStyle = (style, customStyle) => {
  const quotesAndBraces = /["{}]/g,
    commas = /[,]/g;
  // If a customThemes module was found, overwrite the default theme
  customStyle && (style = { ...style, ...customStyle });

  // Explicitely set the body styling
  document.body.style.cssText =
    JSON.stringify(style)
      .replace(quotesAndBraces, " ")
      .replace(commas, ";")
      .trim() + ";";
};
export default updateBodyStyle;
