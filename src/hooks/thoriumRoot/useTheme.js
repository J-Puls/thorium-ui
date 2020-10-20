import { useContext, useState, useLayoutEffect } from "react";
import { ThoriumContext } from "../../context/ThoriumContext";

export const useTheme = () => {
  const context = useContext(ThoriumContext);
  const [theme, setTheme] = useState(context.theme);

  useLayoutEffect(() => {
    setTheme(context.theme);
  }, [context.themeName]);
  return theme;
};
export default useTheme;
