/**
 * Body element resides outside of the ThoriumRoot component, so we must
 * explicitly update it when the theme is changed.
 *
 * The value comes from a JSON object, so we must first format it to valid CSS syntax first
 */

export const updateBodyStyle = (style, customStyle) => {
  const quotesAndBraces = /["{}]/g;
  const commas = /[,]/g;
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
