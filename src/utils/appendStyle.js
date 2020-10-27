/**
 * Dynamically append style modifications, based on supplied prop values
 * @param {object} props React props object
 * @param {Array} stylingProps List of valid styling props
 * @param {object} style The default style object to be appended to
 * @param {object} styleRoot The root style object containing all possible styling properties
 * @returns {object} An object containing the updated style
 */
export const appendStyle = (props, stylingProps, style, styleRoot) => {
  for (const prop of stylingProps) {
    if (props[prop]) {
      switch (typeof styleRoot[prop]) {
        case "object":
          style = { ...style, ...styleRoot[prop] };
          break;
        case "function":
          style = { ...style, ...styleRoot[prop](props[prop]) };
          break;
        default:
          break;
      }
    }
  }
  return style;
};
export default appendStyle;
