export const updateFromProps = (props, theme) => {
  let updated = {};

  props.bordered && (updated.borderColor = "gray");
  updated = { ...theme.input.textInput, ...updated };
  return updated;
};
