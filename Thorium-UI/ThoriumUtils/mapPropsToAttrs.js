import attrs from "./htmlAttributes";

export const mapPropsToAttrs = (props, tag) => {
  const g = {};
  const e = {};
  const t = {};
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
