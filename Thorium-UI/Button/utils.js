export const updateFromProps = (style, props, context) => {
  let update = { ...style };
  let variants = context.theme.button;

  // Props is immutable, so we need to make a mutable copy
  const propCopy = { ...props };

  // Sets a switchable default variant value if none is provided
  if (!props.variant) propCopy.variant = "none";

  // Destructure the props object into an array to loop through
  const propEntries = Object.entries(propCopy);

  // Iterate through all the props, mapping the 'update' values accordingly
  propEntries.forEach(prop => {
    const key = prop[0];
    const value = prop[1];
    switch (key) {
      case "variant":
        switch (value) {
          case "none":
            update.backgroundColor = variants.primary.backgroundColor;
            update.color = variants.primary.color;
            break;
          case "primary":
            update.backgroundColor = variants.primary.backgroundColor;
            update.color = variants.primary.color;
            break;
          case "secondary":
            update.backgroundColor = variants.secondary.backgroundColor;
            update.color = variants.secondary.color;
            break;
          case "success":
            update.backgroundColor = variants.success.backgroundColor;
            update.color = variants.success.color;
            break;
          case "warning":
            update.backgroundColor = variants.warning.backgroundColor;
            update.color = variants.warning.color;
            break;
          case "danger":
            update.backgroundColor = variants.danger.backgroundColor;
            update.color = variants.danger.color;
            break;
          case "dark":
            update.backgroundColor = variants.dark.backgroundColor;
            update.color = variants.dark.color;
            break;
          case "light":
            update.backgroundColor = variants.light.backgroundColor;
            update.color = variants.light.color;
            break;
          default:
            break;
        }
      case "size":
        switch (value) {
          case "lg":
            update.padding = ".75rem 1.25rem";
            break;
          case "sm":
            update.padding = ".25rem .5rem";
            break;
          default:
            break;
        }
      case "stretch":
        switch (value) {
          case true:
            update.width = "100%";
            break;
          default:
            break;
        }
    }
  });
  return update;
};
