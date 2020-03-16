export const updateFromProps = (props, theme) => {
  let updated = {};
  switch (props.size) {
    case "lg":
      updated.padding = ".3rem";
      updated.fontSize = "1.1rem";
      break;
    case "sm":
      updated.padding = ".2rem";
      updated.fontSize = ".9rem";
      break;
    default:
      break;
  }

  props.bordered && (updated.borderColor = "gray");
  updated = { ...theme.input.textInput, ...updated };
  return updated;
};
