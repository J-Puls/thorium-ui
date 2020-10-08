import { useEffect, useContext, useState } from "react";
import NavContext from "../../context/NavContext";

export const useActiveItem = () => {
  const context = useContext(NavContext);
  const [activeItem, setActiveItem] = useState(context.activeItem);
  useEffect(() => {
    setActiveItem(context.activeItem);
  }, [context.activeItem]);
  return activeItem;
};

export default useActiveItem;
