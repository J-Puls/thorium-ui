/* Valid HTML attributes */
import attrs from "./htmlAttributes";

/**
 *
 * @param { Object } props React props object
 * @param { String } tag The element tag name
 * @returns {Object} An object containing HTML attributes corresponding to the given tag name
 */
export const mapPropsToAttrs = (props, tag) => {
  const [g, e, t] = [{}, {}, {}];
  for (let key of attrs.HTMLGlobalAttributes.keys()) {
    props[key] && (g[key] = props[key]);
  }
  for (let key of attrs.HTMLEventAttributes.keys()) {
    props[key] && (e[key] = props[key]);
  }
  if (tag) {
    for (let key of attrs[tag + "Attributes"].keys()) {
      props[key] && (t[key] = props[key]);
    }
  }
  return { ...g, ...e, ...t };
};
export default mapPropsToAttrs;
