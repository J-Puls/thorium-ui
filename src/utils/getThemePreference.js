export const getThemePreference = (defaultTheme) => {
  const darkModeQuery = "(prefers-color-scheme: dark)";
  const lightModeQuery = "(prefers-color-scheme: light)";
  const preference = globalThis.matchMedia(darkModeQuery).matches
    ? "dark"
    : globalThis.matchMedia(lightModeQuery).matches
    ? "light"
    : defaultTheme;
  return preference;
};

export default getThemePreference;
