import { useEffect, useState } from "react";

export const useThemePreference = () => {
  const darkModeQuery = "(prefers-color-scheme: dark)";
  const getPrefersDarkMode = () => {
    return globalThis.matchMedia(darkModeQuery).matches;
  };
  const [themePreference, setThemePreference] = useState(
    getPrefersDarkMode() ? "dark" : "light"
  );
  const toggle = () => {
    setThemePreference(getPrefersDarkMode() ? "dark" : "light");
  };

  useEffect(() => {
    //  Update themePreference value if change is made in OS
    globalThis.matchMedia(darkModeQuery).addEventListener("change", toggle);

    // Prevent memory leak when unmounted
    return () => {
      globalThis
        .matchMedia(darkModeQuery)
        .removeEventListener("change", toggle);
    };
  }, []);

  return themePreference;
};
export default useThemePreference;
