import { useEffect, useState } from "react";

export const useThemePreference = (props) => {
  const darkModeQuery = "(prefers-color-scheme: dark)";
  const lightModeQuery = "(prefers-color-scheme: light)";

  const getThemePreference = () => {
    const preference = globalThis.matchMedia(darkModeQuery).matches
      ? "dark"
      : globalThis.matchMedia(lightModeQuery).matches
      ? "light"
      : props.defaultTheme;
    return preference;
  };

  const [themePreference, setThemePreference] = useState(
    props.overrideSysTheme ? props.defaultTheme : getThemePreference()
  );

  useEffect(() => {
    const toggle = () => {
      setThemePreference(getThemePreference());
    };
    //  Update themePreference value if change is made in OS
    globalThis.matchMedia(darkModeQuery).addEventListener("change", toggle);

    // Prevent memory leak when unmounted
    return () => {
      globalThis
        .matchMedia(darkModeQuery)
        .removeEventListener("change", toggle);
    };
  }, []);

  return { value: themePreference, setter: setThemePreference };
};
export default useThemePreference;
