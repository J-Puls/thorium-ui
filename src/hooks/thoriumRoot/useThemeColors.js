import { useState, useEffect } from "react";
import { useTheme } from "../thoriumRoot/useTheme";

export const useThemeColors = () => {
  const theme = useTheme();
  const [themeColors, setThemeColors] = useState(theme.colors);
  useEffect(() => {
    setThemeColors(theme.colors);
  }, [theme.colors]);
  return themeColors;
};
export default useThemeColors;
