// Update styling based on given variant
export const updateFromProps = (variant, theme) => {
  if (variant === "themeToggle") {
    if (theme.name === "dark") {
      return { backgroundColor: "#2c189e" };
    } else return { backgroundColor: "#fffd6e" };
  } else return { backgroundColor: theme.colors[variant] };
};
