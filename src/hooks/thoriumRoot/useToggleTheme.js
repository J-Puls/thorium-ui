import { useContext } from "react";
import { ThoriumContext } from "../../context/ThoriumContext";

export const useToggleTheme = () => {
  const context = useContext(ThoriumContext);
  return context.toggleTheme;
};

export default useToggleTheme;
