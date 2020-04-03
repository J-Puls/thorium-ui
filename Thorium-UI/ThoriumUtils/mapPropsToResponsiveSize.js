export const mapPropsToResponsiveSize = props => {
  const sizeNames = ["all", "xs", "sm", "md", "lg", "xl"];
  const sizes = {};
  for (let name of sizeNames) {
    props[name] && (sizes[name] = props[name]);
  }
  return sizes;
};
