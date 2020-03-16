export const updateFromProps = (props, variants) => {
  const update = {};
  if (props.variant) {
    switch (props.variant) {
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
      case "link":
        update.backgroundColor = variants.link.backgroundColor;
        update.color = variants.link.color;
        break;
      default:
        break;
    }
  } else {
    update.backgroundColor = variants.primary.backgroundColor;
    update.color = variants.primary.color;
  }

  if (props.size) {
    props.size === "lg" && (update.padding = ".75rem 1.25rem");
    props.size === "sm" && (update.padding = ".25rem .5rem");
  }

  props.stretch && (update.width = "100%");

  return update;
};
