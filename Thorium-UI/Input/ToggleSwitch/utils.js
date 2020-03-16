// Update styling based on given variant
export const updateFromProps = (variant, theme) => {
  let updated = {};
  switch (variant) {
    case "primary":
      updated.backgroundColor = theme.colors.primary;
      break;
    case "secondary":
      updated.backgroundColor = theme.colors.secondary;
      break;
    case "success":
      updated.backgroundColor = theme.colors.success;
      break;
    case "danger":
      updated.backgroundColor = theme.colors.danger;
      break;
    case "warning":
      updated.backgroundColor = theme.colors.warning;
      break;
    case "themeToggle":
      theme.name === "dark" && (updated.backgroundColor = "#2c189e");
      theme.name === "light" && (updated.backgroundColor = "#fffd6e");
      break;
    default:
      break;
  }
  return updated;
};
