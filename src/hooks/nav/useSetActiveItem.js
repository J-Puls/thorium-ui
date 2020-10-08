import { useContext } from "react";
import NavContext from "../../context/NavContext";

export const useSetActiveItem = () => {
  const context = useContext(NavContext);
  return context.setActiveItem;
};

export default useSetActiveItem;
